import styled from "@emotion/styled";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

  if (status >= 80) {
    color = "green";
  } else if (status >= 50) {
    color = "blue";
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
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Card = styled.div`
  flex-grow: 1;

  max-width: 100%;
  background-color: lightblue;
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
  backgroundColor: "lightpink",
  borderRadius: "8px",
  marginLeft: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  overflow: "hidden",
  height: "100%",
  maxHeight: "100%",

  [theme.breakpoints.down("sm")]: {
    marginLeft: "0",
  },
}));

// const Mejorar = styled("h1")(({ theme }) => ({
//   fontSize: "1.5rem",
//   fontWeight: "700",
//   color: "#6fb98f",
//   [theme.breakpoints.down("sm")]: {
//     textAlign: "center",
//     margin: "auto",
//   },
// }));

const Mejorar = styled("h2")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
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
  font-size: 1rem;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #589c77;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }
`;

const ContainerButton = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: "1rem",
  },
}));

const RegisterDetails = ({ params }) => {
  const [registerDetail, setRegisterDetail] = useState({});
  const [progress, setProgress] = useState(0);

  const [dataCard, setDataCard] = useState();

  const [pruebaState, setPruebaState] = useState({});

  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = "hamletcruzpirazan@gmail.com";
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

  useEffect(() => {
    console.log(dataCard);

    if (dataCard) {
      const cartaSelectionada = dataCard.userForms.find(
        (carta) => carta._id === id
      );
      setPruebaState(cartaSelectionada);
      console.log(pruebaState, "PruebaSate");
    }
  }, [id, dataCard]);

  let estadoActual = "";
  let mensajeAdicional = "";
  let areasMejorar = [];

  if (pruebaState?.percResult >= 80) {
    estadoActual = "Excelente";
    mensajeAdicional = "No debes mejorar en nada";
  } else if (pruebaState?.percResult >= 50) {
    estadoActual = "Bueno";
    mensajeAdicional = "Debes mejorar en estas cosas puntuales";
    areasMejorar = [
      "Energia de los computadores",
      "Uso responable de la energia",
    ];
  } else {
    estadoActual = "Malo";
    mensajeAdicional = "Debes mejorar mucho, en estas cosas en especifico";
    areasMejorar = [
      "Energia de los sevidores",
      "Enrgia de los computadores",
      "Energia en lso compuadores de mesa",
    ];
  }

  useEffect(() => {
    const data = {
      name: "Prueba1",
      apellido: "Estban",
      estado: {
        porcentaje: 100,
      },
      mejoras: ["Mas Productivo", "Mejor"],
    };
    setRegisterDetail(data);
  }, []);

  useEffect(() => {
    if (registerDetail) {
      console.log(registerDetail.mejoras);
    }

    console.log(Object.keys(registerDetail));
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

    if (porcentaje >= 80) {
      return "green"; // Excelente
    } else if (porcentaje >= 50) {
      return "blue"; // Bueno
    } else {
      return "red"; // Malo
    }
  };

  return (
    <Container>
      <DetailsContainer>
        <Title>
          <h1>Detalles </h1>
          <p>
            Detalles acerca de el registro escojido:{" "}
            <span style={{ color: "#6fb98f" }}>{pruebaState?.percResult}</span>
          </p>
        </Title>
        <CardContainer>
          <Card>
            <div style={{ paddingBottom: "1.5rem" }}>
              <Mejorar>
                Tu estado actual es{" "}
                <Status status={pruebaState?.percResult}>{estadoActual}</Status>
                {", "}
                {mensajeAdicional}
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
                <Mejorar>Cosas a mejorar</Mejorar>
                <MejorasList>
                  {areasMejorar.map((mejora, i) => (
                    <MejoraItem key={i}>{mejora}</MejoraItem>
                  ))}
                </MejorasList>
              </>
            )}

            {areasMejorar.length === 0 && (
              <Mejorar>No debes mejorar en nada</Mejorar>
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
