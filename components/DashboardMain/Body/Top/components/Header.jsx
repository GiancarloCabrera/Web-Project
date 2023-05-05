import React, { useState } from "react";
import styled from "@emotion/styled";
import imagen from "../../../../../public/images/porfile.png";
import SearchIcon from "@mui/icons-material/Search";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import DropMenu from "./DropMenu";

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
    fontSize: "2.8rem",
    background: "hsl(0, 0%, 100%)",
    borderRadius: "5px",
    padding: "5px",
    boxShadow: "0 2px 4px hsl(330, 12%, 97%)",
    color: "hsl(240, 1%, 48%)",
  },
  ".dropdown-menu.active": {
    opacity: "1",
    visibility: "visible",
    transform: "translateY(0)",
    transition: "500ms ease",
  },
  ".dropdown-menu.inactive": {
    opacity: "0",
    visibility: "hidden",
    transform: "translateY(-20px)",
    transition: "500ms ease",
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
    cursor: "pointer",
  },
});

const DropDownMenu = styled("div")({
  position: "absolute",
  top: "100px",
  right: "4%",
  background: "#fff",
  borderRadius: "8px",
  padding: "10px, 20px",
  width: "200px",
  zIndex: "1000",
  "::before": {
    content: '""',
    position: "absolute",
    top: "-5px",
    right: "20px",
    height: "20px",
    width: "20px",
    background: "#fff",
    transform: "rotate(45deg)",
  },
  h3: {
    width: "100%",
    textAlign: "center",
    fontSize: "18px",
    padding: "20px 0",
    fontWeight: "500",
    color: "#555",
    lineHeight: "1.2rem",
  },
  "li:hover .iconD": {
    opacity: 1,
    cursor: "pointer",
  },
  ".iconD": {
    maxWidth: "20px",
    marginRight: "10px",
    opacity: "0.5",
    transition: "500ms",
  },
});

const Header = () => {
  const [open, setOpen] = useState(false);
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
        <ImageUser
          className="imageUser"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Image
            src={imagen}
            alt="User Image"
            className="imagenUser"
            priority
          />
        </ImageUser>

        <DropDownMenu
          className={`dropdown-menu ${open ? "active" : "inactive"}`}
        >
          <h3>User</h3>
          <ul>
            <DropMenu
              icon={<SettingsIcon className="iconD" />}
              text={"Settings"}
            />
            <DropMenu icon={<LogoutIcon className="iconD" />} text={"Logout"} />
          </ul>
        </DropDownMenu>
      </AdminDiv>
    </HeaderSection>
  );
};

export default Header;
