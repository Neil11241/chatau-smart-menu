import { notFound } from "next/navigation";
import {
  getMainCategories,
  getPopularAddonsCategory,
} from "@/lib/menu-data";
import { isValidLang, t } from "@/lib/locales";
import { getUi } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import {
  CategoryCardLink,
  colors,
  InnerPage,
  typeScale,
} from "@/components/chatau-ui";

type Props = { params: Promise<{ lang: string }> };

export default async function RecommendPage({ params }: Props) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam)) notFound();
  const lang = langParam as Lang;
  const ui = getUi(lang);

  const mainCategories = getMainCategories();
  const addonsCategory = getPopularAddonsCategory();

  return (
    <InnerPage backHref="/" backLabel={ui.back}>
      {lang === "zh" ? (
        <div className="recommend-page-title-zh-block">
          <p className="recommend-page-title-zh">車頭智慧菜單</p>
          <p className="recommend-page-title-en">CHATAU Smart Menu</p>
        </div>
      ) : (
        <h1
          style={{
            margin: "0 0 20px",
            fontSize: typeScale.pageTitle,
            fontWeight: 600,
            letterSpacing: "0.06em",
          }}
        >
          CHATAU Smart Menu
        </h1>
      )}
      <nav aria-label="Choose category" className="menu-card-stack">
        {mainCategories.map((cat) => (
          <CategoryCardLink
            key={cat.id}
            href={`/${lang}/category/${cat.id}`}
            emoji={cat.emoji}
            label={t(cat.label, lang)}
          />
        ))}
        {addonsCategory && (
          <>
            <hr className="recommend-category-divider" aria-hidden />
            <CategoryCardLink
              href={`/${lang}/category/${addonsCategory.id}`}
              emoji={addonsCategory.emoji}
              label={t(addonsCategory.label, lang)}
            />
          </>
        )}
      </nav>
      <p
        style={{
          marginTop: 18,
          fontSize: typeScale.small,
          color: colors.muted,
        }}
      >
        {lang === "zh"
          ? "請選擇推薦分類"
          : lang === "en"
            ? "Choose a category"
            : lang === "ja"
              ? "カテゴリを選択"
              : "카테고리를 선택하세요"}
      </p>
    </InnerPage>
  );
}
