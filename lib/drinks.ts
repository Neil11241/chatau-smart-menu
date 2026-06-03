import type { Lang } from "./types";

export type DrinkReference = {
  title: string;
  drinkA: string;
  drinkAFlavor: string;
  drinkB: string;
  drinkBFlavor: string;
  footnote: string;
};

export const DRINK_REFERENCE: Record<Lang, DrinkReference> = {
  zh: {
    title: "🥤 飲品加購選項",
    drinkA: "A｜車頭紅茶",
    drinkAFlavor: "",
    drinkB: "B｜車頭奶茶",
    drinkBFlavor: "",
    footnote: "若需要加購，請於紙本菜單上標示 A 或 B。",
  },
  en: {
    title: "🥤 Recommended Taiwanese Drinks",
    drinkA: "A｜Taiwanese Black Tea",
    drinkAFlavor: "",
    drinkB: "B｜Taiwanese Milk Tea",
    drinkBFlavor: "",
    footnote:
      "If you would like to add a drink, please mark A or B on the paper menu.",
  },
  ja: {
    title: "🥤 おすすめ台湾ドリンク",
    drinkA: "A｜台湾紅茶",
    drinkAFlavor: "",
    drinkB: "B｜台湾ミルクティー",
    drinkBFlavor: "",
    footnote: "ご希望の場合は、紙のメニューに A または B をご記入ください。",
  },
  ko: {
    title: "🥤 추천 대만 음료",
    drinkA: "A｜대만 홍차",
    drinkAFlavor: "",
    drinkB: "B｜대만 밀크티",
    drinkBFlavor: "",
    footnote: "원하시면 종이 메뉴에 A 또는 B를 표시해 주세요.",
  },
};

export function getDrinkReference(lang: Lang): DrinkReference {
  return DRINK_REFERENCE[lang];
}
