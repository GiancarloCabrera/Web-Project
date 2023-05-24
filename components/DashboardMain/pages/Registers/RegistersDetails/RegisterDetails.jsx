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
    fontSize: "1rem",
    fontWeight: "500",
    color: color,
  };
});

const ContainerDe = styled("div")({
  width: "100%",

  marginTop: "3rem",
});

const RegisterDetails = ({ params }) => {
  const [registerDetail, setRegisterDetail] = useState();
  const [progress, setProgress] = useState(0);

  let estadoActual = "";
  let mensajeAdicional = "";

  if (registerDetail?.estado?.porcentaje >= 80) {
    estadoActual = "Excelente";
    mensajeAdicional = "No debes mejorar en nada";
  } else if (registerDetail?.estado?.porcentaje >= 50) {
    estadoActual = "Bueno";
    mensajeAdicional = "Debes mejorar en estas cosas puntuales";
  } else {
    estadoActual = "Malo";
    mensajeAdicional = "Debes mejorar mucho, en estas cosas en especifico";
  }

  useEffect(() => {
    const data = {
      name: "Prueba1",
      apellido: "Estban",
      estado: {
        porcentaje: 100,
      },
    };
    setRegisterDetail(data);
  }, []);

  useEffect(() => {
    const targetProgress = registerDetail?.estado?.porcentaje || 0;
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
  }, [registerDetail?.estado?.porcentaje]);

  const getColor = () => {
    const porcentaje = registerDetail?.estado?.porcentaje;

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
          <h1>Detalles</h1>
          <p>Detalles acerca de {registerDetail?.name}</p>
        </Title>
        <ContainerDe>
          <div>
            <p>
              Tu estado actual es{" "}
              <Status status={registerDetail?.estado?.porcentaje}>
                {estadoActual}
              </Status>
              {", "}
              {mensajeAdicional}
            </p>
          </div>
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              styles={{
                path: { stroke: getColor() },
                trail: { stroke: "yellow" },
                text: { fill: "#6fb98f", fontSize: "16px" },
              }}
            />
          </div>
        </ContainerDe>
        <div style={{ marginTop: "70px" }}>
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              styles={{
                path: { stroke: getColor() },
                trail: { stroke: "yellow" },
                text: { fill: "#6fb98f", fontSize: "16px" },
              }}
            />
          </div>
        </div>
        <Link href="dashboard/registers">Go back</Link>
      </DetailsContainer>
    </Container>
  );
};

export default RegisterDetails;
