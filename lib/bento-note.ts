import type { Lang } from "./types";

export function hasBentoNote(comboId: string): boolean {
  return comboId === "bento-set";
}

const BENTO_NOTE: Record<Lang, string[]> = {
  zh: ["這是一份台灣便當體驗套餐。", "配菜內容依當日供應為準。"],
  en: [
    "This is a Taiwanese bento experience set.",
    "Side dishes vary based on daily availability.",
  ],
  ja: [
    "台湾弁当体験セットです。",
    "おかずは当日の提供内容によります。",
  ],
  ko: [
    "대만 도시락 체험 세트입니다.",
    "반찬은 당일 제공 메뉴에 따라 달라질 수 있습니다.",
  ],
};

export function getBentoNoteLines(lang: Lang): string[] {
  return BENTO_NOTE[lang];
}
