import styled from "@emotion/styled";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

const Container = styled("div")({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#052f33",
  overflow: "hidden",
  fontFamily: "Montserrat, sans-serif",
});

const DetailsContainer = styled("div")({
  width: "90%",
  height: "100%",
  paddingBottom: "2rem",
  paddingTop: "2rem",
  overflow: "auto",
});

const Title = styled("div")(({ theme }) => ({
  h1: {
    fontSize: "1.5rem",
    color: "#6fb98f",
    fontWeight: "700",
  },

  p: {
    fontSize: ".938rem",
    color: "hsl(240, 1%, 48%)",
    fontWeight: "500",
  },
  [theme.breakpoints.down("lm")]: {
    textAlign: "center",
    margin: "auto",
  },
}));

const Status = styled("span")(({ status }) => {
  let color;

  if (status == 100) {
    color = "green";
  } else if (status < 100 && status >= 80) {
    color = "blue";
  } else if (status < 80 && status >= 50) {
    color = "yellow";
  } else {
    color = "red";
  }

  return {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: color,
  };
});

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "2rem",
  [theme.breakpoints.down("mx")]: {
    flexDirection: "column",
  },
}));

const Card = styled.div`
  flex-grow: 1;

  max-width: 100%;
  background-color: #021c1e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
`;
const SmallCard = styled("div")(({ theme }) => ({
  flex: "0 0 auto",
  backgroundColor: "#6fb98f",
  borderRadius: "8px",
  marginLeft: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  overflow: "hidden",
  height: "100%",
  maxHeight: "100%",

  [theme.breakpoints.down("mx")]: {
    marginLeft: "0",
  },
}));

const Mejorar = styled("h2")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  [theme.breakpoints.down("mx")]: {
    textAlign: "center",
    margin: "auto",
  },
}));

const MejorasList = styled("ul")(({ theme }) => ({
  listStyleType: "disc",
  paddingLeft: "0.5rem",
}));

const MejoraItem = styled("li")(({ theme }) => ({
  fontSize: "1rem",
  marginBottom: "0.5rem",
  "&::before": {
    content: "'\u2022'",
    marginRight: "0.5rem",
  },
}));
const CircularProgressBarContainer = styled("div")(({ theme }) => ({
  width: "50%",
  height: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const CircularProgressBar = styled(CircularProgressbar)(({ theme }) => ({
  width: "90%",
  height: "90%",
}));

const ButtonLink = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #6fb98f;
  color: #ffffff;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  font-family: "Montserrat, sans-serif";

  &:hover {
    background-color: #589c77;
  }

  @media (max-width: 830px) {
    font-size: 1.2rem;
    padding: 0.5rem 0.75rem;
  }
`;

const ContainerButton = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("mx")]: {
    paddingTop: "1rem",
  },
}));

const RegisterDetails = ({ params }) => {
  const { email } = useSelector(
    (state) => state.persistedReducer.login.loginUserCredentials
  );
  const [registerDetail, setRegisterDetail] = useState({});
  const [progress, setProgress] = useState(0);

  const [pruebaState, setPruebaState] = useState({});

  const { id } = params;

  const [dataCard, setDataCard] = useState([]);

  const formByEmail = async (email) => {
    try {
      const response = await fetch(
        `http://89.116.25.43:3001/api/form/getByEmail?email=${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setDataCard(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    formByEmail(email);
  }, [email]);

  useEffect(() => {
    if (dataCard.userForms) {
      const cartaSelectionada = dataCard.userForms.find(
        (carta) => carta._id === id
      );
      setPruebaState(cartaSelectionada);
    }
  }, [id, dataCard]);

  let estadoActual = "";
  let mensajeAdicional = "";
  let areasMejorar = [];

  if (pruebaState?.percResult == 100) {
    estadoActual = "Excelent";
    mensajeAdicional = "You don't have to improve on anything";
  } else if (pruebaState?.percResult < 100 && pruebaState?.percResult >= 80) {
    estadoActual = "Good";
    mensajeAdicional = "It's ok but you can improve";
    areasMejorar = ["Check old devices"];
  } else if (pruebaState?.percResult < 80 && pruebaState?.percResult >= 50) {
    estadoActual = "Acceptable";
    mensajeAdicional = "Check these things: ";
    areasMejorar = [
      "Very old devices",
      "Servers connected without use",
      "Use of ENERGY STAR devices",
    ];
  } else {
    estadoActual = "Bad";
    mensajeAdicional = "You must improve a lot, Check these things: ";
    areasMejorar = [
      "Very old devices",
      "Servers connected without use",
      "Try to use renewable energy",
      "Use of ENERGY STAR devices",
      "Implement automatic shutdown policies",
    ];
  }

  useEffect(() => {
    if (registerDetail) {
    }
  }, [registerDetail]);

  useEffect(() => {
    const targetProgress = pruebaState?.percResult || 0;
    const increment = 1;
    const duration = 1000; // Duración en milisegundos

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= targetProgress) {
          clearInterval(interval);
          return targetProgress;
        }
        return newProgress;
      });
    }, duration / (targetProgress / increment));

    return () => {
      clearInterval(interval);
    };
  }, [pruebaState?.percResult]);

  const getColor = () => {
    const porcentaje = pruebaState?.percResult;

    if (porcentaje == 100) {
      return "green";
    } else if (porcentaje < 100 && porcentaje >= 80) {
      return "blue";
    } else if (porcentaje < 80 && porcentaje >= 50) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <Container>
      <DetailsContainer>
        <Title>
          <h1>Details </h1>
          <p>Details about the hosen record</p>
        </Title>
        <CardContainer>
          <Card>
            <div style={{ paddingBottom: "1.5rem" }}>
              <Mejorar>
                Your current state{" "}
                <Status status={pruebaState?.percResult}>{estadoActual}</Status>
              </Mejorar>
            </div>
            <CircularProgressBarContainer>
              <CircularProgressBar
                value={progress}
                text={`${progress}%`}
                styles={{
                  path: { stroke: getColor() },
                  trail: { stroke: "#052f33" },
                  text: { fill: "#6fb98f", fontSize: "16px" },
                }}
              />
            </CircularProgressBarContainer>
          </Card>

          <SmallCard>
            {areasMejorar.length !== 0 && (
              <>
                <Mejorar>{mensajeAdicional}</Mejorar>
                <MejorasList>
                  {areasMejorar.map((mejora, i) => (
                    <MejoraItem key={i}>{mejora}</MejoraItem>
                  ))}
                </MejorasList>
              </>
            )}

            {areasMejorar.length === 0 && (
              <Mejorar>
                You shold not improve at all:
                <span style={{ color: "green" }}>EXCELLENT</span>
              </Mejorar>
            )}
          </SmallCard>
        </CardContainer>
        <ContainerButton>
          <Link href="dashboard/registers" passHref>
            <ButtonLink>Go back</ButtonLink>
          </Link>
        </ContainerButton>
      </DetailsContainer>
    </Container>
  );
};

export default RegisterDetails;
