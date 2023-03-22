import styled from "@emotion/styled";

const StarSec = styled("div")({});
const StartThird = styled("div")({});
const StarFourth = styled("div")({});
const StarFifth = styled("div")({});

const LampWrap = styled("div")({});
const Lamp = styled("div")({});
const Cable = styled("div")({});
const Cover = styled("div")({});
const InCover = styled("div")({});
const Bulb = styled("div")({});
const Ligth = styled("div")({});
const Error = styled("section")({});
const ErrorContent = styled("div")({});
const ErrorMessage = styled("div")({});
const MessageTitle = styled("h1")({});
const MessageText = styled("p")({});
const ErrorNav = styled("div")({});
const Enav = styled("a")({});

export default function Page404() {
  return (
    <div>
      <div>
        <StarSec></StarSec>
        <StartThird></StartThird>
        <StarFourth></StarFourth>
        <StarFifth></StarFifth>
      </div>

      <LampWrap>
        <Lamp>
          <Cable></Cable>
          <Cover></Cover>
          <InCover>
            <Bulb></Bulb>
          </InCover>
          <Ligth></Ligth>
        </Lamp>
      </LampWrap>

      <Error>
        <ErrorContent>
          <ErrorMessage>
            <MessageTitle>Page Not Found</MessageTitle>
            <MessageText></MessageText>
          </ErrorMessage>
        </ErrorContent>
      </Error>
    </div>
  );
}
