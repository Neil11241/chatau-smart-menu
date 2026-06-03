import type { Category, Combo } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "first-time",
    emoji: "⭐",
    label: {
      zh: "第一次來",
      en: "First Time Here",
      ja: "初めての方へ",
      ko: "처음 오셨나요?",
    },
  },
  {
    id: "most-popular",
    emoji: "🔥",
    label: {
      zh: "最多人點",
      en: "Most Popular",
      ja: "人気メニュー",
      ko: "인기 메뉴",
    },
  },
  {
    id: "bento-experience",
    emoji: "🍱",
    label: {
      zh: "車頭招牌便當",
      en: "Taiwanese Bento Experience",
      ja: "台湾弁当体験",
      ko: "대만 도시락 체험",
    },
  },
  {
    id: "fill-up",
    emoji: "🍚",
    label: {
      zh: "想吃飽",
      en: "Hearty Meal",
      ja: "お腹いっぱい",
      ko: "배부르게",
    },
  },
  {
    id: "light",
    emoji: "🥗",
    label: {
      zh: "想吃清爽",
      en: "Light & Fresh",
      ja: "さっぱり",
      ko: "가볍게",
    },
  },
  {
    id: "budget",
    emoji: "💰",
    label: {
      zh: "百元有找",
      en: "Under NT$100",
      ja: "お手頃価格",
      ko: "100원대",
    },
  },
  {
    id: "boss-pick",
    emoji: "🏆",
    label: {
      zh: "老闆私心推薦",
      en: "Owner's Choice",
      ja: "店主おすすめ",
      ko: "사장 추천",
    },
  },
  {
    id: "popular-addons",
    emoji: "🍽",
    label: {
      zh: "店內人氣招牌",
      en: "House Specialties",
      ja: "店内人気メニュー",
      ko: "매장 인기 메뉴",
    },
  },
];

/** Combo recommendation categories (excludes add-on showcase) */
export function getMainCategories(): Category[] {
  return CATEGORIES.filter((c) => c.id !== "popular-addons");
}

export function getPopularAddonsCategory(): Category | undefined {
  return CATEGORIES.find((c) => c.id === "popular-addons");
}

export const COMBOS: Combo[] = [
  {
    id: "chatau-classic",
    number: 1,
    categoryId: "first-time",
    name: {
      zh: "CHATAU 車頭經典套餐",
      en: "CHATAU Classic Set",
      ja: "CHATAU クラシックセット",
      ko: "CHATAU 클래식 세트",
    },
    items: {
      zh: ["大火雞肉飯（腿肉）", "荷包蛋", "燙青菜", "蛤蜊湯"],
      en: [
        "Large Turkey Rice (leg meat)",
        "Sunny-side up egg",
        "Blanched greens",
        "Clam soup",
      ],
      ja: ["大火鶏肉飯（もも肉）", "目玉焼き", "茹で野菜", "あさりスープ"],
      ko: ["대불고기밥 (다리살)", "계란후라이", "데친 나물", "조개탕"],
    },
  },
  {
    id: "chatau-popular",
    number: 2,
    categoryId: "first-time",
    name: {
      zh: "CHATAU 車頭人氣套餐",
      en: "CHATAU Popular Set",
      ja: "CHATAU 人気セット",
      ko: "CHATAU 인기 세트",
    },
    items: {
      zh: ["雞片飯", "荷包蛋", "燙青菜", "味噌湯"],
      en: [
        "Sliced Chicken Rice",
        "Sunny-side up egg",
        "Blanched greens",
        "Miso soup",
      ],
      ja: ["鶏スライス飯", "目玉焼き", "茹で野菜", "味噌汁"],
      ko: ["닭슬라이스밥", "계란후라이", "데친 나물", "미소국"],
    },
  },
  {
    id: "chatau-signature",
    number: 3,
    categoryId: "first-time",
    name: {
      zh: "CHATAU 車頭招牌套餐",
      en: "CHATAU Signature Set",
      ja: "CHATAU 看板セット",
      ko: "CHATAU 시그니처 세트",
    },
    items: {
      zh: ["大火雞肉飯", "炸腿肉捲", "荷包蛋", "味噌湯"],
      en: [
        "Large Turkey Rice",
        "Fried leg meat roll",
        "Sunny-side up egg",
        "Miso soup",
      ],
      ja: ["大火鶏肉飯", "揚げもも肉巻き", "目玉焼き", "味噌汁"],
      ko: ["대불고기밥", "튀긴 다리살 롤", "계란후라이", "미소국"],
    },
  },
  {
    id: "popular-first",
    number: 4,
    categoryId: "most-popular",
    name: {
      zh: "人氣第一套餐",
      en: "No.1 Popular Set",
      ja: "人気No.1セット",
      ko: "인기 1위 세트",
    },
    items: {
      zh: ["雞片飯", "荷包蛋", "鮮炒蔬菜", "味噌湯"],
      en: [
        "Sliced Chicken Rice",
        "Sunny-side up egg",
        "Stir-fried vegetables",
        "Miso soup",
      ],
      ja: ["鶏スライス飯", "目玉焼き", "炒め野菜", "味噌汁"],
      ko: ["닭슬라이스밥", "계란후라이", "볶음 채소", "미소국"],
    },
  },
  {
    id: "bento-set",
    number: 9,
    categoryId: "bento-experience",
    name: {
      zh: "車頭招牌便當套餐",
      en: "Taiwanese Bento Experience Set",
      ja: "台湾弁当体験セット",
      ko: "대만 도시락 체험 세트",
    },
    items: {
      zh: ["火雞肉飯便當", "荷包蛋", "味噌湯"],
      en: ["Turkey Rice Bento", "Fried Egg", "Miso Soup"],
      ja: ["ターキーライス弁当", "目玉焼き", "味噌汁"],
      ko: ["칠면조고기 덮밥 도시락", "계란 프라이", "미소국"],
    },
  },
  {
    id: "hearty-set",
    number: 5,
    categoryId: "fill-up",
    name: {
      zh: "飽足套餐",
      en: "Hearty Set",
      ja: "満足セット",
      ko: "든든 세트",
    },
    items: {
      zh: ["大火雞肉飯", "炸腿肉捲", "荷包蛋", "味噌湯"],
      en: [
        "Large Turkey Rice",
        "Fried leg meat roll",
        "Sunny-side up egg",
        "Miso soup",
      ],
      ja: ["大火鶏肉飯", "揚げもも肉巻き", "目玉焼き", "味噌汁"],
      ko: ["대불고기밥", "튀긴 다리살 롤", "계란후라이", "미소국"],
    },
  },
  {
    id: "light-set",
    number: 6,
    categoryId: "light",
    name: {
      zh: "清爽套餐",
      en: "Refreshing Set",
      ja: "さっぱりセット",
      ko: "상큼 세트",
    },
    items: {
      zh: ["小火雞肉飯", "燙青菜", "荷包蛋", "味噌湯"],
      en: [
        "Small Turkey Rice",
        "Blanched greens",
        "Sunny-side up egg",
        "Miso soup",
      ],
      ja: ["小火鶏肉飯", "茹で野菜", "目玉焼き", "味噌汁"],
      ko: ["소불고기밥", "데친 나물", "계란후라이", "미소국"],
    },
  },
  {
    id: "value-set",
    number: 7,
    categoryId: "budget",
    name: {
      zh: "超值套餐",
      en: "Value Set",
      ja: "お得セット",
      ko: "가성비 세트",
    },
    items: {
      zh: ["小火雞肉飯", "滷豆腐", "荷包蛋", "味噌湯"],
      en: [
        "Small Turkey Rice",
        "Braised tofu",
        "Sunny-side up egg",
        "Miso soup",
      ],
      ja: ["小火鶏肉飯", "煮込み豆腐", "目玉焼き", "味噌汁"],
      ko: ["소불고기밥", "두부조림", "계란후라이", "미소국"],
    },
  },
  {
    id: "boss-pick-set",
    number: 8,
    categoryId: "boss-pick",
    bossPick: true,
    name: {
      zh: "CHATAU 老闆私心推薦",
      en: "CHATAU Owner's Choice",
      ja: "CHATAU 店主おすすめ",
      ko: "CHATAU 사장 추천",
    },
    items: {
      zh: ["大火雞肉飯（腿肉）", "半熟荷包蛋", "燙青菜", "蛤蜊湯"],
      en: [
        "Large Turkey Rice (leg meat)",
        "Soft-boiled egg",
        "Blanched greens",
        "Clam soup",
      ],
      ja: [
        "大火鶏肉飯（もも肉）",
        "半熟目玉焼き",
        "茹で野菜",
        "あさりスープ",
      ],
      ko: [
        "대불고기밥 (다리살)",
        "반숙 계란",
        "데친 나물",
        "조개탕",
      ],
    },
  },
];

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

export function getCombo(id: string) {
  return COMBOS.find((c) => c.id === id);
}

export function getCombosByCategory(categoryId: string) {
  return COMBOS.filter((c) => c.categoryId === categoryId);
}

export function isPopularAddonsCategory(categoryId: string): boolean {
  return categoryId === "popular-addons";
}
