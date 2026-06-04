import type { Lang } from "./types";
import type { Combo } from "./types";

const COMBO_SUBTITLE: Record<string, string> = {
  "chatau-classic": "CHATAU CLASSIC SET",
  "chatau-popular": "CHATAU POPULAR SET",
  "chatau-signature": "CHATAU SIGNATURE SET",
  "popular-first": "CHATAU MAKE IT LIGHT SET",
  "bento-set": "CHATAU BENTO EXPERIENCE",
  "hearty-set": "CHATAU MAKE IT FULL SET",
  "light-set": "CHATAU MOST POPULAR SET",
  "value-set": "CHATAU VALUE SET",
  "boss-pick-set": "CHATAU OWNER'S CHOICE",
};

export function getComboSubtitle(comboId: string): string | null {
  return COMBO_SUBTITLE[comboId] ?? null;
}

/** Combo page display name — strips CHATAU prefix without changing menu data */
export function formatComboDisplayName(name: string, lang: Lang): string {
  if (lang !== "zh") return name;
  return name.replace(/^CHATAU\s*/i, "").trim();
}

/** Layer 2 — menu name once per page (English uses data name as-is) */
export function getComboPageName(combo: Combo, lang: Lang): string {
  const name = combo.name[lang];
  if (lang === "zh") return formatComboDisplayName(name, lang);
  return name;
}

/** Layer 3 — English has no third line; other langs keep brand subtitle */
export function getComboPageSubtitle(combo: Combo, lang: Lang): string | null {
  if (lang === "en") return null;
  return getComboSubtitle(combo.id);
}

/** Layer 1: set number only (largest on combo page) */
export function formatComboSetTitle(combo: Combo, lang: Lang): string {
  const labels: Record<Lang, string> = {
    zh: `${combo.number}號套餐`,
    en: `Set No. ${combo.number}`,
    ja: `${combo.number}号セット`,
    ko: `${combo.number}번 세트`,
  };
  return labels[lang];
}

export type ComboMenuTitleProps = {
  setTitle: string;
  name: string;
  subtitle: string | null;
  subtitleUppercase: boolean;
  setFontWeight: number;
  nameFontWeight: number;
  subtitleFontWeight: number;
  subtitleFontSize: string;
};

/** Shared combo + result title block props (fixes English duplicate lines) */
export function getComboMenuTitleProps(combo: Combo, lang: Lang): ComboMenuTitleProps {
  const isEn = lang === "en";
  return {
    setTitle: formatComboSetTitle(combo, lang),
    name: getComboPageName(combo, lang),
    subtitle: getComboPageSubtitle(combo, lang),
    subtitleUppercase: !isEn,
    setFontWeight: isEn ? 700 : 600,
    nameFontWeight: isEn ? 300 : 500,
    subtitleFontWeight: isEn ? 300 : 500,
    subtitleFontSize: isEn ? "0.75rem" : "0.68rem",
  };
}
