import { notFound } from "next/navigation";
import { getCombo } from "@/lib/menu-data";
import { getResultBackHref } from "@/lib/navigation";
import { isValidLang, t, tList } from "@/lib/locales";
import { getComboMenuTitleProps } from "@/lib/combo-display";
import { getDrinkReference } from "@/lib/drinks";
import { getDongshiRegionNote } from "@/lib/dongshi-oyster";
import { getSignatureSides } from "@/lib/signature-sides";
import { getBossPickTip, hasBossPickTip } from "@/lib/boss-pick-tip";
import { getFullyCookedEggNote } from "@/lib/fully-cooked-egg-note";
import { getUi, formatPaperMenuCheck } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import {
  BossPickHint,
  CenteredContentCard,
  ComboContentsCard,
  ComboMenuTitle,
  colors,
  DrinkAbSection,
  ImagePlaceholder,
  SignatureSidesHint,
  InnerPage,
  MenuGoldLine,
  PageSection,
  StoryMenuLink,
  typeScale,
} from "@/components/chatau-ui";

type Props = {
  params: Promise<{ lang: string; comboId: string }>;
};

export default async function ResultPage({ params }: Props) {
  const { lang: langParam, comboId } = await params;
  if (!isValidLang(langParam)) notFound();
  const lang = langParam as Lang;

  const combo = getCombo(comboId);
  if (!combo) notFound();

  const ui = getUi(lang);
  const items = tList(combo.items, lang);
  const backHref = getResultBackHref(lang, combo.id);
  const drinkReference = getDrinkReference(lang);
  const signatureSides = getSignatureSides(lang);
  const dongshiRegionNote = getDongshiRegionNote(lang);
  const bossTip = hasBossPickTip(combo.id) ? getBossPickTip(lang) : null;
  const fullyCookedEggNote = getFullyCookedEggNote(lang);
  return (
    <InnerPage backHref={backHref} backLabel={ui.back}>
      <PageSection gap={14} className="result-page-section">
        <h1
          style={{
            margin: "0 0 4px",
            fontSize: typeScale.pageTitle,
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          {ui.yourRecommendation}
        </h1>

        <ComboMenuTitle {...getComboMenuTitleProps(combo, lang)} />

        <ImagePlaceholder lang={lang} />

        <ComboContentsCard
          title={ui.comboContents}
          items={items}
          relaxedSpacing={combo.categoryId === "first-time"}
        />

        <p className="combo-egg-preference-note">{fullyCookedEggNote}</p>

        <DrinkAbSection
          title={drinkReference.title}
          drinkA={drinkReference.drinkA}
          drinkAFlavor={drinkReference.drinkAFlavor}
          drinkB={drinkReference.drinkB}
          drinkBFlavor={drinkReference.drinkBFlavor}
          footnote={drinkReference.footnote}
        />

        <SignatureSidesHint
          title={signatureSides.title}
          intro={signatureSides.intro}
          items={signatureSides.items}
          dongshiRegionNote={dongshiRegionNote}
          footnote={signatureSides.footnote}
        />

        {bossTip && (
          <>
            <MenuGoldLine />
            <BossPickHint title={bossTip.title} lines={bossTip.lines} />
          </>
        )}

        <CenteredContentCard style={{ padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: typeScale.body, color: colors.muted }}>
            {ui.paperMenuIntro}
          </p>
          <p
            style={{
              margin: "8px 0",
              fontSize: typeScale.small,
              fontWeight: 500,
              color: colors.text,
            }}
          >
            {ui.paperMenuSection}
          </p>
          <p style={{ margin: 0, fontSize: typeScale.body, color: colors.muted }}>
            {ui.paperMenuBlock}
          </p>
          <p
            style={{
              margin: "14px 0 0",
              fontSize: typeScale.setNumber,
              fontWeight: 600,
              color: colors.btnDark,
            }}
          >
            {formatPaperMenuCheck(combo.number, lang, {
              bossPick: combo.bossPick,
            })}
          </p>
        </CenteredContentCard>

        <div className="page-back-home-row">
          <StoryMenuLink href="/" backHome>
            {ui.backHome}
          </StoryMenuLink>
        </div>
      </PageSection>
    </InnerPage>
  );
}
