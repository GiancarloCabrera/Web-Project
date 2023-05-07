import React from "react";
import styled from "@emotion/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import image from "../../../../public/images/Example.png";

const ActivitySection = styled("div")(({ theme }) => ({
  flexBasis: "50%",

  [theme.breakpoints.down("uy")]: {
    width: "100%",
  },
}));

const Heading = styled("div")(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  h1: {
    fontSize: "1.25rem",
    color: "hsl(0, 0%, 18%)",
    fontWeight: "700",
  },
  ".btn": {
    border: "1px solid transparent",
  },
  ".btn:hover": {
    border: "1px solid hsl(94, 59%, 35%)",
  },

  [theme.breakpoints.down("ml")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
  },
  [theme.breakpoints.down("uy")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
  },
  [theme.breakpoints.down("ht")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "1rem",
  },
}));

const SecContainer = styled("div")({
  marginTop: "1rem",
});

const SingleCustomer = styled("div")({
  alignItems: "flex-start",
  justifyContent: "space-between",
  ".lastes": {
    width: "40px",
    height: "40px",
    objectFit: "cover",
    borderRadius: "50%",
    boxShadow: "0 2px 4px hsl(120, 5%, 88%)",
    marginRight: "1rem",
  },
});

const CustomerDetails = styled("div")({
  flex: 1,
  marginRight: "10px",

  ".name": {
    fontSize: "1rem",
    fontWeight: "600",
    color: "hsl(0, 0%, 18%)",
    display: "block",
  },
  small: {
    fontWeight: "500",
    color: "hsl(0, 0%, 18%)",
    fontSize: ".813rem",
  },
});

const Duration = styled("div")({
  color: "hsl(240, 1%, 48%)",
  fontWeight: "500",
  fontSize: ".813rem",
});
const Activity = () => {
  return (
    <ActivitySection>
      <Heading className="flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See all <ArrowForwardIcon className="icon" />
        </button>
      </Heading>

      <SecContainer className="grid">
        <SingleCustomer className="flex">
          <Image src={image} alt="Lastes" className="lastes" priority />
          <CustomerDetails>
            <span className="name">House</span>
            <span>Created at</span>
          </CustomerDetails>
          <Duration>12/05/2004</Duration>
        </SingleCustomer>
        <SingleCustomer className="flex">
          <Image src={image} alt="Lastes" className="lastes" priority />
          <CustomerDetails>
            <span className="name">House</span>
            <span>Created at</span>
          </CustomerDetails>
          <Duration>12/05/2004</Duration>
        </SingleCustomer>
        <SingleCustomer className="flex">
          <Image src={image} alt="Lastes" className="lastes" priority />
          <CustomerDetails>
            <span className="name">House</span>
            <span>Created at</span>
          </CustomerDetails>
          <Duration>3 minutos ago</Duration>
        </SingleCustomer>
        <SingleCustomer className="flex">
          <Image src={image} alt="Lastes" className="lastes" priority />
          <CustomerDetails>
            <span className="name">House</span>
            <span>Created at</span>
          </CustomerDetails>
          <Duration>12/05/2004</Duration>
        </SingleCustomer>
      </SecContainer>
    </ActivitySection>
  );
};

export default Activity;
