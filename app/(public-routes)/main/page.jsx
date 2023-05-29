"use client";
import PageMain from "@/components/Main/PageMain";
import styled from "@emotion/styled";

const Main = styled("div")`
  background: #2a3132;
  color: #90afc5;
  height: 100%;
`;

export default function MainPage() {
  return (
    <Main>
      <PageMain />
    </Main>
  );
}
