import {
  colors,
  GoldDivider,
  PremiumMenuLink,
  StoryMenuLink,
} from "@/components/chatau-ui";

const LANGUAGES = [
  { href: "/zh/recommend", label: "繁體中文" },
  { href: "/en/recommend", label: "English" },
  { href: "/ja/recommend", label: "日本語" },
  { href: "/ko/recommend", label: "한국어" },
] as const;

const WELCOME_LINES = [
  "歡迎來到車頭火雞肉飯",
  "Welcome to CHATAU Turkey Rice",
  "CHATAUへようこそ",
  "CHATAU에 오신 것을 환영합니다",
] as const;

export default function HomePage() {
  return (
    <main
      className="page-main page-main--home"
      style={{
        minHeight: "100vh",
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <header className="page-shell">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/chatau-logo.png"
          alt="CHATAU"
          width={220}
          height={275}
          style={{
            display: "block",
            width: "min(220px, 72vw)",
            height: "auto",
            margin: "0 auto",
            objectFit: "contain",
          }}
        />
        <div style={{ margin: "16px 0 0" }}>
          <p className="home-page-title-zh">車頭智慧菜單</p>
          <p
            style={{
              margin: 0,
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: colors.gold,
              textTransform: "uppercase",
            }}
          >
            CHATAU Smart Menu
          </p>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: "0.68rem",
              lineHeight: 1.5,
              color: colors.muted,
            }}
          >
            幫您快速找到最適合的餐點組合
          </p>
        </div>
        <GoldDivider />
      </header>

      <ul
        className="page-shell"
        style={{
          margin: "14px 0 0",
          padding: 0,
          listStyle: "none",
        }}
      >
        {WELCOME_LINES.map((line) => (
          <li
            key={line}
            style={{
              padding: "6px 0",
              fontSize: "0.74rem",
              lineHeight: 1.55,
              color: colors.muted,
            }}
          >
            {line}
          </li>
        ))}
      </ul>

      <nav className="page-shell" style={{ marginTop: 20, flex: 1 }} aria-label="Choose language">
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            margin: 0,
            padding: 0,
            listStyle: "none",
            width: "100%",
          }}
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.href} style={{ width: "100%" }}>
              <PremiumMenuLink href={lang.href}>{lang.label}</PremiumMenuLink>
            </li>
          ))}
        </ul>
      </nav>

      <footer
        className="page-shell"
        style={{ marginTop: "auto", paddingTop: 24 }}
      >
        <StoryMenuLink href="/story" icon={<span aria-hidden>📖</span>}>
          品牌故事 Brand Story
        </StoryMenuLink>
      </footer>
    </main>
  );
}
