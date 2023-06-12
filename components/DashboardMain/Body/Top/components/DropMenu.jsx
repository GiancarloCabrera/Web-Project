import { Icon } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const DropdownItem = styled("li")({
  padding: "10px 30px 5px",
  borderTop: "1px solid rgba(0,0,0,0.05)",
  textAlign: "center",
  display: "flex",
  margin: "10px auto",
  ":hover span": {
    color: "rgb(212, 33, 9)",
    cursor: "pointer",
  },
  span: {
    maxWidth: "100px",
    marginLeft: "10px",
    transition: "500ms",
  },
});

const DropMenu = ({ text, icon, link }) => {
  return (
    <DropdownItem className="dropdownItem">
      {icon}
      <Link href={link}>
        <span> {text}</span>
      </Link>
    </DropdownItem>
  );
};

export default DropMenu;
