import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import image from "../../../../public/images/Example.png";
import { useSelector } from "react-redux";
import Link from "next/link";

const ActivitySection = styled("div")(({ theme }) => ({
  flexBasis: "50%",
  // background: "#021c1e",
  // padding: "10px",
  borderRadius: "10px",

  [theme.breakpoints.down("uy")]: {
    width: "100%",
  },
}));

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
  ".imageTop": {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "1rem",

    transition: ".5s ease",
    color: "#6fb98f",

    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
});

const CustomerDetails = styled("div")({
  flex: 1,
  marginRight: "10px",

  ".name": {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#6fb98f",
    display: "block",
  },
  small: {
    fontWeight: "500",
    color: "hsl(0, 0%, 18%)",
    fontSize: ".813rem",
  },
  span: {
    color: "white",
  },
});

const Duration = styled("div")({
  color: "hsl(240, 1%, 48%)",
  fontWeight: "500",
  fontSize: ".813rem",
});

const Activity = () => {
  const [dataCard, setDataCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { email } = useSelector(
    (state) => state.persistedReducer.login.loginUserCredentials
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/form/getByEmail?email=${encodeURIComponent(
            email
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setDataCard(data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const añosDeUso = () => {
    let totales = [];
    if (dataCard?.userForms) {
      dataCard.userForms.forEach((item) => {
        let total =
          item.avgYearsUsageServ7 +
          item.avgYearsUsageServ7 +
          item.avgYearsUsageDekComp4;
        let totalFormateado = total.toLocaleString();
        totales.push(totalFormateado);
      });
    }
    return totales;
  };

  const totalAñosUso = añosDeUso();

  console.log(añosDeUso());
  return (
    <ActivitySection>
      <Heading className="flex">
        <h1>Total Años</h1>
        {isLoading ? (
          <></>
        ) : dataCard.userForms.length > 0 ? (
          <Link href="/dashboard/registers">
            <button className="btn flex">
              See All <ArrowForwardIcon className="icon" />
            </button>
          </Link>
        ) : (
          <></>
        )}
      </Heading>

      <SecContainer className="grid">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : dataCard.userForms.length > 0 ? (
          <>
            {totalAñosUso.slice(0, 4).map((item, index) => (
              <SingleCustomer className="flex">
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
                </div>{" "}
                <CustomerDetails>
                  <span className="name">Registro {index + 1}</span>
                  <span>Años dispositivos</span>
                </CustomerDetails>
                <Duration>Uso: {item}</Duration>
              </SingleCustomer>
            ))}
          </>
        ) : (
          <></>
        )}
        {/* <SingleCustomer className="flex">
          <Image src={image} alt="Lastes" className="lastes" priority />
          <CustomerDetails>
            <span className="name">Registro</span>
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
        </SingleCustomer> */}
      </SecContainer>
    </ActivitySection>
  );
};

export default Activity;
