import React from "react";
import styled from "@emotion/styled";
import FormC from "./components/FormC";

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
});

const Form = () => {
  return (
    <Container>
      <FormC />
    </Container>
  );
};

export default Form;
