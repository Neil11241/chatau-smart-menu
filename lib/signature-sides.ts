import {
  CRISPY_CHICKEN_LEG_ROLL,
  formatAddonItemLabel,
} from "./chicken-leg-roll";
import type { Lang } from "./types";

export type SignatureSidesReference = {
  title: string;
  intro: string;
  items: string[];
  footnote: string;
};

export const SIGNATURE_SIDES: Record<Lang, SignatureSidesReference> = {
  zh: {
    title: "🍽 店內人氣招牌",
    intro: "許多客人也會搭配以下招牌小菜與湯品：",
    items: [
      "C｜滷白菜",
      "D｜綜合滷味",
      "E｜東石鮮蚵湯",
      "F｜苦瓜封湯",
      "G｜東石芥末鮮蚵",
      formatAddonItemLabel("H", CRISPY_CHICKEN_LEG_ROLL, "zh"),
    ],
    footnote: "請於紙本菜單上勾選對應代碼。",
  },
  en: {
    title: "🍽 House Specialties",
    intro: "Many guests also enjoy these signature sides and soups:",
    items: [
      "C｜Braised Napa Cabbage",
      "D｜Assorted Braised Platter",
      "E｜Dongshi Fresh Oyster Soup",
      "F｜Bitter Melon Sealed Soup",
      "G｜Dongshi Mustard Fresh Oysters",
      formatAddonItemLabel("H", CRISPY_CHICKEN_LEG_ROLL, "en"),
    ],
    footnote:
      "To add any item, please mark the corresponding code on the paper menu.",
  },
  ja: {
    title: "🍽 店内人気メニュー",
    intro: "多くのお客様が、以下の名物おかずやスープも一緒に召し上がっています：",
    items: [
      "C｜白菜の煮込み",
      "D｜盛り合わせ煮込み",
      "E｜東石の鮮蚵スープ",
      "F｜苦瓜封湯",
      "G｜東石の芥子味鮮蚵",
      formatAddonItemLabel("H", CRISPY_CHICKEN_LEG_ROLL, "ja"),
    ],
    footnote:
      "ご希望の場合は、紙のメニューに対応する記号をご記入ください。",
  },
  ko: {
    title: "🍽 매장 인기 메뉴",
    intro: "많은 손님께서 아래 인기 반찬과 국물도 함께 주문하십니다:",
    items: [
      "C｜배추 조림",
      "D｜종합 조림 모둠",
      "E｜동스 생굴 국",
      "F｜여주 봉탕",
      "G｜동스 겨자 생굴",
      formatAddonItemLabel("H", CRISPY_CHICKEN_LEG_ROLL, "ko"),
    ],
    footnote:
      "원하시면 종이 메뉴에 해당 코드를 표시해 주세요.",
  },
};

export function getSignatureSides(lang: Lang): SignatureSidesReference {
  return SIGNATURE_SIDES[lang];
}
