import {getRequestConfig} from "next-intl/server";

import en from "../messages/en.json";
import ar from "../messages/ar.json";
import fr from "../messages/fr.json";

const MESSAGES: Record<string, any> = { en, ar, fr };

export default getRequestConfig(async ({requestLocale}) => {
  const locale = (await requestLocale) || "en";

  return {
    locale,
    messages: MESSAGES[locale] ?? MESSAGES.en
  };
});
