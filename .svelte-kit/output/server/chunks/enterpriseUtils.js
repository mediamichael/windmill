import { m as get_store_value } from "./ssr.js";
import { a as SettingsService } from "./services.gen.js";
import { e as enterpriseLicense } from "./stores2.js";
async function setLicense() {
  try {
    if (get_store_value(enterpriseLicense)) {
      return;
    }
    const license = await SettingsService.getLicenseId();
    if (license) {
      enterpriseLicense.set(license);
    }
  } catch (e) {
    console.error("error getting license", e);
  }
}
export {
  setLicense as s
};
