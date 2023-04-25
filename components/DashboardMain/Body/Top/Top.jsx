import React from "react";
import imagen from "../../../../public/images/porfile.png";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";
import Video from "../../../../public//images/Gif.gif";

const HeaderSection = styled("div")({
  justifyContent: "space-between",
});

const Title = styled("div")({
  h1: {
    fontSize: "1.5rem",
    color: "hsl(0, 0%, 18%)",
    fontWeight: "700",
  },

  p: {
    fontSize: ".938rem",
    color: "hsl(240, 1%, 48%)",
    fontWeight: "500",
  },
});

const SearchBar = styled("div")({
  padding: "1rem 2rem",
  background: "hsl(0, 0%, 100%)",
  borderRadius: "5px",
  gap: "1rem",
  boxShadow: "0 2px 4px hsl(330, 12%, 97%)",

  input: {
    border: "none",
    outline: "none",
    background: "none",
  },

  ".icon": {
    color: "hsl(240, 1%, 48%)",
    "&:hover": {
      color: "hsl(94, 59%, 35%)",
    },
  },
});

const AdminDiv = styled("div")({
  gap: "1rem",

  ".icon": {
    fontSize: "2.5rem",
    background: "hsl(0, 0%, 100%)",
    borderRadius: "5px",
    padding: "5px",
    boxShadow: "0 2px 4px hsl(330, 12%, 97%)",
    color: "hsl(240, 1%, 48%)",
  },
});

const ImageUser = styled("div")({
  border: "3px solid hsl(0, 0%, 100%)",
  borderRadius: "10px",
  width: "2.5rem",
  overflow: "hidden",
  boxShadow: "0 2px 4px hsl(330, 12%, 97%)",

  ".imagenUser": {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
});

const CardSection = styled("div")({
  marginTop: "3rem",
  gap: "1rem",
});

const RightCard = styled("div")({
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
});

const Buttons = styled("div")({
  gap: "1rem",

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
});

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
  },
});

const LeftSection = styled("div")({});

const Main = styled("div")({});

const TextDiv = styled("div")({});

const Top = () => {
  return (
    <div className="topSection">
      <HeaderSection className="headerSection flex">
        <Title className="titile">
          <h1>Welcome to River Bird</h1>
          <p>Hellow Hamlet, Welcome Back</p>
        </Title>

        <SearchBar className="flex">
          <input type="text" placeholder="Search DashBoard" />
          <SearchIcon className="icon" />
        </SearchBar>

        <AdminDiv className="flex">
          <MessageOutlinedIcon className="icon" />
          <NotificationsOutlinedIcon className="icon" />
          <ImageUser className="imageUser">
            <Image
              src={imagen}
              alt="User Image"
              className="imagenUser"
              priority
            />
          </ImageUser>
        </AdminDiv>
      </HeaderSection>

      <CardSection className="flex">
        <RightCard style={{ alignItems: "flex-start" }} className="flex">
          <h1>Register a new plants</h1>
          <p>Help your pocket and the word</p>

          <Buttons className="buttons flex">
            <button className="btn">Register</button>
            <button className="btn transparent">See Your Plants</button>
          </Buttons>

          <VideoDiv>
            <Image className="ImagenGif" src={Video} priority />
          </VideoDiv>
        </RightCard>

        <LeftSection className="flex">
          <Main className="flex">
            <TextDiv>
              <h1>My Stats</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
              </div>
              <div className="flex">
                <span>
                  This Month <br /> <small>127 Orders</small>
                </span>
              </div>
            </TextDiv>
          </Main>
        </LeftSection>
      </CardSection>
    </div>
  );
};

export default Top;
