import { notFound, redirect } from "next/navigation";
import {
  getCategory,
  getCombosByCategory,
  isPopularAddonsCategory,
} from "@/lib/menu-data";
import {
  POPULAR_ADDONS,
  getAddonPageFootnote,
} from "@/lib/addon-items";
import { getDongshiRegionNote } from "@/lib/dongshi-oyster";
import { getComboPickHref } from "@/lib/navigation";
import { isValidLang, t, tList, formatSetNumber } from "@/lib/locales";
import { getUi } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import {
  colors,
  ComboListCardLink,
  InnerPage,
  DongshiRegionFootnote,
  PopularAddonCard,
  typeScale,
} from "@/components/chatau-ui";

const ADDON_IMAGE_LABEL: Record<Lang, string> = {
  zh: "圖片預留區",
  en: "Image placeholder",
  ja: "画像プレースホルダー",
  ko: "이미지 영역",
};

type Props = {
  params: Promise<{ lang: string; categoryId: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { lang: langParam, categoryId } = await params;
  if (!isValidLang(langParam)) notFound();
  const lang = langParam as Lang;

  const category = getCategory(categoryId);
  if (!category) notFound();

  const ui = getUi(lang);

  if (isPopularAddonsCategory(categoryId)) {
    const footnote = getAddonPageFootnote(lang);
    const dongshiRegionNote = getDongshiRegionNote(lang);
    return (
      <InnerPage backHref={`/${lang}/recommend`} backLabel={ui.back}>
        <h1
          className="page-heading-centered"
          style={{ fontSize: typeScale.pageTitle, fontWeight: 600 }}
        >
          <span className="page-heading-centered__icon" aria-hidden>
            {category.emoji}
          </span>
          <span className="page-heading-centered__text">
            {t(category.label, lang)}
          </span>
        </h1>
        <ul className="popular-addon-grid">
          {POPULAR_ADDONS.map((addon) => (
            <li key={addon.code}>
              <PopularAddonCard
                code={addon.code}
                name={t(addon.name, lang)}
                imageLabel={ADDON_IMAGE_LABEL[lang]}
                imageSrc={addon.imageSrc}
              />
            </li>
          ))}
        </ul>
        <div className="popular-addon-notes">
          <DongshiRegionFootnote text={dongshiRegionNote} />
          <p className="popular-addon-footnote">{footnote}</p>
        </div>
      </InnerPage>
    );
  }

  const combos = getCombosByCategory(categoryId);
  if (combos.length === 0) notFound();
  if (combos.length === 1) {
    redirect(`/${lang}/combo/${combos[0].id}`);
  }

  return (
    <InnerPage backHref={`/${lang}/recommend`} backLabel={ui.back}>
      <h1
        className="page-heading-centered page-heading-centered--tight"
        style={{ fontSize: typeScale.pageTitle, fontWeight: 600 }}
      >
        <span className="page-heading-centered__icon" aria-hidden>
          {category.emoji}
        </span>
        <span className="page-heading-centered__text">
          {t(category.label, lang)}
        </span>
      </h1>
      <p
        style={{
          margin: "0 0 18px",
          fontSize: "0.9rem",
          color: colors.muted,
          textAlign: "center",
        }}
      >
        {ui.selectCombo}
      </p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, width: "100%" }}>
        {combos.map((combo) => (
          <li key={combo.id}>
            <ComboListCardLink
              href={getComboPickHref(lang, combo)}
              title={`${formatSetNumber(combo.number, lang, { bossPick: combo.bossPick })} — ${t(combo.name, lang)}`}
              items={tList(combo.items, lang)}
              lang={lang}
            />
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
