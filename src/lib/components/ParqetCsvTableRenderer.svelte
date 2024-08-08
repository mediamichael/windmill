<script lang="ts">
    import { onMount } from 'svelte';
    import { createGrid, type GridOptions, type Grid } from 'ag-grid-community';
    import 'ag-grid-community/styles/ag-grid.css';
    import 'ag-grid-community/styles/ag-theme-alpine.css';
    import { twMerge } from 'tailwind-merge';
    import DarkModeObserver from './DarkModeObserver.svelte';
    import { HelpersService } from '$lib/gen';
    import { base } from '$lib/base';
    import { enterpriseLicense, workspaceStore } from '$lib/stores';
    import { Download } from 'lucide-svelte';

    let gridOptions: GridOptions;
    let selectedRowIndex = -1;
    export let s3resource: string;
    export let storage: string | undefined;
    export let workspaceId: string | undefined;
    export let disable_download: boolean = false;
    let csvSeparatorChar: string = ',';
    let eGui: HTMLDivElement;
    let darkMode: boolean = false;
    let error: string | undefined = undefined;
    let api: Grid | undefined;

    onMount(() => {
        initializeGrid();  // Changed function name here
    });

    async function initializeGrid() {
        if (!eGui) return; // Ensure the div is mounted

        try {
            const csv = s3resource.endsWith('.csv');
            const res = csv
                ? await HelpersService.loadCsvPreview({
                      workspace: $workspaceStore!,
                      path: s3resource,
                      limit: 0,
                      storage: storage,
                      csvSeparator: csvSeparatorChar
                  })
                : await HelpersService.loadParquetPreview({
                      workspace: $workspaceStore!,
                      path: s3resource,
                      limit: 0,
                      storage: storage
                  });

            gridOptions = {
                columnDefs: res.columns.map(c => ({
                    field: c,
                    sortable: true,
                    filter: true,
                    filterParams: {
                        filterOptions: ['contains'],
                        maxNumConditions: 1
                    }
                })),
                rowModelType: 'infinite',
                datasource: {
                    rowCount: null, // not setting row count, let Grid handle it
                    getRows: function(params) {
                        HelpersService.fetchRows({ params, csv, csvSeparatorChar }) // Adjust according to your backend API
                            .then(data => params.successCallback(data.rows, data.lastRow))
                            .catch(error => params.failCallback());
                    }
                },
                onGridReady: event => {
                    api = event.api;
                    api.sizeColumnsToFit();
                },
                onSelectionChanged: () => {
                    const rows = api?.getSelectedNodes();
                    if (rows && rows.length > 0) {
                        selectedRowIndex = rows[0].rowIndex;
                    }
                }
            };

            createGrid(eGui, gridOptions);
            error = undefined;
        } catch (e) {
            error = `Error: ${e.message || JSON.stringify(e)}`;
            console.error(e);
        }
    }
</script>

<DarkModeObserver bind:darkMode />

<div class={twMerge('mt-2 flex flex-col h-full min-h-[600px]')}>
    {#if s3resource.endsWith('.csv')}
        <div class="flex flex-row-reverse w-full">
            <div class="flex items-baseline">
                <label for="csvSeparatorChar" class="text-2xs text-secondary">Separator</label>
                <div class="w-12 ml-2 mr-2">
                    <select class="h-8" bind:value={csvSeparatorChar} on:change={() => initializeGrid()}>
                        <option value=",">,</option>
                        <option value=";">;</option>
                        <option value="\t">\t</option>
                        <option value="|">|</option>
                    </select>
                </div>
            </div>
        </div>
    {/if}
    {#if !disable_download && !s3resource.endsWith('.csv')}
        <a
            target="_blank"
            href="{base}/api/w/{workspaceId}/job_helpers/download_s3_parquet_file_as_csv?file_key={s3resource}{storage
                ? `&storage=${storage}`
                : ''}"
            class="text-secondary w-full text-right underline text-2xs whitespace-nowrap"
            ><div class="flex flex-row-reverse gap-2 items-center"><Download size={12} /> CSV</div></a
        >
    {/if}
    <div
        class="ag-theme-alpine shadow-sm h-full"
        class:ag-theme-alpine-dark={darkMode}
        style="height: 600px;"
        bind:this={eGui}
    >
        {#if error}
            <div class="text-red-500">{error}</div>
            <div>Try changing separator to fix it</div>
        {/if}
    </div>
</div>
