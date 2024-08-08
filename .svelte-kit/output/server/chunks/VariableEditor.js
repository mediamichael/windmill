import { c as create_ssr_component, v as validate_component, s as subscribe, d as createEventDispatcher, h as getContext, b as add_attribute, f as each, e as escape, z as null_to_empty, a as set_store_value } from "./ssr.js";
import { d as FolderService, F as FlowService, c as ScriptService, R as ResourceService, V as VariableService, S as ScheduleService, A as AppService } from "./services.gen.js";
import { p as pathToMeta } from "./common2.js";
import { u as userStore, w as workspaceStore, b as superadmin } from "./stores2.js";
import { w as writable } from "./index.js";
import { A as Alert } from "./Alert.js";
import { B as Badge } from "./Badge.js";
import { B as Button, u as isOwner, a as canWrite } from "./toast.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import "./common.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { F as FolderEditor } from "./FolderEditor.js";
import { R as Required } from "./Required.js";
import { T as Tooltip } from "./Tooltip.js";
import { P as Plus } from "./plus.js";
import { U as User } from "./user2.js";
import { I as Icon } from "./Icon.js";
import { E as Eye } from "./eye.js";
import { S as Search_code } from "./search-code.js";
import { T as Toggle } from "./Toggle.js";
import { S as SimpleEditor } from "./SimpleEditor.js";
import { S as Section } from "./Section.js";
const Folder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "folder" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Save = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
      }
    ],
    ["polyline", { "points": "17 21 17 13 7 13 7 21" }],
    ["polyline", { "points": "7 3 7 8 15 8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "save" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const adjectives = [
  "abundant",
  "accessible",
  "accommodative",
  "accomplished",
  "accurate",
  "achievable",
  "adaptable",
  "adaptive",
  "adequate",
  "adjustable",
  "admirable",
  "admiring",
  "adorable",
  "adored",
  "adoring",
  "adroit",
  "adulatory",
  "advanced",
  "advantageous",
  "adventuresome",
  "adventurous",
  "affable",
  "affectionate",
  "affirmative",
  "affluent",
  "affordable",
  "agile",
  "agreeable",
  "alluring",
  "altruistic",
  "amazed",
  "amazing",
  "ambitious",
  "amenable",
  "amiable",
  "amicable",
  "ample",
  "amusing",
  "angelic",
  "appealing",
  "appreciable",
  "appreciated",
  "appreciative",
  "appropriate",
  "ardent",
  "articulate",
  "artistic",
  "assuring",
  "astonished",
  "astonishing",
  "astounded",
  "astounding",
  "athletic",
  "attentive",
  "attractive",
  "audible",
  "auspicious",
  "authentic",
  "authoritative",
  "autonomous",
  "available",
  "avid",
  "awed",
  "awesome",
  "awestruck",
  "balanced",
  "beauteous",
  "beautiful",
  "believable",
  "beloved",
  "beneficent",
  "beneficial",
  "beneficiary",
  "benevolent",
  "best",
  "best_known",
  "best_performing",
  "best_selling",
  "better",
  "better_known",
  "better_than_expected",
  "blameless",
  "blissful",
  "blithe",
  "bonny",
  "booming",
  "boundless",
  "bountiful",
  "brainiest",
  "brainy",
  "brand_new",
  "brave",
  "breathtaking",
  "bright",
  "brighter",
  "brightest",
  "brilliant",
  "brisk",
  "brotherly",
  "bullish",
  "buoyant",
  "calm",
  "calming",
  "capable",
  "captivating",
  "carefree",
  "catchy",
  "celebrated",
  "celebratory",
  "champion",
  "charismatic",
  "charitable",
  "charming",
  "chaste",
  "cheaper",
  "cheapest",
  "cheerful",
  "cheery",
  "cherished",
  "chivalrous",
  "classic",
  "classy",
  "clean",
  "cleaner",
  "cleanest",
  "cleanly",
  "clear",
  "clear_cut",
  "cleared",
  "clearer",
  "clever",
  "coherent",
  "cohesive",
  "colorful",
  "comely",
  "comfortable",
  "comforting",
  "comfy",
  "commendable",
  "commodious",
  "compact",
  "compassionate",
  "compatible",
  "competitive",
  "complementary",
  "compliant",
  "complimentary",
  "comprehensive",
  "conciliatory",
  "concise",
  "confident",
  "congenial",
  "congratulatory",
  "conscientious",
  "considerate",
  "consistent",
  "constructive",
  "consummate",
  "contrasty",
  "convenient",
  "convincing",
  "cool",
  "coolest",
  "cooperative",
  "correct",
  "cost_effective",
  "cost_saving",
  "courageous",
  "courteous",
  "courtly",
  "cozy",
  "creative",
  "credible",
  "crisp",
  "crisper",
  "cure_all",
  "cushy",
  "cute",
  "daring",
  "darling",
  "dashing",
  "dauntless",
  "dazzled",
  "dazzling",
  "dead_cheap",
  "dead_on",
  "decent",
  "decisive",
  "dedicated",
  "defeated",
  "deft",
  "delectable",
  "delicate",
  "delicious",
  "delighted",
  "delightful",
  "dependable",
  "deserving",
  "desirable",
  "desirous",
  "detachable",
  "devout",
  "dexterous",
  "dextrous",
  "dignified",
  "diligent",
  "diplomatic",
  "dirt_cheap",
  "distinctive",
  "distinguished",
  "diversified",
  "divine",
  "dominated",
  "dumbfounded",
  "dumbfounding",
  "dummy_proof",
  "durable",
  "dynamic",
  "eager",
  "earnest",
  "eased",
  "easier",
  "easiest",
  "easy",
  "easy_to_use",
  "easygoing",
  "ebullient",
  "economical",
  "ecstatic",
  "educated",
  "effective",
  "effectual",
  "efficacious",
  "efficient",
  "effortless",
  "effusive",
  "elated",
  "elegant",
  "elite",
  "eloquent",
  "eminent",
  "enchanted",
  "enchanting",
  "encouraging",
  "endearing",
  "endorsed",
  "energetic",
  "energy_efficient",
  "energy_saving",
  "engaging",
  "engrossing",
  "enhanced",
  "enjoyable",
  "enough",
  "enraptured",
  "enterprising",
  "entertaining",
  "enthralled",
  "enthusiastic",
  "enticing",
  "entranced",
  "entrancing",
  "enviable",
  "envious",
  "equitable",
  "err_free",
  "erudite",
  "ethical",
  "euphoric",
  "evaluative",
  "eventful",
  "everlasting",
  "evocative",
  "exalted",
  "exalting",
  "exceeding",
  "excellent",
  "exceptional",
  "excited",
  "exciting",
  "exemplary",
  "exhilarating",
  "expansive",
  "exquisite",
  "extraordinary",
  "exuberant",
  "exultant",
  "eye_catching",
  "fabulous",
  "fair",
  "faithful",
  "famed",
  "famous",
  "fancier",
  "fancy",
  "fantastic",
  "fascinating",
  "fashionable",
  "fast",
  "fast_growing",
  "fast_paced",
  "faster",
  "fastest",
  "fastest_growing",
  "faultless",
  "favorable",
  "favored",
  "favorite",
  "fearless",
  "feasible",
  "feature_rich",
  "feisty",
  "felicitous",
  "fertile",
  "fervent",
  "fervid",
  "festive",
  "fiery",
  "fine",
  "fine_looking",
  "finer",
  "finest",
  "firmer",
  "first_class",
  "first_in_class",
  "first_rate",
  "flashy",
  "flatter",
  "flattering",
  "flawless",
  "flexible",
  "flourishing",
  "fluent",
  "fond",
  "foolproof",
  "foremost",
  "formidable",
  "fortuitous",
  "fortunate",
  "fragrant",
  "free",
  "freed",
  "fresh",
  "fresher",
  "freshest",
  "friendly",
  "frugal",
  "fruitful",
  "fun",
  "funny",
  "futuristic",
  "gainful",
  "gallant",
  "galore",
  "generous",
  "genial",
  "gentle",
  "gentlest",
  "genuine",
  "gifted",
  "glad",
  "glamorous",
  "gleeful",
  "glimmering",
  "glistening",
  "glorious",
  "glowing",
  "god_given",
  "godlike",
  "gold",
  "golden",
  "good",
  "goodly",
  "gorgeous",
  "graceful",
  "gracious",
  "grand",
  "grateful",
  "gratified",
  "gratifying",
  "great",
  "greatest",
  "groundbreaking",
  "guiltless",
  "gutsy",
  "halcyon",
  "hale",
  "hallowed",
  "handier",
  "hands_down",
  "handsome",
  "handy",
  "happier",
  "happy",
  "hard_working",
  "hardier",
  "hardy",
  "harmless",
  "harmonious",
  "healthful",
  "healthy",
  "heartening",
  "heartfelt",
  "heartwarming",
  "heavenly",
  "helpful",
  "heroic",
  "high_quality",
  "high_spirited",
  "hilarious",
  "holy",
  "honest",
  "honorable",
  "honored",
  "hopeful",
  "hospitable",
  "hot",
  "hottest",
  "humane",
  "humble",
  "humorous",
  "humourous",
  "ideal",
  "idolized",
  "idyllic",
  "illuminating",
  "illustrious",
  "imaginative",
  "immaculate",
  "immense",
  "impartial",
  "impassioned",
  "impeccable",
  "important",
  "impressed",
  "impressive",
  "improved",
  "improving",
  "incredible",
  "indebted",
  "individualized",
  "indulgent",
  "industrious",
  "inestimable",
  "inexpensive",
  "infallible",
  "influential",
  "ingenious",
  "ingenuous",
  "innocuous",
  "innovative",
  "insightful",
  "inspirational",
  "inspiring",
  "instructive",
  "instrumental",
  "integral",
  "integrated",
  "intelligent",
  "intelligible",
  "interesting",
  "intimate",
  "intricate",
  "intriguing",
  "intuitive",
  "invaluable",
  "inventive",
  "invigorating",
  "invincible",
  "inviolable",
  "inviolate",
  "invulnerable",
  "irreplaceable",
  "irreproachable",
  "irresistible",
  "issue_free",
  "jaw_dropping",
  "jolly",
  "jovial",
  "joyful",
  "joyous",
  "jubilant",
  "judicious",
  "keen",
  "kid_friendly",
  "kindly",
  "knowledgeable",
  "large_capacity",
  "laudable",
  "lavish",
  "law_abiding",
  "lawful",
  "leading",
  "lean",
  "legendary",
  "light_hearted",
  "lighter",
  "likable",
  "like",
  "liked",
  "lionhearted",
  "lively",
  "logical",
  "long_lasting",
  "lovable",
  "loved",
  "lovely",
  "loving",
  "low_cost",
  "low_price",
  "low_priced",
  "low_risk",
  "lower_priced",
  "loyal",
  "lucid",
  "luckier",
  "luckiest",
  "lucky",
  "lucrative",
  "luminous",
  "lush",
  "lustrous",
  "luxuriant",
  "luxurious",
  "luxury",
  "lyrical",
  "magic",
  "magical",
  "magnanimous",
  "magnificent",
  "majestic",
  "manageable",
  "maneuverable",
  "marvellous",
  "marvelous",
  "masterful",
  "matchless",
  "mature",
  "meaningful",
  "memorable",
  "merciful",
  "meritorious",
  "merry",
  "mesmerized",
  "mesmerizing",
  "meticulous",
  "mighty",
  "mind_blowing",
  "miraculous",
  "modern",
  "modest",
  "momentous",
  "monumental",
  "motivated",
  "multi_purpose",
  "navigable",
  "neat",
  "neatest",
  "nice",
  "nicer",
  "nicest",
  "nifty",
  "nimble",
  "noble",
  "noiseless",
  "non_violent",
  "noteworthy",
  "nourishing",
  "observant",
  "obtainable",
  "optimal",
  "optimistic",
  "opulent",
  "orderly",
  "organized",
  "outstanding",
  "overjoyed",
  "pain_free",
  "painless",
  "palatial",
  "pampered",
  "panoramic",
  "paramount",
  "passionate",
  "patient",
  "patri",
  "otic",
  "peaceable",
  "peaceful",
  "peerless",
  "peppy",
  "perfect",
  "permissible",
  "personalized",
  "phenomenal",
  "picturesque",
  "playful",
  "pleasant",
  "pleased",
  "pleasing",
  "pleasurable",
  "plentiful",
  "plush",
  "poetic",
  "poignant",
  "poised",
  "polished",
  "polite",
  "popular",
  "portable",
  "posh",
  "positive",
  "powerful",
  "praiseworthy",
  "praising",
  "pre_eminent",
  "precious",
  "precise",
  "preeminent",
  "preferable",
  "premier",
  "prestigious",
  "pretty",
  "priceless",
  "principled",
  "privileged",
  "prize",
  "proactive",
  "problem_free",
  "prodigious",
  "productive",
  "proficient",
  "profound",
  "profuse",
  "progressive",
  "prolific",
  "prominent",
  "promised",
  "promising",
  "prompt",
  "proper",
  "propitious",
  "prosperous",
  "protective",
  "proud",
  "proven",
  "prudent",
  "punctual",
  "pure",
  "purposeful",
  "quaint",
  "qualified",
  "quicker",
  "quiet",
  "quieter",
  "radiant",
  "rapid",
  "rapt",
  "rapturous",
  "rational",
  "razor_sharp",
  "reachable",
  "readable",
  "ready",
  "realistic",
  "realizable",
  "reasonable",
  "reasoned",
  "receptive",
  "recommended",
  "record_setting",
  "redeeming",
  "refined",
  "reformed",
  "refreshed",
  "refreshing",
  "regal",
  "rejoicing",
  "relaxed",
  "reliable",
  "remarkable",
  "renewed",
  "renowned",
  "replaceable",
  "reputable",
  "resilient",
  "resolute",
  "resounding",
  "resourceful",
  "respectable",
  "respectful",
  "resplendent",
  "responsive",
  "restful",
  "restored",
  "retractable",
  "reverent",
  "revolutionary",
  "rewarding",
  "rich",
  "richer",
  "right",
  "righteous",
  "rightful",
  "risk_free",
  "robust",
  "rock_star",
  "romantic",
  "roomier",
  "roomy",
  "rosy",
  "safe",
  "saintly",
  "salutary",
  "sane",
  "satisfactory",
  "satisfied",
  "satisfying",
  "scenic",
  "seamless",
  "seasoned",
  "secure",
  "selective",
  "self_determination",
  "self_respect",
  "self_satisfaction",
  "self_sufficiency",
  "self_sufficient",
  "sensational",
  "sensible",
  "sensitive",
  "serene",
  "sexy",
  "sharp",
  "sharper",
  "sharpest",
  "shiny",
  "significant",
  "silent",
  "simpler",
  "simplest",
  "simplified",
  "sincere",
  "skilled",
  "skillful",
  "sleek",
  "slick",
  "smart",
  "smarter",
  "smartest",
  "smiling",
  "smitten",
  "smooth",
  "smoother",
  "smoothest",
  "snappy",
  "snazzy",
  "sociable",
  "soft",
  "softer",
  "solicitous",
  "solid",
  "sophisticated",
  "soulful",
  "spacious",
  "sparkling",
  "spectacular",
  "speedy",
  "spellbinding",
  "spellbound",
  "spirited",
  "spiritual",
  "splendid",
  "spontaneous",
  "sporty",
  "spotless",
  "sprightly",
  "stable",
  "stainless",
  "state_of_the_art",
  "stately",
  "statuesque",
  "staunch",
  "steadfast",
  "steadiest",
  "steady",
  "stellar",
  "stimulating",
  "stimulative",
  "straightforward",
  "streamlined",
  "striking",
  "strong",
  "stronger",
  "strongest",
  "stunned",
  "stunning",
  "stupendous",
  "sturdier",
  "sturdy",
  "stylish",
  "stylized",
  "suave",
  "sublime",
  "subsidized",
  "substantive",
  "succeeding",
  "successful",
  "sufficient",
  "suitable",
  "sumptuous",
  "super",
  "superb",
  "superior",
  "supple",
  "supported",
  "supporting",
  "supportive",
  "supreme",
  "surreal",
  "sustainable",
  "swank",
  "swankier",
  "swankiest",
  "swanky",
  "sweeping",
  "sweet",
  "sweetheart",
  "swift",
  "talented",
  "tantalizing",
  "tempting",
  "tenacious",
  "tender",
  "terrific",
  "thankful",
  "thinner",
  "thoughtful",
  "thrifty",
  "thrilled",
  "thrilling",
  "thriving",
  "thumb_up",
  "thumbs_up",
  "tidy",
  "time_honored",
  "timely",
  "titillating",
  "tolerable",
  "toll_free",
  "top",
  "top_notch",
  "top_quality",
  "topnotch",
  "tops",
  "tough",
  "tougher",
  "toughest",
  "tranquil",
  "transparent",
  "trendy",
  "triumphal",
  "triumphant",
  "trouble_free",
  "trusted",
  "trusting",
  "trustworthy",
  "trusty",
  "truthful",
  "twinkly",
  "ultra_crisp",
  "unabashed",
  "unaffected",
  "unassailable",
  "unbeatable",
  "unbiased",
  "unbound",
  "uncomplicated",
  "unconditional",
  "undamaged",
  "undaunted",
  "understandable",
  "undisputable",
  "undisputed",
  "unencumbered",
  "unequivocal",
  "unfettered",
  "unforgettable",
  "unlimited",
  "unmatched",
  "unparalleled",
  "unquestionable",
  "unreal",
  "unrestricted",
  "unrivaled",
  "unselfish",
  "unwavering",
  "upbeat",
  "upscale",
  "usable",
  "useable",
  "useful",
  "user_friendly",
  "user_replaceable",
  "valiant",
  "valuable",
  "verifiable",
  "veritable",
  "versatile",
  "vibrant",
  "victorious",
  "viewable",
  "vigilant",
  "virtuous",
  "visionary",
  "vivacious",
  "vivid",
  "warm",
  "warmer",
  "warmhearted",
  "wealthy",
  "welcome",
  "well",
  "well_backlit",
  "well_balanced",
  "well_behaved",
  "well_being",
  "well_bred",
  "well_connected",
  "well_educated",
  "well_established",
  "well_informed",
  "well_intentioned",
  "well_known",
  "well_made",
  "well_managed",
  "well_mannered",
  "well_positioned",
  "well_received",
  "well_regarded",
  "well_rounded",
  "well_run",
  "well_wishers",
  "wholesome",
  "wieldy",
  "willing",
  "winning",
  "wise",
  "witty",
  "won",
  "wonderful",
  "wondrous",
  "workable",
  "world_famous",
  "worth",
  "worthwhile",
  "worthy",
  "young",
  "youthful",
  "zippy"
];
function random_adj() {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}
const css = {
  code: "input.svelte-1renn9e:disabled{background:hsla(0,0%,78%,.267)}",
  map: null
};
const lastMetaUsed = writable(void 0);
function metaToPath(meta) {
  return [meta.ownerKind?.charAt(0) ?? "", meta.owner, meta.name].join("/");
}
const Path = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $lastMetaUsed, $$unsubscribe_lastMetaUsed;
  let $superadmin, $$unsubscribe_superadmin;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_lastMetaUsed = subscribe(lastMetaUsed, (value) => $lastMetaUsed = value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  let meta = void 0;
  let { fullNamePlaceholder = void 0 } = $$props;
  let { namePlaceholder = "" } = $$props;
  let { initialPath } = $$props;
  let { path = "" } = $$props;
  let { error = "" } = $$props;
  let { disabled = false } = $$props;
  let { checkInitialPathExistence = false } = $$props;
  let { autofocus = true } = $$props;
  let { dirty = false } = $$props;
  let { kind } = $$props;
  let inputP = void 0;
  createEventDispatcher();
  let folders = [];
  function onMetaChange() {
    if (meta) {
      path = metaToPath(meta);
      validate(meta, path, kind);
      set_store_value(lastMetaUsed, $lastMetaUsed = { ...meta, name: "" }, $lastMetaUsed);
    }
  }
  function focus() {
  }
  function setName(x) {
    if (meta) {
      meta.name = x;
      onMetaChange();
    }
  }
  async function reset() {
    if (path == "" || path == "u//") {
      if ($lastMetaUsed == void 0 || $lastMetaUsed.owner != $userStore?.username) {
        meta = {
          ownerKind: "user",
          name: fullNamePlaceholder ?? random_adj() + "_" + namePlaceholder,
          owner: ""
        };
        if ($userStore?.username?.includes("@")) {
          meta.owner = $userStore.username.split("@")[0].replace(/[^a-zA-Z0-9_]/g, "");
        } else {
          meta.owner = $userStore.username;
        }
      } else {
        meta = {
          ...$lastMetaUsed,
          name: fullNamePlaceholder ?? random_adj() + "_" + namePlaceholder
        };
      }
      let newMeta = { ...meta };
      while (await pathExists(metaToPath(newMeta), kind)) {
        disabled = true;
        error = "finding an available name...";
        newMeta.name = random_adj() + "_" + fullNamePlaceholder;
      }
      error = "";
      disabled = false;
      meta = newMeta;
      path = metaToPath(meta);
    } else {
      meta = pathToMeta(path);
    }
  }
  async function loadFolders() {
    let initialFolders = [];
    let initialFolder = "";
    if (initialPath?.split("/")?.[0] == "f") {
      initialFolder = initialPath?.split("/")?.[1];
      initialFolders.push({ name: initialFolder, write: true });
    }
    folders = initialFolders.concat((await FolderService.listFolderNames({ workspace: $workspaceStore })).filter((x) => x != initialFolder && x != "app_groups" && x != "app_custom" && x != "app_themes" && x != "app_custom").map((x) => ({
      name: x,
      write: $userStore?.folders?.includes(x) == true || ($userStore?.is_admin ?? false) || ($userStore?.is_super_admin ?? false)
    })));
  }
  async function validate(meta2, path2, kind2) {
    error = "";
    validateName(meta2) && validatePath(path2, kind2);
  }
  let validateTimeout = void 0;
  async function validatePath(path2, kind2) {
    if (validateTimeout) {
      clearTimeout(validateTimeout);
    }
    validateTimeout = setTimeout(
      async () => {
        if ((path2 == "" || checkInitialPathExistence || path2 != initialPath) && await pathExists(path2, kind2)) {
          error = "path already used";
        } else if (meta && validateName(meta)) {
          error = "";
        }
        validateTimeout = void 0;
      },
      500
    );
  }
  async function pathExists(path2, kind2) {
    if (kind2 == "flow") {
      return await FlowService.existsFlowByPath({ workspace: $workspaceStore, path: path2 });
    } else if (kind2 == "script") {
      return await ScriptService.existsScriptByPath({ workspace: $workspaceStore, path: path2 });
    } else if (kind2 == "resource") {
      return await ResourceService.existsResource({ workspace: $workspaceStore, path: path2 });
    } else if (kind2 == "variable") {
      return await VariableService.existsVariable({ workspace: $workspaceStore, path: path2 });
    } else if (kind2 == "schedule") {
      return await ScheduleService.existsSchedule({ workspace: $workspaceStore, path: path2 });
    } else if (kind2 == "app") {
      return await AppService.existsApp({ workspace: $workspaceStore, path: path2 });
    } else {
      return false;
    }
  }
  function validateName(meta2) {
    if (meta2.name == void 0 || meta2.name == "") {
      error = "Choose a name";
      return false;
    } else if (!/^[\w-]+(\/[\w-]+)*$/.test(meta2.name)) {
      error = "This name is not valid";
      return false;
    } else if (meta2.owner == "" && meta2.ownerKind == "folder") {
      error = "Folder need to be chosen";
      return false;
    } else if (meta2.owner == "" && meta2.ownerKind == "group") {
      error = "Group need to be chosen";
      return false;
    } else {
      return true;
    }
  }
  function initPath() {
    if (path != void 0 && path != "") {
      meta = pathToMeta(path);
      onMetaChange();
      return;
    }
    if (initialPath == void 0 || initialPath == "") {
      reset();
    } else {
      meta = pathToMeta(initialPath);
      onMetaChange();
      path = initialPath;
    }
  }
  let newFolder;
  let viewFolder;
  let newFolderName;
  getContext("openSearchWithPrefilledText");
  if ($$props.fullNamePlaceholder === void 0 && $$bindings.fullNamePlaceholder && fullNamePlaceholder !== void 0) $$bindings.fullNamePlaceholder(fullNamePlaceholder);
  if ($$props.namePlaceholder === void 0 && $$bindings.namePlaceholder && namePlaceholder !== void 0) $$bindings.namePlaceholder(namePlaceholder);
  if ($$props.initialPath === void 0 && $$bindings.initialPath && initialPath !== void 0) $$bindings.initialPath(initialPath);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.checkInitialPathExistence === void 0 && $$bindings.checkInitialPathExistence && checkInitialPathExistence !== void 0) $$bindings.checkInitialPathExistence(checkInitialPathExistence);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0) $$bindings.autofocus(autofocus);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0) $$bindings.dirty(dirty);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  if ($$props.setName === void 0 && $$bindings.setName && setName !== void 0) $$bindings.setName(setName);
  if ($$props.reset === void 0 && $$bindings.reset && reset !== void 0) $$bindings.reset(reset);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    meta && onMetaChange();
    {
      {
        if ($workspaceStore && $userStore) {
          loadFolders();
          initPath();
        }
      }
    }
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: newFolder },
      {
        this: ($$value) => {
          newFolder = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "New Folder" }, {}, {
            default: () => {
              return `${`<div class="flex flex-col gap-2"><input placeholder="New folder name" class="svelte-1renn9e"${add_attribute("value", newFolderName, 0)}> ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "md",
                  startIcon: { icon: Plus },
                  disabled: !newFolderName
                },
                {},
                {
                  default: () => {
                    return `New folder`;
                  }
                }
              )}</div>`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: viewFolder },
      {
        this: ($$value) => {
          viewFolder = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Folder " + meta?.owner }, {}, {
            default: () => {
              return `${validate_component(FolderEditor, "FolderEditor").$$render($$result, { name: meta?.owner ?? "" }, {}, {})}`;
            }
          })}`;
        }
      }
    )} <div><div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-0 mb-1">${meta != void 0 ? `<div class="flex gap-x-4 shrink"> <div class="block"><span class="text-secondary text-sm whitespace-nowrap" data-svelte-h="svelte-1d1ygv8"> </span> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        class: "mt-0.5",
        selected: meta.ownerKind
      },
      {
        selected: ($$value) => {
          meta.ownerKind = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              icon: User,
              disabled,
              light: true,
              size: "xs",
              value: "user",
              position: "left",
              label: "User"
            },
            {},
            {}
          )}  ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              icon: Folder,
              disabled,
              light: true,
              size: "xs",
              value: "folder",
              position: "right",
              label: "Folder"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div> ${meta.ownerKind === "user" ? `<label class="block shrink min-w-0"><span class="text-secondary text-sm" data-svelte-h="svelte-1kuou1m">User</span> <input class="!w-36 svelte-1renn9e" type="text"${add_attribute("placeholder", $userStore?.username ?? "", 0)} ${disabled || !($superadmin || ($userStore?.is_admin ?? false)) ? "disabled" : ""}${add_attribute("value", meta.owner, 0)}></label>` : `${meta.ownerKind === "folder" ? `<label class="block grow w-48"><span class="text-secondary text-sm">Folder
							${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        documentationLink: "https://www.windmill.dev/docs/core_concepts/groups_and_folders"
      },
      {},
      {
        default: () => {
          return `Read and write permissions are given to groups and users at the folder level and
								shared by all items inside the folder.`;
        }
      }
    )}</span> <div class="flex flex-row items-center gap-1 w-full"><select class="grow w-full" ${disabled ? "disabled" : ""}>${folders?.length == 0 ? `<option disabled value="No folders" data-svelte-h="svelte-1x3utxk">No folders</option>` : ``}${each(folders, ({ name, write }) => {
      return `<option ${!write ? "disabled" : ""} value="${escape(name, true) + escape(write ? "" : " (read-only)", true)}">${escape(name)}${escape(write ? "" : " (read-only)")}</option>`;
    })}</select> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "View folder",
        btnClasses: "!p-1.5",
        variant: "border",
        color: "light",
        size: "xs",
        disabled: !meta.owner || meta.owner == "",
        iconOnly: true,
        startIcon: { icon: Eye }
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "New folder",
        btnClasses: "!p-1.5",
        variant: "border",
        color: "light",
        size: "xs",
        disabled,
        iconOnly: true,
        startIcon: { icon: Plus }
      },
      {},
      {}
    )}</div></label>` : ``}`}</div> <label class="block grow w-full max-w-md"><div class="text-secondary text-sm flex items-center gap-1 w-full justify-between"><div>Name
						${validate_component(Required, "Required").$$render($$result, { required: true }, {}, {})}</div> <div class="text-2xs text-tertiary" data-svelte-h="svelte-1gvjphn">&#39;/&#39; for subfolders</div></div>  <input ${disabled ? "disabled" : ""} type="text" id="path" ${autofocus ? "autofocus" : ""} autocomplete="off"${add_attribute("placeholder", namePlaceholder, 0)} class="${escape(
      null_to_empty(error === "" ? "" : "border border-red-700 bg-red-100 border-opacity-30 focus:border-red-700 focus:border-opacity-30 focus-visible:ring-red-700 focus-visible:ring-opacity-25 focus-visible:border-red-700"),
      true
    ) + " svelte-1renn9e"}"${add_attribute("this", inputP, 0)}${add_attribute("value", meta.name, 0)}></label>` : ``}</div> <div class="flex flex-col w-full mt-4"><div class="flex justify-start w-full">${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        color: "gray",
        class: "center-center !bg-surface-secondary !text-tertiary !w-[70px] !h-[24px] rounded-r-none border"
      },
      {},
      {
        default: () => {
          return `Full path`;
        }
      }
    )} <input type="text" readonly${add_attribute("value", path, 0)}${add_attribute("size", path?.length || 50, 0)} class="font-mono !text-xs max-w-[calc(100%-70px)] !w-auto !h-[24px] !py-0 !border-l-0 !rounded-l-none svelte-1renn9e"> </div> <div class="text-red-600 dark:text-red-400 text-2xs">${escape(error)}</div></div> ${kind != "app" && kind != "schedule" && initialPath != "" && initialPath != void 0 && initialPath != path ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "warning",
        class: "mt-4",
        title: "Moving may break other items relying on it"
      },
      {},
      {
        default: () => {
          return `You are renaming an item that may be depended upon by other items. This may break apps, flows
			or resources. Find if it used elsewhere using the content search. Note that linked variables
			and resources (having the same path) are automatically moved together.
			<div class="flex pt-2">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "border",
              color: "dark",
              startIcon: { icon: Search_code }
            },
            {},
            {
              default: () => {
                return `Search`;
              }
            }
          )}</div>`;
        }
      }
    )}` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_lastMetaUsed();
  $$unsubscribe_superadmin();
  return $$rendered;
});
const MAX_VARIABLE_LENGTH = 1e4;
const VariableEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  createEventDispatcher();
  let path = "";
  let variable = {
    value: "",
    is_secret: true,
    description: ""
  };
  let valid = true;
  let drawer;
  let edit = false;
  let initialPath;
  let pathError = "";
  let can_write = true;
  function initNew() {
    variable = {
      value: "",
      is_secret: true,
      description: ""
    };
    edit = false;
    initialPath = "";
    path = "";
    can_write = true;
    drawer.openDrawer();
  }
  async function editVariable(edit_path) {
    edit = true;
    const getV = await VariableService.getVariable({
      workspace: $workspaceStore ?? "",
      path: edit_path,
      decryptSecret: false
    });
    can_write = getV.workspace_id == $workspaceStore && canWrite(edit_path, getV.extra_perms ?? {}, $userStore);
    variable = {
      value: getV.value ?? "",
      is_secret: getV.is_secret,
      description: getV.description ?? ""
    };
    initialPath = edit_path;
    path = edit_path;
    drawer.openDrawer();
  }
  async function loadVariable(path2) {
    const getV = await VariableService.getVariable({
      workspace: $workspaceStore ?? "",
      path: path2,
      decryptSecret: true
    });
    variable.value = getV.value ?? "";
    editor?.setCode(variable.value);
  }
  let editorKind = "plain";
  let editor = void 0;
  if ($$props.initNew === void 0 && $$bindings.initNew && initNew !== void 0) $$bindings.initNew(initNew);
  if ($$props.editVariable === void 0 && $$bindings.editVariable && editVariable !== void 0) $$bindings.editVariable(editVariable);
  if ($$props.loadVariable === void 0 && $$bindings.loadVariable && loadVariable !== void 0) $$bindings.loadVariable(loadVariable);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    valid = variable.value.length <= MAX_VARIABLE_LENGTH;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: edit ? `Update variable at ${initialPath}` : "Add a variable"
            },
            {},
            {
              actions: () => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    disabled: !can_write || !valid || pathError != "",
                    startIcon: { icon: Save },
                    color: "dark",
                    size: "sm"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(edit ? "Update" : "Save")}`;
                    }
                  }
                )} `;
              },
              default: () => {
                return `<div class="flex flex-col gap-8">${!can_write ? `${validate_component(Alert, "Alert").$$render(
                  $$result,
                  {
                    type: "warning",
                    title: "Only read access"
                  },
                  {},
                  {
                    default: () => {
                      return `You only have read access to this resource and cannot edit it`;
                    }
                  }
                )}` : ``} ${validate_component(Section, "Section").$$render($$result, { label: "Path" }, {}, {
                  default: () => {
                    return `<div class="flex flex-col gap-4">${validate_component(Path, "Path").$$render(
                      $$result,
                      {
                        disabled: initialPath != "" && !isOwner(initialPath, $userStore, $workspaceStore),
                        initialPath,
                        namePlaceholder: "variable",
                        kind: "variable",
                        error: pathError,
                        path
                      },
                      {
                        error: ($$value) => {
                          pathError = $$value;
                          $$settled = false;
                        },
                        path: ($$value) => {
                          path = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        disabled: edit && $userStore?.operator,
                        options: { right: "Secret" },
                        checked: variable.is_secret
                      },
                      {
                        checked: ($$value) => {
                          variable.is_secret = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${variable.is_secret ? `${validate_component(Alert, "Alert").$$render(
                      $$result,
                      {
                        type: "warning",
                        title: "Audit log for each access"
                      },
                      {},
                      {
                        default: () => {
                          return `Every secret is encrypted at rest and in transit with a key specific to this
							workspace. In addition, any read of a secret variable generates an audit log whose
							operation name is: variables.decrypt_secret`;
                        }
                      }
                    )}` : ``}</div>`;
                  }
                })} ${validate_component(Section, "Section").$$render($$result, { label: "Variable value" }, {}, {
                  header: () => {
                    return `<span class="text-sm text-tertiary mr-4 font-normal">(${escape(variable.value.length)}/${escape(MAX_VARIABLE_LENGTH)} characters)</span> `;
                  },
                  default: () => {
                    return `<div><div class="mb-1">${edit && variable.is_secret ? `${$userStore?.operator ? ` <div class="p-2 border" data-svelte-h="svelte-96eopl">Operators cannot load secret value</div> ` : ` ${validate_component(Button, "Button").$$render($$result, { variant: "border", size: "xs" }, {}, {
                      default: () => {
                        return `Load secret value${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                          default: () => {
                            return `Will generate an audit log`;
                          }
                        })}`;
                      }
                    })}`}` : ``}</div> <div class="flex flex-col gap-2">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                      $$result,
                      { selected: editorKind },
                      {
                        selected: ($$value) => {
                          editorKind = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "plain", label: "Plain" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "json", label: "Json" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "yaml", label: "YAML" }, {}, {})}`;
                        }
                      }
                    )} ${editorKind == "plain" ? `<textarea ${!can_write ? "disabled" : ""} rows="4" placeholder="Update variable value">${escape(variable.value || "")}</textarea>` : `${editorKind == "json" ? `<div class="border rounded mb-4 w-full">${validate_component(SimpleEditor, "SimpleEditor").$$render(
                      $$result,
                      {
                        autoHeight: true,
                        lang: "json",
                        fixedOverflowWidgets: false,
                        this: editor,
                        code: variable.value
                      },
                      {
                        this: ($$value) => {
                          editor = $$value;
                          $$settled = false;
                        },
                        code: ($$value) => {
                          variable.value = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div>` : `${editorKind == "yaml" ? `<div class="border rounded mb-4 w-full">${validate_component(SimpleEditor, "SimpleEditor").$$render(
                      $$result,
                      {
                        autoHeight: true,
                        lang: "yaml",
                        fixedOverflowWidgets: false,
                        this: editor,
                        code: variable.value
                      },
                      {
                        this: ($$value) => {
                          editor = $$value;
                          $$settled = false;
                        },
                        code: ($$value) => {
                          variable.value = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div>` : ``}`}`}</div></div>`;
                  }
                })} ${validate_component(Section, "Section").$$render($$result, { label: "Description" }, {}, {
                  default: () => {
                    return `<textarea rows="4" placeholder="Used for X">${escape(variable.description || "")}</textarea>`;
                  }
                })}</div>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  Folder as F,
  Path as P,
  Save as S,
  VariableEditor as V
};
