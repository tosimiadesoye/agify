import { resources, defaultNS } from "./i18n";
import * as en from "./translation/en.json";
import * as fr from "./translation/fr.json";
declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      en: typeof en;
      fr: typeof fr;
    };
    react: { useSuspense: false };
  }
}

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
