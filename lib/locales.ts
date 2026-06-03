import type { Lang } from "./types";

export const LANGS: Lang[] = ["zh", "en", "ja", "ko"];

export function isValidLang(value: string): value is Lang {
  return LANGS.includes(value as Lang);
}

export function t(
  localized: { zh: string; en: string; ja: string; ko: string },
  lang: Lang,
): string {
  return localized[lang];
}

export function tList(
  localized: { zh: string[]; en: string[]; ja: string[]; ko: string[] },
  lang: Lang,
): string[] {
  return localized[lang];
}

export function formatSetNumber(
  number: number,
  lang: Lang,
  options?: { bossPick?: boolean },
): string {
  if (options?.bossPick) {
    const boss: Record<Lang, string> = {
      zh: `${number}號老闆私心推薦套餐`,
      en: `Owner's Choice Set No. ${number}`,
      ja: `${number}号・店主おすすめセット`,
      ko: `${number}번 사장 추천 세트`,
    };
    return boss[lang];
  }
  const labels: Record<Lang, string> = {
    zh: `${number}號經典套餐`,
    en: `Classic Set No. ${number}`,
    ja: `${number}号クラシックセット`,
    ko: `${number}번 클래식 세트`,
  };
  return labels[lang];
}
