import type { Lang } from "./types";

export function hasBossPickTip(comboId: string): boolean {
  return comboId === "boss-pick-set";
}

const BOSS_PICK_TIP: Record<
  Lang,
  { title: string; lines: string[] }
> = {
  zh: {
    title: "老闆推薦吃法",
    lines: [
      "推薦撒上適量胡椒粉。",
      "能提升整碗飯的風味體驗。",
      "若需要胡椒粉，",
      "請告知店員協助提供。",
    ],
  },
  en: {
    title: "Owner's Recommended Way to Enjoy",
    lines: [
      "A light sprinkle of pepper enhances the full flavor of your bowl.",
      "If you need pepper, please ask our staff.",
    ],
  },
  ja: {
    title: "店主おすすめの食べ方",
    lines: [
      "適量の胡椒を振ると、一杯の味わいがより引き立ちます。",
      "胡椒が必要な場合はスタッフにお声がけください。",
    ],
  },
  ko: {
    title: "사장님 추천 드시는 방법",
    lines: [
      "후추를 적당히 뿌리면 한 그릇의 풍미가 더욱 살아납니다.",
      "후추가 필요하시면 직원에게 말씀해 주세요.",
    ],
  },
};

export function getBossPickTip(lang: Lang) {
  return BOSS_PICK_TIP[lang];
}
