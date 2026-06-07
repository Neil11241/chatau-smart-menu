import { getCombo, getCombosByCategory } from "./menu-data";
import type { Combo, Lang } from "./types";

/** 第一次來 — skip combo confirm, go straight to result */
export const SKIP_COMBO_CONFIRM_CATEGORY = "first-time";

export function skipsComboConfirmPage(categoryId: string): boolean {
  return categoryId === SKIP_COMBO_CONFIRM_CATEGORY;
}

export function getComboPickHref(lang: Lang, combo: Combo): string {
  if (skipsComboConfirmPage(combo.categoryId)) {
    return `/${lang}/result/${combo.id}`;
  }
  return `/${lang}/combo/${combo.id}`;
}

export function getComboBackHref(lang: Lang, combo: Combo): string {
  const siblings = getCombosByCategory(combo.categoryId);
  if (siblings.length <= 1) {
    return `/${lang}/recommend`;
  }
  return `/${lang}/category/${combo.categoryId}`;
}

export function getResultBackHref(lang: Lang, comboId: string): string {
  const combo = getCombo(comboId);
  if (combo && skipsComboConfirmPage(combo.categoryId)) {
    return `/${lang}/category/${combo.categoryId}`;
  }
  return `/${lang}/combo/${comboId}`;
}
