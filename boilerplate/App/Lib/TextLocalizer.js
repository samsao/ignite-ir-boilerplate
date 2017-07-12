import I18n from "react-native-i18n";
import LocalizedStrings from "@common/localization/LocalizedStrings";

I18n.fallbacks = true;

I18n.translations = LocalizedStrings;

export function text(value, parameters) {
  return I18n.t(value, parameters);
};

