"use client";

import styled from "@emotion/styled";
import Imagefond from "../../public/images/sii.jpg";
import "./si.css";
import { signIn } from "next-auth/react";

const Home = styled("section")(({ theme }) => ({
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
  [theme.breakpoints.down("h")]: {
    padding: "16px 3%",
  },

  [theme.breakpoints.down("ms")]: {
    padding: "70px 3% 60px ",
    height: "85vh",
  },
}));

const Span = styled("span")({
  color: "#2c7873",
});
const Title = styled("h4")({
  color: "#004445",
  fontSize: "24px",
  fontWeight: "600",
});

const Somos = styled("h1")({
  margin: "20px 0",
  fontSize: "5.2rem",
  fontWeight: "bold",
  lineHeight: "1.1",
  letterSpacing: "2px",
  color: "#004445",
});

const H3 = styled("h3")({
  fontSize: "24px",
  fontWeight: "600",
  marginBottom: "3rem",
  color: "greenyellow",
});

const GetStarted = styled("a")({
  textDecoration: "none",
  display: "inline-block",
  padding: "14px 40px",
  borderRadius: "0.5rem",
  fontSize: "17px",
  fontWeight: "500",
  background: "linear-gradient(to left, #6fb98f, greenYellow)",

  color: "#fff",
  border: "1px solid #6fb98f",
  transition: "all .40s ease",
  ":hover": {
    transform: "scale(1.01) translateY(-5px)",
    background: "transparent",
    border: "1px solid #336b87",
    color: "#90afc5",
  },
});

export default function HomePage() {
  return (
    <Home className="home" id="home">
      <div>
        <Somos>
          Eco <br />
          <Span>Spark</Span>
        </Somos>
        <H3>Improve your consumption</H3>
        <GetStarted href="/auth" type="button">
          Get Started
        </GetStarted>
      </div>
    </Home>
  );
}
