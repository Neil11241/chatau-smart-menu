import type { Lang } from "./types";

const FULLY_COOKED_EGG_NOTE: Record<Lang, string> = {
  zh: "※ 如需全熟荷包蛋，請告知櫃台。",
  en: "※ If you prefer a fully cooked egg, please inform our staff.",
  ja: "※ 目玉焼きを完全に火を通した状態をご希望の場合は、スタッフまでお知らせください。",
  ko: "※ 완전히 익힌 계란을 원하시면 직원에게 말씀해 주세요.",
};

export function getFullyCookedEggNote(lang: Lang): string {
  return FULLY_COOKED_EGG_NOTE[lang];
}
