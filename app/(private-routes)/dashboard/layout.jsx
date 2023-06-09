"use client";
import SideBar from "../../../components/DashboardMain/SideBar/SideBar";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react"
import { useSelector } from "react-redux";

const Container = styled("div")(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  display: "grid",
  gridTemplateColumns: "15rem 1fr",
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

export default function Dash({ children }) {
  // const { status } = useSession()
  const { token } = useSelector(
    (state) => state.persistedReducer.login.loginUserCredentials
  );
      // if (status === 'loading') {
      //   return <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'grid', placeItems: 'center'}}><h1>loading...</h1></div>
      // }
      if (!token) {
        return <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'grid', placeItems: 'center'}}><h1>Page not found...</h1></div>
      }
  return (
    <Container>
      <SideBar />
      {children}
    </Container>
  );
}
