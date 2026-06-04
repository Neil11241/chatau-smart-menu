import { BRAISED_MILKFISH_BELLY } from "./braised-milkfish-belly";
import { CRISPY_CHICKEN_LEG_ROLL } from "./chicken-leg-roll";
import { STUFFED_BITTER_MELON } from "./stuffed-bitter-melon";
import { WASABI_OYSTERS } from "./wasabi-oysters";
import type { Lang, LocalizedText } from "./types";

export const POPULAR_ADDONS_CATEGORY_ID = "popular-addons";

export type PopularAddon = {
  code: string;
  name: LocalizedText;
};

export const POPULAR_ADDONS: PopularAddon[] = [
  {
    code: "C",
    name: {
      zh: "滷白菜",
      en: "Braised Napa Cabbage",
      ja: "白菜の煮込み",
      ko: "배추 조림",
    },
  },
  {
    code: "D",
    name: {
      zh: "綜合滷味",
      en: "Assorted Braised Platter",
      ja: "盛り合わせ煮込み",
      ko: "종합 조림 모둠",
    },
  },
  {
    code: "E",
    name: BRAISED_MILKFISH_BELLY,
  },
  {
    code: "F",
    name: STUFFED_BITTER_MELON,
  },
  {
    code: "G",
    name: WASABI_OYSTERS,
  },
  {
    code: "H",
    name: CRISPY_CHICKEN_LEG_ROLL,
  },
  {
    code: "I",
    name: {
      zh: "皮蛋豆腐",
      en: "Preserved Egg with Tofu",
      ja: "ピータン豆腐",
      ko: "피단 두부",
    },
  },
  {
    code: "J",
    name: {
      zh: "滷豆腐",
      en: "Braised Tofu",
      ja: "煮込み豆腐",
      ko: "두부 조림",
    },
  },
];

export const ADDON_PAGE_FOOTNOTE: Record<Lang, string> = {
  zh: "請於紙本菜單上勾選對應代碼。",
  en: "To add any item, please mark the corresponding code on the paper menu.",
  ja: "ご希望の場合は、紙のメニューに対応する記号をご記入ください。",
  ko: "원하시면 종이 메뉴에 해당 코드를 표시해 주세요.",
};

export function getAddonPageFootnote(lang: Lang): string {
  return ADDON_PAGE_FOOTNOTE[lang];
}
