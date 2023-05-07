import React from "react";
import styled from "@emotion/styled";
import FormC from "./components/FormC";

const Container = styled("div")({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#bdf094",
  color: "black",
});

const Form = () => {
  return (
    <Container>
      <FormC />
    </Container>
  );
};

export default Form;
