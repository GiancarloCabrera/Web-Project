"use client";

import styled from "@emotion/styled";
import { fontSize, fontWeight } from "@mui/system";
import Image from "next/image";
import imagen from "../public/images/River_Bird_free-file1.png";
import Imagefond from "../public/images/sii.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./Main/AboutPage";
import HeaderPage from "./Main/HeaderPage";
import ServicesPage from "./Main/ServicesPage";
import ExamplesPage from "./Main/ExamplesPage";

const ButtonLogin = styled("button")({});

const Body = styled("body")({
  background: "#0c0c0c",
  color: "#fff",
});

const Home = styled("section")({
  padding: "160px 10% 90px",
  height: "100vh",
  width: "100%",
  position: "relative",
  backgroundImage: `url(${Imagefond.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

const HomeText = styled("div")({});

const Span = styled("span")({
  color: "#ff8808",
});
const Title = styled("h4")({
  color: "#ff8808",
  fontSize: "24px",
  fontWeight: "600",
});

const Somos = styled("h1")({
  margin: "20px 0",
  fontSize: "5.2rem",
  fontWeight: "bold",
  lineHeight: "1.1",
  letterSpacing: "2px",
});

const H3 = styled("h3")({
  fontSize: "24px",
  fontWeight: "600",
  marginBottom: "3rem",
});

const GetStarted = styled("a")({
  display: "inline-block",
  padding: "14px 40px",
  borderRadius: "0.5rem",
  fontSize: "17px",
  fontWeight: "500",
  background: "#ff8808",
  color: "#fff",
  border: "1px solid #ff8808",
  transition: "all .40s ease",
  ":hover": {
    transform: "scale(1.01) translateY(-5px)",
    background: "transparent",
    border: "1px solid #ff8808",
  },
});

export default function PageMain() {
  return (
    <Body>
      <HeaderPage />

      <Home className="home">
        <HomeText>
          <Title>Hellow</Title>
          <Somos>
            Soy Hamlet <br />
            Ha<Span>mim</Span>
          </Somos>
          <H3>Front-End Developer</H3>
          <GetStarted href="#" className="btn">
            Get Started
          </GetStarted>
        </HomeText>
      </Home>

      <AboutPage />

      <ServicesPage/>

      <ExamplesPage/>
    </Body>
  );
}
