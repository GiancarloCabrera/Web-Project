"use client";

import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import * as Yup from "yup";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
const Container = styled("div")({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#052f33",
  overflow: "hidden",
  fontFamily: "Montserrat, sans-serif",

  ".arc": {
    background: "#021c1e",
  },
});

const InfoContainer = styled("div")({
  width: "90%",
  height: "100%",
  paddingBottom: "2rem",
  paddingTop: "2rem",
  overflow: "auto",
});

const Title = styled("div")(({ theme }) => ({
  h1: {
    fontSize: "1.5rem",
    color: "#6fb98f",
    fontWeight: "700",
  },

  p: {
    fontSize: ".938rem",
    color: "hsl(240, 1%, 48%)",
    fontWeight: "500",
  },
  [theme.breakpoints.down("lm")]: {
    textAlign: "center",
    margin: "auto",
  },
}));

const FormContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  paddingTop: "10px",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  "& > div": {
    width: "100%",
  },
  "& > div:last-child": {
    marginBottom: "1rem",
  },
}));

const DivButton = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
  },
}));

const ContactForm = styled("div")({
  form: {
    position: "relative",
    "input, textarea": {
      border: "none",
      outline: "none",
      width: " 100%",
      padding: "18px",
      background: "#021c1e",
      color: "#fff",
      fontSize: "1rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      borderRadius: "0.5rem",
      fontFamily: "Quicksand, san-serif",
    },
  },
  textarea: {
    resize: "none",
    height: "220px",
  },
  "form .send": {
    display: "inline-block",
    fontSize: "17px",
    fontWeight: "500",
    background: "linear-gradient(to left, #6fb98f, greenYellow)",
    color: "#fff",
    width: "190px",
    transition: "all .40s ease",
    cursor: "pointer",
  },
});

export default function Info() {
  const { email } = useSelector(
    (state) => state.persistedReducer.login.loginUserCredentials
  );

  return (
    <Container>
      <InfoContainer>
        <Title>
          <h1>Info</h1>
          <p>If you have any question do not be afraid to ask</p>
        </Title>

        <Accordion className="arc" defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p>What is the baas of this pages?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The foundation of the website is to provide professional
              information, resources, and practical solutions regarding the
              proper use of electronic devices such as desktop computers,
              servers, and laptops. It is based on the objective of sustainable
              development, specifically promoting responsible consumption
              practices.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="arc" defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p>What do we base our calculations on?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              The obtained result is returned as a percentage, allowing
              individuals to personally and directly assess how responsible
              their consumption is in relation to the evaluated parameters. This
              percentage reflects the level of responsibility in the consumption
              of electronic devices, based on the provided data such as average
              daily usage hours, average years of usage, and the number of
              devices at the premises. This information provides a tangible
              measure of environmental impact and offers an opportunity for
              individuals to reflect on adopting more sustainable consumption
              practices.
            </p>
          </AccordionDetails>
        </Accordion>

        <ContactForm>
          <h1
            style={{
              fontSize: "1.5rem",
              color: "#6fb98f",
              fontWeight: "700",
              margin: "16px 0",
            }}
          >
            {" "}
            Contact Us
          </h1>
          <form
            action="https://formsubmit.co/hamletcruzpirazan@gmail.com"
            method="POST"
          >
            <input type="" placeholder="Asunto" required name="asunto" />
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              name="email"
              value={email}
              readonly="readonly"
            />
            <textarea
              name="mensaje"
              id=""
              cols="40"
              rows="10"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <input type="submit" value="Submit" className="send" />

            <input
              type="hidden"
              name="_next"
              value="http://89.116.25.43:3000/dashboard/info"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </ContactForm>

        {/* <div style={{ background: "black", paddingBottom: "90%" }}>
          <ConctacPage />
        </div> */}
      </InfoContainer>
    </Container>
  );
}
