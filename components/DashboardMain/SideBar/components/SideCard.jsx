import React from "react";
import styled from "@emotion/styled";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const SideBarCard = styled("div")({
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
});

const CardContent = styled("div")({
  position: "relative",
  padding: "1rem",
  background: "#bdf094",
  borderRadius: "10px",
  overflow: "hidden",

  h3: {
    fontSize: "1rem",
    marginTop: "1rem",
    padding: "1rem 0 ",
    fontWeight: "800",
    color: "hsl(0, 0%, 18%)",
  },
  p: {
    fontSize: ".938rem",
    color: "hsl(240,1%, 48%)",
    paddingBottom: "1rem",
    fontWeight: "500",
  },

  btn: {
    position: "relative",
    color: "hsl(240,1%, 48%)",
    zIndex: "1000",
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

const SideCard = () => {
  return (
    <SideBarCard className="sideBarCard">
      <HelpOutlineIcon className="icon" />
      <CardContent className="cardContent">
        <Circle1></Circle1>
        <Circle2></Circle2>

        <h3>Help Center</h3>
        <p>Having Problems or need a question, please contact us</p>
        <button className="btn">Go to help center</button>
      </CardContent>
    </SideBarCard>
  );
};

export default SideCard;
