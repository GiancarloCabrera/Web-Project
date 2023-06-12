"use client";
import { useSelector } from "react-redux";
import Activity from "./Activity/Activity";
import Listing from "./Listing/Listing";
import Top from "./Top/Top";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";

const MainContent = styled("div")({
  width: "90%",
  height: "100%",
  paddingBottom: "2rem",
  paddingTop: "2rem",
  overflow: "auto",
});

const Bottom = styled("div")(({ theme }) => ({
  display: "inline-block",
  marginTop: "2rem",
  gap: "2rem",
  alignItems: "flex-start",

  [theme.breakpoints.down("uy")]: {
    flexDirection: "column",
  },
}));

export default function Body() {
  const { email } = useSelector(
    (state) => state.persistedReducer.login.loginUserCredentials
  );
  const [dataCard, setDataCard] = useState([]);

  const formByEmail = async (email) => {
    try {
      const response = await fetch(
        `http://89.116.25.43:3001/api/form/getByEmail?email=${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setDataCard(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    formByEmail(email);
  }, []);

  return (
    <MainContent className="MainContent">
      <Top dataCard={dataCard} />

      <Bottom className="bottom flex">
        <Listing dataCard={dataCard} />
        <Activity dataCard={dataCard} />
      </Bottom>
    </MainContent>
  );
}
