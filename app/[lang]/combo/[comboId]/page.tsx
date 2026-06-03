import { notFound } from "next/navigation";
import { getCombo } from "@/lib/menu-data";
import { getComboBackHref } from "@/lib/navigation";
import { isValidLang, t, tList } from "@/lib/locales";
import { getComboMenuTitleProps } from "@/lib/combo-display";
import { getBossPickTip, hasBossPickTip } from "@/lib/boss-pick-tip";
import { getUi } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import {
  BossPickHint,
  ComboContentsCard,
  ComboMenuTitle,
  ImagePlaceholder,
  InnerPage,
  MenuGoldLine,
  PageSection,
  PrimaryButton,
} from "@/components/chatau-ui";

type Props = {
  params: Promise<{ lang: string; comboId: string }>;
};

export default async function ComboPage({ params }: Props) {
  const { lang: langParam, comboId } = await params;
  if (!isValidLang(langParam)) notFound();
  const lang = langParam as Lang;

  const combo = getCombo(comboId);
  if (!combo) notFound();

  const ui = getUi(lang);
  const items = tList(combo.items, lang);
  const backHref = getComboBackHref(lang, combo);
  const bossTip = hasBossPickTip(combo.id) ? getBossPickTip(lang) : null;

  return (
    <InnerPage backHref={backHref} backLabel={ui.back}>
      <PageSection gap={18}>
        <ComboMenuTitle {...getComboMenuTitleProps(combo, lang)} />

        <ImagePlaceholder lang={lang} />

        <ComboContentsCard title={ui.comboContents} items={items} />

        {bossTip && (
          <>
            <MenuGoldLine />
            <BossPickHint title={bossTip.title} lines={bossTip.lines} />
          </>
        )}

        <MenuGoldLine />
        <PrimaryButton href={`/${lang}/result/${combo.id}`}>
          {ui.wantThisCombo}
        </PrimaryButton>
      </PageSection>
    </InnerPage>
  );
}
