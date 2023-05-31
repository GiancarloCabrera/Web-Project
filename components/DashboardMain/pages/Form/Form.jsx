import React, { useEffect } from "react";
import styled from "@emotion/styled";
import FormC from "./components/FormC";
import { useSelector } from "react-redux";

const Container = styled("div")({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#bdf094",
  color: "black",
});

const Form = () => {
  const state = useSelector(state => state);
  useEffect(() => {
    console.log('FORMMMM: ',state);
  }, [state])

  return (
    <Container>
      <FormC />
    </Container>
  );
};

export default Form;
