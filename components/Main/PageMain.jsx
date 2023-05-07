"use client";

import styled from "@emotion/styled";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import HeaderPage from "./HeaderPage";
import ServicesPage from "./ServicesPage";
import ExamplesPage from "./ExamplesPage";
import ConctacPage from "./ContactPage";
import LowerPart from "./LowerPart";
import "./si.css";

const Main = styled("div")``;

export default function PageMain() {
  return (
    <Main>
      <HeaderPage />

      <HomePage />

      <AboutPage />

      <ServicesPage />

      <ExamplesPage />

      <ConctacPage />

      <LowerPart />
    </Main>
  );
}
