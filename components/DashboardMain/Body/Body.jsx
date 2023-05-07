import Activity from "./Activity/Activity";
import Listing from "./Listing/Listing";
import Top from "./Top/Top";
import styled from "@emotion/styled";

const MainContent = styled("div")({
  width: "90%",
  height: "100%",
  paddingBottom: "2rem",
  paddingTop: "2rem",
  overflow: "auto",
  "a ": {
    textDecoration: "none",
  },
  li: {
    listStyle: "none",
  },
  ".icon": {
    fontSize: "1.25rem",
    cursor: "pointer",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  ".flex": {
    display: "flex",
    alignItems: "center",
  },
  ".grid": {
    display: "grid",
    alignItems: "center",
    gap: "1.5rem",
  },
  ".btn": {
    border: "none",
    outline: "none",
    cursor: "pointer",
    borderRadius: "8px",
    boxShadow: "0 2px 4px hsl(330, 12%, 97%)",
    padding: ".8rem .1rem",
    color: "hsl(240, 1%, 48%)",
  },
  ".btn .icon": {
    marginLeft: ".5rem",
  },
  ".btn:hover": {
    background: "hsl(96,75%,89%)",
    color: "hsl(94,59%,35%)",
  },
});

const Bottom = styled("div")(({ theme }) => ({
  display: "inline-block",
  marginTop: "2rem",
  gap: "2rem",
  alignItems: "flex-start",

  [theme.breakpoints.down("uy")]: {
    flexDirection: "column",
  },
}));

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
