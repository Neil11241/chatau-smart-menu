import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Lang } from "@/lib/types";

export const colors = {
  bg: "#ECDDCD",
  text: "#2E2117",
  btnText: "#2E2117",
  muted: "#6E5A47",
  gold: "#B88A3B",
  border: "#B88A3B",
  btnBg: "rgba(255,255,255,0.18)",
  btnDark: "#3A2418",
  imageBg: "#E2D2C0",
  cardBg: "rgba(255,255,255,0.35)",
  cardBgSolid: "rgba(255,255,255,0.35)",
} as const;

/** ~15–20% smaller than previous headings */
export const typeScale = {
  pageTitle: "0.95rem",
  setNumber: "1.05rem",
  comboSetNumber: "1.32rem",
  comboName: "0.98rem",
  subtitle: "0.68rem",
  sectionTitle: "0.875rem",
  body: "0.8125rem",
  small: "0.75rem",
} as const;

export const softButton: CSSProperties = {
  background: colors.btnBg,
  border: `1px solid ${colors.gold}`,
  color: colors.btnText,
  borderRadius: 14,
  padding: "14px 18px",
  fontSize: "0.9375rem",
  fontWeight: 400,
  textDecoration: "none",
};

export const pageMain: CSSProperties = {
  boxSizing: "border-box",
  width: "100%",
  maxWidth: 430,
  minHeight: "100vh",
  margin: "0 auto",
  padding: "32px 20px 56px",
  backgroundColor: colors.bg,
  color: colors.text,
  fontFamily: "system-ui, -apple-system, sans-serif",
};

export function PageWrap({ children }: { children: ReactNode }) {
  return (
    <main
      className="page-main"
      style={{
        minHeight: "100vh",
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {children}
    </main>
  );
}

/** Inner pages: back link at top of content (scrolls with page) */
export function InnerPage({
  backHref,
  backLabel,
  children,
}: {
  backHref: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <PageWrap>
      <PageColumn>
        <div className="page-back-row">
          <BackButton href={backHref} label={backLabel} />
        </div>
        {children}
      </PageColumn>
    </PageWrap>
  );
}

export function BackButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link href={href} className="back-nav-btn btn-press">
      ← {label}
    </Link>
  );
}

export function SoftLink({
  href,
  children,
  style,
}: {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <Link href={href} style={{ ...softButton, display: "inline-flex", ...style }}>
      {children}
    </Link>
  );
}

export function GoldDivider() {
  return (
    <hr
      style={{
        width: "100%",
        margin: "20px 0 0",
        border: "none",
        borderTop: `1px solid ${colors.gold}`,
        opacity: 0.75,
      }}
    />
  );
}

/** Premium menu paper card — content blocks (not buttons) */
export const menuPaperCard: CSSProperties = {
  width: "100%",
  maxWidth: 360,
  margin: "0 auto",
  boxSizing: "border-box",
  borderRadius: 20,
  border: "1px solid rgba(184, 138, 59, 0.25)",
  background: "rgba(255, 255, 255, 0.35)",
  boxShadow: "0 6px 24px rgba(0, 0, 0, 0.04)",
};

const cardBase: CSSProperties = {
  ...menuPaperCard,
  width: "100%",
  maxWidth: 360,
};

export function CategoryCardLink({
  href,
  emoji,
  label,
}: {
  href: string;
  emoji: string;
  label: string;
}) {
  return (
    <Link href={href} className="premium-menu-btn category-card-link btn-press">
      <span className="menu-btn-slot menu-btn-slot--start category-card-link__emoji" aria-hidden>
        {emoji}
      </span>
      <span className="menu-btn-label">{label}</span>
      <span className="menu-btn-slot menu-btn-slot--end premium-menu-btn__arrow" aria-hidden>
        ›
      </span>
    </Link>
  );
}

export function StoryMenuLink({
  href,
  icon,
  children,
  hideStartSlot = false,
  hideEndArrow = false,
  backHome = false,
}: {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  hideStartSlot?: boolean;
  hideEndArrow?: boolean;
  /** Result / story: ← fixed left, label centered */
  backHome?: boolean;
}) {
  if (backHome) {
    return (
      <Link
        href={href}
        className="back-home-btn btn-press"
        style={{ width: "100%" }}
        aria-label={`← ${children}`}
      >
        <span className="back-home-btn__arrow" aria-hidden>
          ←
        </span>
        <span className="back-home-btn__label">{children}</span>
      </Link>
    );
  }

  const extraClass = [
    hideStartSlot ? "story-menu-btn--no-start-slot" : "",
    hideEndArrow ? "story-menu-btn--no-end-arrow" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={href}
      className={`story-menu-btn btn-press${extraClass ? ` ${extraClass}` : ""}`}
      style={{ width: "100%" }}
    >
      {!hideStartSlot && (
        <span className="menu-btn-slot menu-btn-slot--start">{icon ?? null}</span>
      )}
      <span className="menu-btn-label">{children}</span>
      {!hideEndArrow && (
        <span className="menu-btn-slot menu-btn-slot--end premium-menu-btn__arrow" aria-hidden>
          ›
        </span>
      )}
    </Link>
  );
}

/** Centered page column used on combo / result */
export function PageColumn({ children }: { children: ReactNode }) {
  return <div className="page-shell">{children}</div>;
}

/** Combo / result content card: centered shell, left-aligned body */
export function CenteredContentCard({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <ContentCard
      style={{
        maxWidth: 360,
        margin: "0 auto 12px",
        textAlign: "center",
        ...style,
      }}
    >
      {children}
    </ContentCard>
  );
}

export function BossPickHint({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) {
  const hintFont = "0.7rem";
  return (
    <aside
      className="boss-pick-hint"
      style={{
        ...menuPaperCard,
        width: "60%",
        maxWidth: 240,
        margin: "0 auto",
        padding: "14px 16px",
        background: "rgba(236, 221, 205, 0.75)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          margin: "0 0 8px",
          fontSize: hintFont,
          fontWeight: 500,
          color: colors.text,
        }}
      >
        💡 {title}
      </p>
      {lines.map((line, i) => (
        <p
          key={line}
          style={{
            margin: i < lines.length - 1 ? "0 0 5px" : 0,
            fontSize: hintFont,
            lineHeight: 1.6,
            color: colors.muted,
          }}
        >
          {line}
        </p>
      ))}
    </aside>
  );
}

export function ComboListCardLink({
  href,
  title,
  items,
  lang,
}: {
  href: string;
  title: string;
  items: string[];
  lang: Lang;
}) {
  return (
    <Link
      href={href}
      className="combo-list-card btn-press"
      style={{
        ...menuPaperCard,
        display: "block",
        marginBottom: 12,
        padding: "16px 18px",
        textDecoration: "none",
        color: colors.text,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 360,
      }}
    >
      <ImagePlaceholder lang={lang} />
      <p
        style={{
          margin: "14px 0 8px",
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        {title}
      </p>
      <ul
        style={{
          margin: "0 auto",
          padding: 0,
          listStyle: "none",
          fontSize: "0.8125rem",
          color: colors.muted,
          lineHeight: 1.55,
          textAlign: "center",
        }}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Link>
  );
}

export function PageSection({
  children,
  gap = 16,
  className,
}: {
  children: ReactNode;
  gap?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap,
        width: "100%",
        marginBottom: 4,
      }}
    >
      {children}
    </div>
  );
}

export function MenuGoldLine() {
  return (
    <hr
      className="menu-gold-line"
      style={{
        width: "100%",
        maxWidth: 360,
        margin: "4px auto",
        border: "none",
        borderTop: "1px solid rgba(184, 138, 59, 0.25)",
      }}
    />
  );
}

/** Combo / result title block — layer 1 set no. → layer 2 name → layer 3 subtitle */
export function ComboMenuTitle({
  setTitle,
  subtitle,
  name,
  subtitleUppercase = true,
  setFontWeight = 600,
  nameFontWeight = 500,
  subtitleFontWeight = 500,
  subtitleFontSize = typeScale.subtitle,
}: {
  setTitle: string;
  subtitle?: string | null;
  name?: string;
  subtitleUppercase?: boolean;
  setFontWeight?: number;
  nameFontWeight?: number;
  subtitleFontWeight?: number;
  subtitleFontSize?: string;
}) {
  return (
    <header
      className="combo-menu-title"
      style={{ width: "100%", maxWidth: 360, margin: "0 auto", textAlign: "center" }}
    >
      <MenuGoldLine />
      <p
        className="combo-menu-title__set"
        style={{
          margin: "10px 0 6px",
          fontSize: typeScale.comboSetNumber,
          fontWeight: setFontWeight,
          lineHeight: 1.25,
          color: colors.gold,
          letterSpacing: "0.06em",
        }}
      >
        {setTitle}
      </p>
      {name && (
        <p
          className="combo-menu-title__name"
          style={{
            margin: "0 0 4px",
            fontSize: typeScale.comboName,
            fontWeight: nameFontWeight,
            lineHeight: 1.45,
            color: colors.text,
            letterSpacing: "0.03em",
          }}
        >
          {name}
        </p>
      )}
      {subtitle && (
        <p
          className="combo-menu-title__subtitle"
          style={{
            margin: "0 0 4px",
            fontSize: subtitleFontSize,
            fontWeight: subtitleFontWeight,
            lineHeight: 1.4,
            letterSpacing: subtitleUppercase ? "0.14em" : "0.03em",
            color: colors.muted,
            textTransform: subtitleUppercase ? "uppercase" : "none",
          }}
        >
          {subtitle}
        </p>
      )}
      <MenuGoldLine />
    </header>
  );
}

export function ComboContentsCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section
      className="combo-contents-menu"
      style={{
        ...menuPaperCard,
        padding: "20px 24px 22px",
        textAlign: "center",
      }}
    >
      <MenuGoldLine />
      <p
        style={{
          margin: "16px 0 18px",
          fontSize: typeScale.small,
          fontWeight: 500,
          color: colors.gold,
          letterSpacing: "0.12em",
        }}
      >
        {title}
      </p>
      <ul
        style={{
          margin: "0 0 14px",
          padding: 0,
          listStyle: "none",
        }}
      >
        {items.map((item, i) => (
          <li
            key={item}
            style={{
              marginBottom: i < items.length - 1 ? 18 : 0,
              fontSize: typeScale.body,
              color: colors.text,
              lineHeight: 2,
              letterSpacing: "0.03em",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <MenuGoldLine />
    </section>
  );
}

export function ImagePlaceholder({ lang }: { lang: Lang }) {
  const labels: Record<Lang, string> = {
    zh: "【餐點圖片預留區】",
    en: "Food photo placeholder",
    ja: "料理写真プレースホルダー",
    ko: "음식 사진 영역",
  };
  const sublabels: Record<Lang, string> = {
    zh: "餐點照片準備中",
    en: "Photo coming soon",
    ja: "写真準備中",
    ko: "사진 준비 중",
  };
  return (
    <div
      className="image-placeholder-zone"
      style={{
        ...menuPaperCard,
        height: 120,
        margin: "0 auto",
        background: colors.imageBg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <span style={{ fontSize: "0.875rem", color: colors.muted, fontWeight: 500 }}>
        {labels[lang]}
      </span>
      <span style={{ fontSize: "0.75rem", color: colors.muted, opacity: 0.85 }}>
        {sublabels[lang]}
      </span>
    </div>
  );
}

export function ContentCard({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <section
      style={{
        ...cardBase,
        padding: "16px 18px",
        marginBottom: 12,
        background: colors.cardBgSolid,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export function PremiumMenuLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`premium-menu-btn btn-press ${className ?? ""}`.trim()}
    >
      <span className="menu-btn-slot menu-btn-slot--start" aria-hidden />
      <span className="menu-btn-label">{children}</span>
      <span className="menu-btn-slot menu-btn-slot--end premium-menu-btn__arrow" aria-hidden>
        ›
      </span>
    </Link>
  );
}

export function StoryTextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="story-text-link">
      {children}
    </Link>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="combo-primary-btn btn-press">
      <span className="menu-btn-label">{children}</span>
    </Link>
  );
}

export function HomeLangButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        ...softButton,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
      }}
    >
      {children}
    </Link>
  );
}

export function DrinkAbSection({
  title,
  drinkA,
  drinkAFlavor,
  drinkB,
  drinkBFlavor,
  footnote,
}: {
  title: string;
  drinkA: string;
  drinkAFlavor: string;
  drinkB: string;
  drinkBFlavor: string;
  footnote: string;
}) {
  const showFlavor = Boolean(drinkAFlavor || drinkBFlavor);
  return (
    <div className="drink-cards-panel menu-paper-card result-mini-card">
      <p className="drink-cards-panel__title">{title}</p>
      <div className="drink-cards-panel__cols">
        <div className="drink-cards-panel__col">
          <p className="drink-cards-panel__name">{drinkA}</p>
          {showFlavor && drinkAFlavor ? (
            <p className="drink-cards-panel__flavor">{drinkAFlavor}</p>
          ) : null}
        </div>
        <div className="drink-cards-panel__divider" aria-hidden />
        <div className="drink-cards-panel__col">
          <p className="drink-cards-panel__name">{drinkB}</p>
          {showFlavor && drinkBFlavor ? (
            <p className="drink-cards-panel__flavor">{drinkBFlavor}</p>
          ) : null}
        </div>
      </div>
      {footnote ? (
        <p className="drink-cards-panel__footnote">{footnote}</p>
      ) : null}
    </div>
  );
}

/** @deprecated use DrinkAbSection */
export function DrinkCard(props: Parameters<typeof DrinkAbSection>[0]) {
  return <DrinkAbSection {...props} />;
}

/** Popular add-ons category — single item card */
export function PopularAddonCard({
  code,
  name,
  imageLabel,
}: {
  code: string;
  name: string;
  imageLabel: string;
}) {
  return (
    <article className="popular-addon-card menu-paper-card">
      <div className="popular-addon-card__image" aria-hidden>
        <span className="popular-addon-card__image-text">{imageLabel}</span>
      </div>
      <p className="popular-addon-card__name">
        {code}｜{name}
      </p>
    </article>
  );
}

/** Dongshi region footnote — once below all oyster-related items */
export function DongshiRegionFootnote({ text }: { text: string }) {
  return (
    <div className="dongshi-region-footnote-wrap">
      <hr className="dongshi-region-footnote__line" />
      <p className="dongshi-region-footnote">{text}</p>
    </div>
  );
}

/** Result page — compact C–H signature sides reminder */
export function SignatureSidesHint({
  title,
  intro,
  items,
  dongshiRegionNote,
  footnote,
}: {
  title: string;
  intro: string;
  items: string[];
  dongshiRegionNote: string;
  footnote: string;
}) {
  return (
    <aside className="signature-sides-panel menu-paper-card result-mini-card">
      <p className="signature-sides-panel__title">{title}</p>
      <p className="signature-sides-panel__intro">{intro}</p>
      <ul className="signature-sides-panel__list">
        {items.map((item) => (
          <li key={item} className="signature-sides-panel__item">
            {item}
          </li>
        ))}
      </ul>
      <DongshiRegionFootnote text={dongshiRegionNote} />
      {footnote ? (
        <p className="signature-sides-panel__footnote">{footnote}</p>
      ) : null}
    </aside>
  );
}

export function StorySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        ...cardBase,
        padding: "18px 16px",
        marginBottom: 12,
        background: colors.cardBg,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 360,
      }}
    >
      <h2
        style={{
          margin: "0 0 12px",
          fontSize: "1rem",
          fontWeight: 600,
          color: colors.text,
          textAlign: "center",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.75,
          color: colors.muted,
        }}
      >
        {children}
      </div>
    </section>
  );
}
