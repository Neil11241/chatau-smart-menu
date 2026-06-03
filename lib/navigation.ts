import { getCombosByCategory } from "./menu-data";
import type { Combo, Lang } from "./types";

export function getComboBackHref(lang: Lang, combo: Combo): string {
  const siblings = getCombosByCategory(combo.categoryId);
  if (siblings.length <= 1) {
    return `/${lang}/recommend`;
  }
  return `/${lang}/category/${combo.categoryId}`;
}

export function getResultBackHref(lang: Lang, comboId: string): string {
  return `/${lang}/combo/${comboId}`;
}
