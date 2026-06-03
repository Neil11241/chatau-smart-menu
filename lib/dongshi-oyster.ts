import type { Lang } from "./types";

/** Single footnote shown once below all items (all languages) */
const DONGSHI_REGION_NOTE: Record<Lang, string> = {
  zh: "# 東石為台灣著名鮮蚵產地之一，以肥美鮮甜的鮮蚵聞名。",
  en: "# Dongshi is one of Taiwan's most famous oyster-producing regions, known for its fresh and plump oysters.",
  ja: "# 東石は台湾を代表する牡蠣の産地の一つです。",
  ko: "# 동스는 대만을 대표하는 굴 산지 중 하나입니다.",
};

export function getDongshiRegionNote(lang: Lang): string {
  return DONGSHI_REGION_NOTE[lang];
}
