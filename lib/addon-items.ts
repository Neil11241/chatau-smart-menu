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
    name: {
      zh: "東石鮮蚵湯",
      en: "Dongshi Fresh Oyster Soup",
      ja: "東石の鮮蚵スープ",
      ko: "동스 생굴 국",
    },
  },
  {
    code: "F",
    name: {
      zh: "苦瓜封湯",
      en: "Bitter Melon Sealed Soup",
      ja: "苦瓜封湯",
      ko: "여주 봉탕",
    },
  },
  {
    code: "G",
    name: {
      zh: "東石芥末鮮蚵",
      en: "Dongshi Mustard Fresh Oysters",
      ja: "東石の芥子味鮮蚵",
      ko: "동스 겨자 생굴",
    },
  },
  {
    code: "H",
    name: {
      zh: "香酥雞肉捲",
      en: "Crispy Chicken Roll",
      ja: "香酥チキンロール",
      ko: "바삭한 치킨 롤",
    },
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
