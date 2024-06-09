import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import i18nHttpBackend, { HttpBackendOptions } from "i18next-http-backend"
import ICU from "i18next-icu"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(ICU) // for International Components for Unicode standard
  .use(i18nHttpBackend) // dynamically load tanslation.json file
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init<HttpBackendOptions>({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from cross-site-scripting (xss)
    },
    load: "languageOnly",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    // react i18next special options (optional)
    react: {},
  })

export default i18n
