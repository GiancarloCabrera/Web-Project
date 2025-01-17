"use client";
import PageMain from "../components/Main/PageMain";
import styled from "@emotion/styled";

const Container = styled("div")`
  background: #032022;
  color: #90afc5;
  height: 100%;
`;

export default function Main() {
  return (
    <Container>
      <PageMain />
    </Container>
  );
}
