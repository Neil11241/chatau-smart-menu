import type { Lang } from "./types";

export function hasVegetableNote(comboId: string): boolean {
  return comboId === "popular-first";
}

const VEGETABLE_NOTE: Record<Lang, string[]> = {
  zh: [
    "※ 鮮炒蔬菜可向店員選擇當日供應品項。",
    "※ 若未特別告知，將依當日供應內容為您搭配。",
  ],
  en: [
    "※ Stir-fried vegetables: ask staff for today's available options.",
    "※ If not specified, we will serve what is available that day.",
  ],
  ja: [
    "※ 炒め野菜はその日の提供品を店員にお尋ねください。",
    "※ ご指定がない場合は、その日の提供内容をお出しします。",
  ],
  ko: [
    "※ 볶음 채소는 당일 제공 품목을 직원에게 문의해 주세요.",
    "※ 별도 요청이 없으면 당일 제공 가능한 메뉴로 준비해 드립니다.",
  ],
};

export function getVegetableNoteLines(lang: Lang): string[] {
  return VEGETABLE_NOTE[lang];
}
