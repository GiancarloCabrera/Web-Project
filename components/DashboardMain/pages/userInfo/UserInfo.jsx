"use client";

import React, { useEffect } from "react";
import styled from "@emotion/styled";
import FormC from "./components/FormC";
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
});

const UserInfo = () => {
  const state = useSelector((state) => state);
  useEffect(() => {}, [state]);

  return (
    <Container>
      <FormC />
    </Container>
  );
};

export default UserInfo;
