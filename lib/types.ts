export type Lang = "zh" | "en" | "ja" | "ko";

export type CategoryId =
  | "first-time"
  | "most-popular"
  | "popular-addons"
  | "bento-experience"
  | "fill-up"
  | "light"
  | "budget"
  | "boss-pick";

export interface LocalizedText {
  zh: string;
  en: string;
  ja: string;
  ko: string;
}

export interface LocalizedList {
  zh: string[];
  en: string[];
  ja: string[];
  ko: string[];
}

export interface Category {
  id: CategoryId;
  emoji: string;
  label: LocalizedText;
}

export interface Combo {
  id: string;
  number: number;
  categoryId: CategoryId;
  name: LocalizedText;
  items: LocalizedList;
  bossPick?: boolean;
}
