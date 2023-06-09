"use client"

import React, { use, useEffect } from "react";
import imagePlant from "../../../../public/images/Ligth.png";
import styled from "@emotion/styled";

import Image from "next/image";
import Video from "../../../../public//images/Gif.gif";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Header from "./components/Header";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const CardSection = styled("div")(({ theme }) => ({
  marginTop: "3rem",
  gap: "1rem",

  [theme.breakpoints.down("ml")]: {
    flexDirection: "column",
  },
}));

const RightCard = styled("div")(({ theme }) => ({
  position: "relative",
  flexBasis: "70%",
  height: "200px",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "left",
  margin: "auto",
  padding: "2rem",
  borderRadius: "1rem",
  overflow: "hidden",

  h1: {
    zIndex: "100",
    fontSize: "1.5rem",
    color: "hsl(0, 0%, 100%)",
    fontWeight: "800",
  },
  p: {
    zIndex: "100",
    padding: "1rem",
    color: "hsl(96, 75%, 89%)",
    fontWeight: "500",
  },
  ".btn": {
    zIndex: "100",
  },

  [theme.breakpoints.down("ml")]: {
    width: "100%",
    flexBasis: "100%",
  },

  [theme.breakpoints.down("lm")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("ty")]: {
    textAlign: "center",
    padding: "2rem 1rem",
    h1: {
      fontSize: "1.25rem",
    },
  },
}));

const Buttons = styled("div")(({ theme }) => ({
  gap: "1rem",
  zIndex: "100",

  [theme.breakpoints.down("lm")]: {
    margin: "auto",
    flexDirection: "column",
    ".btn": {
      width: "100%",
    },
  },

  ".btn": {
    boxShadow: "none",
    padding: ".8rem 1.5rem",
    color: "hsl(94, 59%, 35%)",
    border: "2px solid transparent",
  },
  ".transparent": {
    background: "none",
    border: "2px solid hsl(96, 75%, 89%)",
    color: "hsl(96, 75%, 89%)",

    "&:hover": {
      background: "hsl(96, 75%, 89%)",
      color: "hsl(94, 59%, 35%)",
    },
  },
}));

const VideoDiv = styled("div")({
  position: "absolute",
  height: "100%",
  width: "100%",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",

  ".ImagenGif": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
});

const LeftCard = styled("div")(({ theme }) => ({
  flexBasis: "50%",
  [theme.breakpoints.down("ml")]: {
    marginTop: "2rem",
    alignSelf: "flex-start",
    height: "10px !important",
  },
}));

const Main = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "1rem",
  height: "200px",
  borderRadius: "1rem",
  justifyContent: "space-between",

  "&::before": {
    content: '""',
    position: "absolute",
    height: "100%",
    width: "75%",
    background: "#6fb98f",
    left: "0",
    bottom: "0",
    borderRadius: "1rem",
  },

  [theme.breakpoints.down("ml")]: {
    "&::before": {
      width: "50%",
    },
  },
  [theme.breakpoints.down("kh")]: {
    width: "100%",
  },
  [theme.breakpoints.down("xd")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&::before": {
      width: "100% !important",
    },
  },
}));

const TextDiv = styled("div")(({ theme }) => ({
  zIndex: "100",

  h1: {
    fontSize: "1.5rem",
    paddingBottom: "1rem",
    color: "hsl(0, 0%, 18%)",
  },

  ".flex": {
    gap: "1.5rem",
    fontWeight: "500",
    color: "hsl(0, 0%, 18%)",
  },

  small: {
    fontSize: ".938rem",
    display: "block",
    color: "hsl(94, 59%, 35%)",
    fontWeight: "500",
    padding: ".5rem 0",
  },
  ".link": {
    marginTop: "2rem",
    cursor: "pointer",

    "&:hover": {
      color: "hsl(94, 59%, 35%)",
      ".icon": {
        transform: "translateX(10px)",
        transition: ".3s ease",
      },
    },
  },
  [theme.breakpoints.down("lm")]: {
    margin: "auto",
  },
}));

const ImgDiv = styled("div")(({ theme }) => ({
  transform: "translateY(-20px)",

  ".ImagePlant": {
    width: "200px",
    paddingBottom: "1.7rem",
  },

  [theme.breakpoints.down("xd")]: {
    display: "none",
  },
}));

const DivFlex = styled("div")({});

const SideBarCard = styled("div")(({ theme }) => ({
  display: "none",
  width: "100%",
  padding: "1rem",
  textAlign: "center",
  position: "relative",

  ".icon": {
    position: "absolute",
    background: "#bdf094",
    border: "10px solid hsl(0, 0%, 100%)",
    fontSize: "3rem",
    borderRadius: "50%",
    top: "-8px",
    right: "50%",
    transform: "translate(50%)",
    zIndex: "100",
  },

  [theme.breakpoints.down("ml")]: {
    display: "block !important",
  },
  [theme.breakpoints.down("kh")]: {
    display: "none !important",
  },
}));

const CardContent = styled("div")({
  position: "relative",
  padding: "1rem",
  background: "#2c7873",
  borderRadius: "10px",
  overflow: "hidden",

  h3: {
    fontSize: "1rem",
    marginTop: "1rem",
    padding: "1rem 0 ",
    fontWeight: "800",
    color: "#6fb98f",
  },
  p: {
    fontSize: ".938rem",
    color: "#6fb98f",
    paddingBottom: "1rem",
    fontWeight: "500",
  },

  ".btn": {
    position: "relative",
    color: "#021c1e",
    zIndex: "1000",
    ":hover": {
      color: "#004445",
    },
  },
});

const Circle1 = styled("div")({
  position: "absolute",
  background: "hsl(96, 75%, 89%)",
  borderRadius: "50%",
  opacity: ".7",
  height: "100px",
  width: "100px",
  top: "-50px",
  left: "-50px",
});
const Circle2 = styled("div")({
  position: "absolute",
  background: "hsl(96, 75%, 89%)",
  borderRadius: "50%",
  opacity: ".7",
  height: "150px",
  width: "150px",
  bottom: "-80px",
  right: "-70px",
  zIndex: "1",
});

const TopSection = styled("div")({
  "a ": {
    textDecoration: "none",
  },
  li: {
    listStyle: "none",
  },
  ".icon": {
    fontSize: "1.25rem",
    cursor: "pointer",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  ".flex": {
    display: "flex",
    alignItems: "center",
  },
  ".grid": {
    display: "grid",
    alignItems: "center",
    gap: "1.5rem",
  },
  ".btn": {
    border: "none",
    outline: "none",
    cursor: "pointer",
    borderRadius: "8px",
    boxShadow: "0 2px 4px hsl(330, 12%, 97%)",
    padding: ".8rem .1rem",
    color: "hsl(240, 1%, 48%)",
  },
  ".btn .icon": {
    marginLeft: ".5rem",
  },
  ".btn:hover": {
    background: "hsl(96,75%,89%)",
    color: "hsl(94,59%,35%)",
  },
});

const ButtonRegister = styled("button")(({ theme }) => ({
  [theme.breakpoints.down("lm")]: {
    boxShadow: "none",
    padding: ".8rem 1.5rem",
    color: "hsl(94, 59%, 35%)",
    border: "2px solid transparent",
    width: "100%",
  },
}));

const Top =  ({dataCard}) => {
  const sumEnergyConsumedByBranch = () => {
    let total = 0;
    if (dataCard?.userForms) {
      dataCard.userForms.forEach((item) => {
        total += item.energyConsumedByBranchW11;
      });
    }
    return total;
  };

  const totalEnergyConsumedByBranch = sumEnergyConsumedByBranch();

  const sumaPerHours = () => {
    let total = 0;
    let avgHoursPerDayUsageLaptop9 = 0;
    let avgHoursPerDayUsageServ6 = 0;
    let hoursPerDayDeskComp3 = 0;

    if (dataCard?.userForms) {
      dataCard.userForms.forEach((item) => {
        avgHoursPerDayUsageLaptop9 += item.avgHoursPerDayUsageLaptop9;
        avgHoursPerDayUsageServ6 += item.avgHoursPerDayUsageServ6;
        hoursPerDayDeskComp3 += item.hoursPerDayDeskComp3;
      });
      total =
        avgHoursPerDayUsageLaptop9 +
        avgHoursPerDayUsageServ6 +
        hoursPerDayDeskComp3;
      console.log(total);
    }
    return total;
  };

  const totalPerHours = sumaPerHours();

  return (
    <TopSection className="topSection">
      <Header />

      <CardSection className="flex">
        <RightCard style={{ alignItems: "flex-start" }} className="flex">
          <h1>Register a new thunther</h1>
          <p>Help your pocket and the word</p>

          <Buttons className="buttons flex">
            <Link href="/dashboard/form">
              <ButtonRegister className="btn">Register</ButtonRegister>
            </Link>
            <Link href="/dashboard/registers">
              <button className="btn transparent">See Your Thunthers</button>
            </Link>
          </Buttons>

          <VideoDiv>
            <Image className="ImagenGif" alt="gifImg" src={Video} priority />
          </VideoDiv>
        </RightCard>

        <LeftCard className="flex" style={{ lineHeight: "1" }}>
          <Main className="flex">
            <TextDiv>
              <h1>My Stats</h1>

              <DivFlex className="flex">
                {!dataCard.userForms ? (
                  <h1>Loading...</h1>
                ) : dataCard.userForms?.length > 0 ? (
                  <>
                    <span>
                      All energy <br />{" "}
                      <small>{totalEnergyConsumedByBranch} W</small>
                    </span>
                    <span>
                      All Hours Per Day Average <br />
                      <small>{totalPerHours}</small>
                    </span>
                  </>
                ) : (
                  <></>
                )}
              </DivFlex>

              <span className="flex link">
                Go to my orders <ArrowForwardIcon className="icon" />
              </span>
            </TextDiv>

            <ImgDiv>
              <Image
                src={imagePlant}
                alt="Image Name"
                priority
                className="ImagePlant"
              />
            </ImgDiv>

            <SideBarCard className="sideBarCard">
              <HelpOutlineIcon className="icon" />
              <CardContent className="cardContent">
                <Circle1></Circle1>
                <Circle2></Circle2>
                <h3>Help Center</h3>
                <p>Having Problems or need a question, please contact us</p>
                <Link href={`dashboard/info`}>
                  <button className="btn">Go to help center</button>
                </Link>
              </CardContent>
            </SideBarCard>
          </Main>
        </LeftCard>
      </CardSection>
    </TopSection>
  );
};

export default Top;
