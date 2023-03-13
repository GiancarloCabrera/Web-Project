"use client";

import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import HeaderPage from "./HeaderPage";
import ServicesPage from "./ServicesPage";
import ExamplesPage from "./ExamplesPage";
import ConctacPage from "./ContactPage";
import LowerPart from "./LowerPart";
import "./si.css";



const Body = styled("body")({
  background: "#2a3132",
  color: "#90afc5",
  "::-webkit-scrollbar": {
    width: "8px" /* Tamaño del scroll en vertical */,
    height: "8px" /* Tamaño del scroll en horizontal */,
    display: "flex",
    backgroundColor: "#2a3132",
  },
});

export default function PageMain() {
  return (
    <Body>
      <HeaderPage />

      <HomePage />

      <AboutPage />

      <ServicesPage />

      <ExamplesPage />

      <ConctacPage />

      <LowerPart />
    </Body>
  );
}
