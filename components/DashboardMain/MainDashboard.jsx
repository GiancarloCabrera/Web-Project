import styled from "@emotion/styled";
import Body from "../../components/DashboardMain/Body/Body";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Container = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#052f33",
  overflow: "hidden",
  fontFamily: "Montserrat, sans-serif",
  // borderRadius: "1rem",
  // boxShadow: "2px 2px 8px rgb(190, 190, 190)",
  color: "black",
});

export default function MainDashboard() {
  return (
    <Container>
      {/* <SideBar /> */}
      <Body />
    </Container>
  );
}
