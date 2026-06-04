import type { Lang, LocalizedText } from "./types";

/** H — 香酥雞肉捲 (popular add-ons & result page reminder) */
export const CRISPY_CHICKEN_LEG_ROLL: LocalizedText = {
  zh: "香酥雞肉捲",
  en: "Crispy Chicken Leg Roll",
  ja: "サクサクチキンもも巻き",
  ko: "바삭한 치킨 다리살 롤",
};

/** Combo item — 炸腿肉捲 */
export const FRIED_CHICKEN_LEG_ROLL: LocalizedText = {
  zh: "炸腿肉捲",
  en: "Crispy Chicken Leg Roll",
  ja: "揚げチキンもも巻き",
  ko: "튀긴 치킨 다리살 롤",
};

export function formatAddonItemLabel(
  code: string,
  name: LocalizedText,
  lang: Lang
): string {
  return `${code}｜${name[lang]}`;
}
