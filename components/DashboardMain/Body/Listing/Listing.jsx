import React from "react";
import styled from "@emotion/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import image from "../../../../public/images/Example.png";
const ListingSection = styled("div")({
  flexBasis: "70%",
});

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
    fontWeight: "500",
  },
  ".btn:hover": {
    border: "1px solid hsl(94, 59%, 35%)",
  },

  [theme.breakpoints.down("ml")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
  },

  [theme.breakpoints.down("ht")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "1rem",
  },
}));

const SecContainer = styled("div")({
  width: "100%",
  margin: "1rem 0",
  gap: "1rem",
  flexWrap: "wrap",
});

const SigleItem = styled("div")(({ theme }) => ({
  position: "relative",
  width: "150px",
  height: "170px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem",
  borderRadius: "10px",
  background: "hsl(120, 5%, 88%)",

  "&:hover": {
    background: "hsl(120, 27%, 87%)",
    boxShadow: "0 2px 2px hsl(330, 12%, 97%)",
  },

  ".image": {
    maxWidth: "70px",
  },
  ".icon": {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "hsl(94, 59%, 35%)",
  },
  h3: {
    fontSize: "1rem",
    color: "hsl(0, 0%, 18%)",
    padding: "1rem 0",
  },

  [theme.breakpoints.down("ml")]: {
    width: "200px !important",
  },
}));

const Sellers = styled("div")(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  gap: "1rem",
  alignItems: "flex-start",
  [theme.breakpoints.down("lm")]: {
    flexDirection: "column",
  },
}));

const TopSellers = styled("div")({});

const HeadingLower = styled("div")({
  padding: "1rem 0",

  ".btn": {
    padding: ".5rem 1rem",
  },
});

const Card = styled("div")(({ theme }) => ({
  padding: "1rem 1.5rem",
  borderRadius: "1rem",
  background: "hsl(0, 0%, 100%)",
  gap: "1rem",
  boxShadow: "0 2px 4px hsl(330, 12%, 97%)",
  [theme.breakpoints.down("ml")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("lm")]: {
    flexDirection: "row",
  },
}));

const Users = styled("div")({
  // paddingLeft: "0.5rem",
  borderRight: "2px solid rgb(190, 190, 190)",
  ".imageTop": {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid hsl(330, 12%, 97%)",
    transition: ".5s ease",

    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
});

const CardText = styled("div")({
  span: {
    color: "hsl(0, 0%, 18%)",
    fontWeight: "500",
  },

  small: {
    fontWeight: "400",
    ".date": {
      marginLeft: "1rem",
    },
  },
});

const Listing = () => {
  return (
    <ListingSection>
      <Heading className="flex">
        <h1>My Registers</h1>
        <button className="btn flex">
          See All <ArrowForwardIcon className="icon" />
        </button>
      </Heading>

      <SecContainer className="flex">
        <SigleItem>
          <FavoriteBorderIcon className="icon" />
          <Image src={image} alt="image  Example" priority className="image" />
          <h3>Annual Vince</h3>
        </SigleItem>
        <SigleItem>
          <FavoriteBorderIcon className="icon" />
          <Image src={image} alt="image Example" priority className="image" />
          <h3>Annual Vince</h3>
        </SigleItem>
        <SigleItem>
          <FavoriteBorderIcon className="icon" />
          <Image src={image} alt="image Example" priority className="image" />
          <h3>Annual Vince</h3>
        </SigleItem>
      </SecContainer>

      <Sellers className="flex">
        <TopSellers>
          <HeadingLower className="flex">
            <h3>Top Area</h3>
            {/* <button className="btn flex">
              See All <ArrowForwardIcon className="icon" />
            </button> */}
          </HeadingLower>

          <Card className="card flex">
            <Users>
              <Image className="imageTop" src={image} alt="User" priority />
            </Users>
            <CardText>
              <span>
                Your Best is <br />
                <small>
                  Water in this month<span className="date">21.00</span>
                </small>
              </span>
            </CardText>
          </Card>
        </TopSellers>

        <TopSellers>
          <HeadingLower className="flex">
            <h3>You can get best</h3>
            {/* <button className="btn flex">
              See All <ArrowForwardIcon className="icon" />
            </button> */}
          </HeadingLower>

          <Card className="card flex">
            <Users>
              <Image className="imageTop" src={image} alt="User" priority />
              <Image className="imageTop" src={image} alt="User" priority />

              <Image className="imageTop" src={image} alt="User" priority />
            </Users>
            <CardText>
              <span>
                Your worst <br />
                <small>
                  Water in this month<span className="date">21.00</span>
                </small>
              </span>
            </CardText>
          </Card>
        </TopSellers>
      </Sellers>
    </ListingSection>
  );
};

export default Listing;
