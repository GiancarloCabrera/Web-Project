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
