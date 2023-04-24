import Activity from "./Activity/Activity";
import Listing from "./Listing/Listing";
import Top from "./Top/Top";
import styled from "@emotion/styled";

const MainContent = styled("div")({
  width: "82%",
  height: "100%",
  padding: "2rem",
  overflow: "auto",
});

const Bottom = styled("div")({
  marginTop: "2rem",
  gap: "2rem",
  alignItems: "flex-start",
});

export default function Body() {
  return (
    <MainContent className="MainContent">
      <Top />

      <Bottom className="bottom flex">
        <Listing />
        <Activity />
      </Bottom>
    </MainContent>
  );
}
