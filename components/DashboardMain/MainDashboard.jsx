"use client"
import styled from "@emotion/styled";
import Body from "../../components/DashboardMain/Body/Body";

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
