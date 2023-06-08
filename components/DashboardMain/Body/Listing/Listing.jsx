import React, { useEffect } from "react";
import styled from "@emotion/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography, Button, Link } from "@mui/material";

const ListingSection = styled("div")({
  flexBasis: "70%",
});

const Heading = styled("div")(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",

  h1: {
    fontSize: "1.25rem",
    color: "#6fb98f",
    fontWeight: "700",
  },

  ".btn": {
    border: "1px solid #052f33",
    fontWeight: "500",
    background: "#052f33",
    boxShadow: "0 2px 4px #052f33",
  },
  ".btn:hover": {
    border: "1px solid #021c1e",
    background: "#08454b",
    boxShadow: "0 2px 4px #021c1e",
    color: "white",
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
  background: "#021c1e",

  "&:hover": {
    background: "#004445",
    boxShadow: "0 2px 2px #004445",
    h2: {
      color: "#021c1e",
    },
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
    color: "#6fb98f",
    marginTop: "auto",
    paddingRight: "9px",
  },

  h1: {
    fontSize: "1.25rem",
    color: "#fff",
    fontWeight: "700",
  },
  h2: {
    fontSize: "0.9rem",
    color: "#004445",
    fontWeight: "700",
    paddingTop: "1rem",
    paddingLeft: "4px",
  },
  span: {
    fontSize: "0.9rem",
    color: "#021c1e",
    fontWeight: "700",
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
  h3: {
    color: "#6fb98f",
  },

  ".btn": {
    padding: ".5rem 1rem",
  },
});

const Card = styled("div")(({ theme }) => ({
  padding: "1rem 1.5rem",
  borderRadius: "1rem",
  background: "#021c1e",
  gap: "1rem",
  boxShadow: "0 2px 4px #021c1e",
  [theme.breakpoints.down("ml")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("lm")]: {
    flexDirection: "row",
  },
}));

const Users = styled("div")({
  borderRight: "2px solid rgb(190, 190, 190)",
  padding: "10px 10px 10px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ".imageTop": {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",

    transition: ".5s ease",
    color: "#6fb98f",

    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
});

const CardText = styled("div")({
  span: {
    color: "white",
    fontWeight: "500",
  },

  small: {
    fontWeight: "400",
    ".date": {
      color: "greenyellow",
    },
  },
});

const Listing = ({dataCard}) => {
  useEffect(() => {
    console.log('Listing: ',dataCard);
  },[dataCard])

  const getMaxAllDevicesNum1 = () => {
    let maxIndexes = [];
    let maxValue = -Infinity;

    if (dataCard?.userForms) {
      dataCard.userForms.forEach((item, index) => {
        if (item.allDevicesNum1 > maxValue) {
          maxValue = item.allDevicesNum1;
          maxIndexes = [index];
        } else if (item.allDevicesNum1 === maxValue) {
          maxIndexes.push(index);
        }
      });
    }

    return { maxIndexes, maxValue };
  };

  const maxAllDevicesNum1 = getMaxAllDevicesNum1();

  const getMinAllDevicesNum1 = () => {
    let minIndexes = [];
    let minValue = Infinity;

    if (dataCard?.userForms) {
      dataCard.userForms.forEach((item, index) => {
        if (item.allDevicesNum1 < minValue) {
          minValue = item.allDevicesNum1;
          minIndexes = [index];
        } else if (item.allDevicesNum1 === minValue) {
          minIndexes.push(index);
        }
      });
    }
    return { minIndexes, minValue };
  };

  const minAllDevicesNum1 = getMinAllDevicesNum1();

  return (
    <ListingSection>
      <Heading className="flex">
        <h1>My Registers</h1>
        {!dataCard ? (
          <h1>Loading...</h1>
        ) : dataCard.userForms?.length > 0 ? (
          <Link href="/dashboard/registers">
            <button className="btn flex">
              See All <ArrowForwardIcon className="icon" />
            </button>
          </Link>
        ) : (
          <h1>Loading...</h1>
        )}
      </Heading>

      <SecContainer className="flex">
        {!dataCard.userForms ? (
          <h1>Loading...</h1>
        ) : dataCard.userForms.length > 0 ? (
          <>
            {dataCard.userForms.slice(0, 3).map((item, index) => (
              <SigleItem key={index}>
                <h1>Register: {index + 1}</h1>
                <h2>
                  Spent energy: <span>{item.energyConsumedByBranchW11}</span>
                </h2>
                <h3>Result: {item.percResult}</h3>
              </SigleItem>
            ))}
          </>
        ) : (
          <Box textAlign="center">
            <Typography variant="h3">No hay registros disponibles.</Typography>
            <Link href="/dashboard/form">
              <Button variant="contained">Haz un registro</Button>
            </Link>
          </Box>
        )}
      </SecContainer>

      <Sellers className="flex">
        <TopSellers>
          <HeadingLower className="flex">
            <h3>Most devices amount</h3>
          </HeadingLower>

          <Card className="card flex">
            {!dataCard.userForms ? (
              <h1>Loading...</h1>
            ) : dataCard.userForms.length > 0 ? (
              <>
                {maxAllDevicesNum1.maxIndexes.length > 0 && (
                  <Users>
                    {maxAllDevicesNum1.maxIndexes.map((index) => (
                      <div
                        key={index}
                        className="imageTop"
                        style={{
                          borderRight: "2px solid rgb(190, 190, 190)",
                          display: "flex",
                          alignItems: "center",
                          gap: "1",
                        }}
                      >
                        <span
                          style={{
                            margin: "0 9px", // Ajusta el margen vertical según tus necesidades
                            padding: "0", // Ajusta el relleno según tus necesidades
                          }}
                          key={index}
                        >
                          {index + 1}
                        </span>
                      </div>
                    ))}
                  </Users>
                )}

                <CardText>
                  <span>
                    La mayor cantidad <br />
                    <small>
                      de dispositivos es:{" "}
                      <span className="date">{maxAllDevicesNum1.maxValue}</span>
                    </small>
                  </span>
                </CardText>
              </>
            ) : (
              <></>
            )}
          </Card>
        </TopSellers>

        <TopSellers>
          <HeadingLower className="flex">
            <h3>Least amount of devices</h3>
            {/* <button className="btn flex">
              See All <ArrowForwardIcon className="icon" />
            </button> */}
          </HeadingLower>

          <Card className="card flex">
            {!dataCard.userForms ? (
              <h1>Loading...</h1>
            ) : dataCard.userForms.length > 0 ? (
              <>
                {minAllDevicesNum1.minIndexes.length > 0 && (
                  <Users>
                    {minAllDevicesNum1.minIndexes.map((index) => (
                      <div
                        key={index}
                        className="imageTop"
                        style={{
                          borderRight: "2px solid rgb(190, 190, 190)",
                          display: "flex",
                          alignItems: "center",
                          gap: "1",
                        }}
                      >
                        <span
                          style={{
                            margin: "0 9px", // Ajusta el margen vertical según tus necesidades
                            padding: "0", // Ajusta el relleno según tus necesidades
                          }}
                          key={index}
                        >
                          {index + 1}
                        </span>
                      </div>
                    ))}
                  </Users>
                )}
                <CardText>
                  <span>
                    La menor cantidad <br />
                    <small>
                      de dispositivos es:{" "}
                      <span className="date">{minAllDevicesNum1.minValue}</span>
                    </small>
                  </span>
                </CardText>
              </>
            ) : (
              <></>
            )}
          </Card>
        </TopSellers>
      </Sellers>
    </ListingSection>
  );
};

export default Listing;
