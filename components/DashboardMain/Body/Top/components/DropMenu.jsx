import { Icon } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "@emotion/styled";

const DropdownItem = styled("li")({
  padding: "10px 30px 5px",
  borderTop: "1px solid rgba(0,0,0,0.05)",
  textAlign: "center",
  display: "flex",
  margin: "10px auto",
  ":hover a": {
    color: "rgb(212, 33, 9)",
    cursor: "pointer",
  },
  a: {
    maxWidth: "100px",
    marginLeft: "10px",
    transition: "500ms",
  },
});

const DropMenu = ({ text, icon }) => {
  return (
    <DropdownItem className="dropdownItem">
      {icon}
      <a> {text}</a>
    </DropdownItem>
  );
};

export default DropMenu;
