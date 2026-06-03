import type { Lang } from "./types";
import { formatSetNumber } from "./locales";

export const ui: Record<
  Lang,
  {
    back: string;
    backHome: string;
    comboContents: string;
    wantThisCombo: string;
    yourRecommendation: string;
    paperMenuIntro: string;
    paperMenuSection: string;
    paperMenuBlock: string;
    bossPickBadge: string;
    imagePlaceholder: string;
    selectCombo: string;
  }
> = {
  zh: {
    back: "返回",
    backHome: "返回首頁",
    comboContents: "套餐內容",
    wantThisCombo: "我要這個套餐",
    yourRecommendation: "🎉 您的推薦套餐",
    paperMenuIntro: "請在紙本菜單下方的",
    paperMenuSection: "「智慧推薦套餐」",
    paperMenuBlock: "區塊勾選：",
    bossPickBadge: "老闆私心推薦",
    imagePlaceholder: "套餐圖片預留區",
    selectCombo: "請選擇套餐",
  },
  en: {
    back: "Back",
    backHome: "Back to Home",
    comboContents: "Set Contents",
    wantThisCombo: "I want this set",
    yourRecommendation: "🎉 Your Recommended Set",
    paperMenuIntro: "On the paper menu below,",
    paperMenuSection: '"Smart Recommended Sets"',
    paperMenuBlock: "section, please check:",
    bossPickBadge: "Owner's Pick",
    imagePlaceholder: "Image placeholder",
    selectCombo: "Choose a set",
  },
  ja: {
    back: "戻る",
    backHome: "ホームに戻る",
    comboContents: "セット内容",
    wantThisCombo: "このセットにする",
    yourRecommendation: "🎉 おすすめセット",
    paperMenuIntro: "紙のメニュー下部の",
    paperMenuSection: "「スマートおすすめセット」",
    paperMenuBlock: "欄でご選択ください：",
    bossPickBadge: "店主のおすすめ",
    imagePlaceholder: "画像プレースホルダー",
    selectCombo: "セットを選択",
  },
  ko: {
    back: "뒤로",
    backHome: "홈으로 돌아가기",
    comboContents: "세트 구성",
    wantThisCombo: "이 세트로 할게요",
    yourRecommendation: "🎉 추천 세트",
    paperMenuIntro: "종이 메뉴 하단",
    paperMenuSection: "「스마트 추천 세트」",
    paperMenuBlock: "항목에서 선택해 주세요:",
    bossPickBadge: "사장님 추천",
    imagePlaceholder: "이미지 자리 표시",
    selectCombo: "세트 선택",
  },
};

export function getUi(lang: Lang) {
  return ui[lang];
}

export function formatPaperMenuCheck(
  number: number,
  lang: Lang,
  options?: { bossPick?: boolean },
): string {
  return `☑ ${formatSetNumber(number, lang, options)}`;
}
