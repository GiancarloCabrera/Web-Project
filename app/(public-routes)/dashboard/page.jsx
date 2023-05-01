"use client";

import styled from "@emotion/styled";
import MainDashboard from "@/components/DashboardMain/MainDashboard";
import Body from "@/components/DashboardMain/Body/Body";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  padding: "1rem",
  fontFamily: "Montserrat, sans-serif",
  background: "green",
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
export default function dashboard() {
  return (
    <>
      <MainDashboard />
    </>
  );
}
