"use client";
import SideBar from "@/components/DashboardMain/SideBar/SideBar";
import styled from "@emotion/styled";

const Container = styled("div")(({ theme }) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   margin: "auto",
  //   padding: "1rem",
  //   fontFamily: "Montserrat, sans-serif",

  display: "grid",
  gridTemplateColumns: "15rem 1fr",
  background: "green",
  height: "100vh",

  a: {
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

  [theme.breakpoints.down("lm")]: {
    gridTemplateColumns: "5rem 1fr",
  },
}));

const ConteinerChildren = styled("div")({
  position: "relative",
  width: "95vw",
  height: "95vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "hsl(220, 10%, 94%)",

  borderRadius: "1rem",
  boxShadow: "2px 2px 8px rgb(190, 190, 190)",
  color: "black",
});

export default function Dash({ children }) {
  return (
    <Container>
      <SideBar />
      {children}
    </Container>
  );
}
