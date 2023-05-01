import React from "react";
import styled from "@emotion/styled";
import imagen from "../../../../../public/images/porfile.png";

import SearchIcon from "@mui/icons-material/Search";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";

const HeaderSection = styled("div")(({ theme }) => ({
  justifyContent: "space-between",

  [theme.breakpoints.down("dm")]: {
    ".hola": {
      display: "none",
      background: "green",
    },
  },
  [theme.breakpoints.down("lm")]: {
    ".oc": {
      display: "none",
      background: "green",
    },
  },
}));

const Title = styled("div")(({ theme }) => ({
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
  [theme.breakpoints.down("lm")]: {
    textAlign: "center",
    margin: "auto",
  },
}));

const SearchBar = styled("div")(({ theme }) => ({
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
}));

const AdminDiv = styled("div")(({ theme }) => ({
  gap: "1rem",

  ".icon": {
    fontSize: "2.5rem",
    background: "hsl(0, 0%, 100%)",
    borderRadius: "5px",
    padding: "5px",
    boxShadow: "0 2px 4px hsl(330, 12%, 97%)",
    color: "hsl(240, 1%, 48%)",
  },
}));

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

const Header = () => {
  return (
    <HeaderSection className="headerSection flex">
      <Title className="titile">
        <h1>Welcome to River Bird</h1>
        <p>Hellow Hamlet, Welcome Back</p>
      </Title>

      <SearchBar className="hola flex">
        <input type="text" placeholder="Search DashBoard" />
        <SearchIcon className="icon" />
      </SearchBar>

      <AdminDiv className="oc flex">
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
  );
};

export default Header;
