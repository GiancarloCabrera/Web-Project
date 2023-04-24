import styled from "@emotion/styled";
import Image from "next/image";
import imagen from "../../../public/images/pngwing.com.png";

import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SpaIcon from "@mui/icons-material/Spa";
import ExploreIcon from "@mui/icons-material/Explore";

import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

import SideCard from "./components/SideCard";

const SideBarMain = styled("div")({
  background: "hsl(0,0%, 100%)",
  boxShadow: "1px 0px 4px rgb(190, 190, 190)",
  width: "18%",
  height: "100%",
  gap: "3rem",
  overflow: "auto",
  h2: {
    fontSize: "1.25rem",
    color: "hsl(94, 59%, 35%)",
  },
});

const LogoDiv = styled("div")({
  padding: "1.5rem 1.5rem 0",
  cursor: "pointer",
  ".image": {
    maxWidth: "20px",
    marginRight: ".5rem",

    background: "hsl(330, 12%, 97%)",
    borderRadius: "2px",
    padding: ".2rem",
  },
});

const DivTitle = styled("h3")({
  fontSize: "1rem",
  color: "hsl(0,0%,18%)",
  padding: "0 1.5rem 1.5rem",
});

const MenuLink = styled("a")({
  color: "rgb(190, 190, 190)",
  fontWeight: "500",
  ".icon": {
    marginRight: ".5rem",
  },
  "&:hover .menuLink": {
    color: "hsl(94, 59%, 35%)",
    transition: 0,
  },
});

const ListItem = styled("li")({
  padding: ".2rem 1.5rem",
  width: "100%",
  position: "relative",
  "&::before": {
    position: "absolute",
    content: '""',
    height: "0%",
    left: "0",
    width: "5px",
    bottom: "0",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    background: "hsl(94, 59%, 35%)",
  },
  "&:hover .menuLink": {
    color: "hsl(94, 59%, 35%)",
    transition: 0,
  },
  "&:hover::before": {
    height: "100%",
    transform: ".3s ease",
  },
});

export default function SideBar() {
  return (
    <SideBarMain className="grid">
      <LogoDiv className="flex">
        <Image alt="Logo" src={imagen} priority className="image" />
        <h2>River Bird</h2>
      </LogoDiv>

      <div className="menuDiv">
        <DivTitle className="divTitle">QUICK MENU</DivTitle>
        <ul className="menuList grid">
          <ListItem className="listItem">
            <MenuLink href="#" className="menuLink">
              <ShutterSpeedIcon className="icon" />
              <span className="smallText">Dashboard</span>
            </MenuLink>
          </ListItem>

          <ListItem className="listItem">
            <MenuLink href="#" className="menuLink">
              <ListAltIcon className="icon" />
              <span className="smallText">Form</span>
            </MenuLink>
          </ListItem>

          <ListItem className="listItem">
            <MenuLink href="#" className="menuLink">
              <SpaIcon className="icon" />
              <span className="smallText">My floors</span>
            </MenuLink>
          </ListItem>

          <ListItem className="listItem">
            <MenuLink href="#" className="menuLink">
              <ExploreIcon className="icon" />
              <span className="smallText">Explore</span>
            </MenuLink>
          </ListItem>
        </ul>
      </div>

      <div className="senttingsDiv">
        <DivTitle className="divTitle">SETTINGS</DivTitle>
        <ul className="menuList grid">
          <ListItem className="listItem">
            <MenuLink href="#" className="menuLink">
              <BarChartIcon className="icon" />
              <span className="smallText">Charts</span>
            </MenuLink>
          </ListItem>

          <ListItem className="listItem">
            <MenuLink href="#" className="menuLink">
              <ShowChartIcon className="icon" />
              <span className="smallText">Trends</span>
            </MenuLink>
          </ListItem>

          <ListItem className="listItem">
            <MenuLink href="#" className="menuLink">
              <SettingsIcon className="icon" />
              <span className="smallText">Settings User</span>
            </MenuLink>
          </ListItem>

          <ListItem className="listItem">
            <MenuLink href="#" className="menuLink">
              <InfoIcon className="icon" />
              <span className="smallText">Info</span>
            </MenuLink>
          </ListItem>
        </ul>
      </div>

      <SideCard />
    </SideBarMain>
  );
}
