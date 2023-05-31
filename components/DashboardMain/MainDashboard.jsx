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
  background: "hsl(220, 10%, 94%)",
  overflow: "hidden",
  fontFamily: "Montserrat, sans-serif",
  // borderRadius: "1rem",
  // boxShadow: "2px 2px 8px rgb(190, 190, 190)",
  color: "black",
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

export default function MainDashboard() {
  
  return (
    <Container>
      {/* <SideBar /> */}
      <Body />
    </Container>
  );
}
