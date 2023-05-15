import React from "react";
import styled from "@emotion/styled";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Link from "next/link";

const SideBarCard = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "1rem",
  textAlign: "center",
  position: "relative",

  ".icon": {
    position: "absolute",
    background: "#6fb98f",
    border: "10px solid #6fb98f",
    fontSize: "3rem",
    borderRadius: "50%",
    top: "-8px",
    right: "50%",
    transform: "translate(50%)",
    zIndex: "100",
  },
  [theme.breakpoints.down("mj")]: {
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
  background: "#6fb98f",
  borderRadius: "50%",
  opacity: ".7",
  height: "100px",
  width: "100px",
  top: "-50px",
  left: "-50px",
});
const Circle2 = styled("div")({
  position: "absolute",
  background: "#6fb98f",
  borderRadius: "50%",
  opacity: ".7",
  height: "150px",
  width: "150px",
  bottom: "-80px",
  right: "-70px",
  zIndex: "1",
});

const SideCard = () => {
  return (
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
  );
};

export default SideCard;
