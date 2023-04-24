import React from "react";
import imagen from "../../../../public/images/porfile.png";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";

const TopSection = styled("div")({});

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

        <div className="adminDiv flex">
          <MessageOutlinedIcon className="icon" />
          <NotificationsOutlinedIcon className="icon" />
          <div className="imageUser">
            <Image src={imagen} alt="User Image" priority />
          </div>
        </div>
      </HeaderSection>
    </div>
  );
};

export default Top;
