import { useSelector } from "react-redux";
import Activity from "./Activity/Activity";
import Listing from "./Listing/Listing";
import Top from "./Top/Top";
import styled from "@emotion/styled";
import { useEffect } from "react";

const MainContent = styled("div")({
  width: "90%",
  height: "100%",
  paddingBottom: "2rem",
  paddingTop: "2rem",
  overflow: "auto",
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
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log("FORMMMM: ", state);
  }, [state]);

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
