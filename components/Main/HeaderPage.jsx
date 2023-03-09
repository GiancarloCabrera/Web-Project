import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import imagen from "../../public/images/image.png";
import { useState } from "react";
import "./si.css";
// import {styled} from '@mui/material/styles';
import { green } from "@mui/material/colors";

const Header = styled("header")(({ theme }) => ({
  position: "fixed",
  right: 0,
  top: 0,
  width: "100%",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  padding: "22px 10%",
  borderBottom: "1px solid trasparent",
  transition: "all .40 ease",
  boxSizing: "border-box",

  [theme.breakpoints.down("h")]: {
    padding: "16px 3%",
  },
}));

const Logo = styled("a")({
  ".img": {
    width: "200px",
    height: "auto",
  },
});

const BxMenu = styled("div")(({ theme }) => ({
  ".iconMenu": {
    fontSize: "36px",
    color: "#fff",
    zIndex: "10001",
    cursor: "pointer",
    display: "none",

    [theme.breakpoints.down("mx")]: {
      display: "block",
    },
  },
}));

const Navbar = styled("ul")(({ theme }) => ({
  display: "flex",
  a: {
    color: "gray",
    fontSize: "1.1rem",
    fontWeight: 600,
    padding: "10px 25px",
    margin: "0 2px",
    borderRadius: "0.5rem",
    transition: "all .40s ease",

    [theme.breakpoints.down("mx")]: {
      display: "block",
      padding: "1rem",
      margin: "1rem",
    },
  },
  "a:hover": {
    background: "#2a3132",
    color: "#fff",
  },

  [theme.breakpoints.down("mx")]: {
    position: "absolute",
    top: "-600px",
    right: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    background: "#12141c",
    textAling: "left",
    transition: "all .40s ease",
  },
}));

const Li = styled("li")({
  listStyle: "none",
});

const A = styled("a")({
  textDecoration: "none",
});

export default function HeaderPage() {
  const [fix, setFix] = useState(false);
  const [active, setActive] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixed);

  return (
    <Header className={fix ? "header fixed" : "header"}>
      <Logo>
        <Image className="img" src={imagen} />
      </Logo>
      <BxMenu id="menu-ico">
        <MenuIcon
          className={`iconMenu ${active && "active"}`}
          onClick={() => setActive(!active)}
        />
      </BxMenu>

      <Navbar className={`xd ${active && "active"}`}>
        <Li>
          <A href="#home">Home</A>
        </Li>
        <Li>
          <A href="#about">About</A>
        </Li>
        <Li>
          <A href="#services">Service</A>
        </Li>
        <Li>
          <A href="#examples">Examples</A>
        </Li>
        <Li>
          <A href="#contact">Contact</A>
        </Li>

        {/* Arreglar boton */}
        {/* <Li><A href="">Login</A></Li> */}
      </Navbar>
    </Header>
  );
}
