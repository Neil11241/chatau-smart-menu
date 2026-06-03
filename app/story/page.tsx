import {
  colors,
  InnerPage,
  StoryMenuLink,
  StorySection,
  typeScale,
} from "@/components/chatau-ui";

export default function StoryPage() {
  return (
    <InnerPage backHref="/" backLabel="返回">
      <h1
          style={{
            margin: "0 0 20px",
            fontSize: typeScale.pageTitle,
            fontWeight: 600,
          }}
        >
          品牌故事 Brand Story
        </h1>

        <StorySection title="繁體中文">
          <p style={{ margin: "0 0 10px", fontWeight: 600, color: colors.text }}>
            為什麼叫 CHATAU？
          </p>
          <p style={{ margin: "0 0 10px" }}>
            CHATAU 來自台語「車頭」的發音。
          </p>
          <p style={{ margin: "0 0 10px" }}>
            在台灣，車頭也讓人想到火車與旅程的起點。
          </p>
          <p style={{ margin: 0 }}>
            我們希望像帶著旅人出發的火車一樣，讓來到嘉義的客人，從一碗火雞肉飯開始，認識嘉義的在地味道。
          </p>
        </StorySection>

        <StorySection title="English">
          <p style={{ margin: "0 0 10px", fontWeight: 600, color: colors.text }}>
            Why is it called CHATAU?
          </p>
          <p style={{ margin: "0 0 10px" }}>
            CHATAU comes from the Taiwanese pronunciation of “車頭.”
          </p>
          <p style={{ margin: "0 0 10px" }}>
            In Taiwan, 車頭 also brings to mind trains and the beginning of a
            journey.
          </p>
          <p style={{ margin: 0 }}>
            Like a train starting a trip, we hope to guide visitors into the local
            flavors of Chiayi, beginning with a bowl of turkey rice.
          </p>
        </StorySection>

        <StorySection title="日本語">
          <p style={{ margin: "0 0 10px", fontWeight: 600, color: colors.text }}>
            なぜ CHATAU という名前なのですか？
          </p>
          <p style={{ margin: "0 0 10px" }}>
            CHATAU は台湾語の「車頭」という発音に由来しています。
          </p>
          <p style={{ margin: "0 0 10px" }}>
            台湾では、車頭という言葉から列車や旅の始まりを思い浮かべることもあります。
          </p>
          <p style={{ margin: 0 }}>
            旅を始める列車のように、嘉義を訪れるお客様に、一杯の火雞肉飯から嘉義のローカルな味を知っていただきたいと考えています。
          </p>
        </StorySection>

        <StorySection title="한국어">
          <p style={{ margin: "0 0 10px", fontWeight: 600, color: colors.text }}>
            왜 CHATAU라는 이름인가요?
          </p>
          <p style={{ margin: "0 0 10px" }}>
            CHATAU는 대만어 “車頭”의 발음에서 유래했습니다.
          </p>
          <p style={{ margin: "0 0 10px" }}>
            대만에서 車頭이라는 말은 기차와 여행의 시작을 떠올리게 합니다.
          </p>
          <p style={{ margin: 0 }}>
            여행을 시작하는 기차처럼, 저희는 자이를 방문한 손님들이 칠면조고기 덮밥 한
            그릇으로 자이의 현지 맛을 경험하길 바랍니다.
          </p>
        </StorySection>

      <div style={{ marginTop: 24, width: "100%" }}>
        <StoryMenuLink href="/" icon={<span aria-hidden>←</span>}>
          返回首頁
        </StoryMenuLink>
      </div>
    </InnerPage>
  );
}
