import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  useMediaQuery,
} from "@mui/material";
import "../../SideBar/xd.css";

import Swal from "sweetalert2";
// import { styled } from "@mui/system";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import Link from "next/link";

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

const RegisterContainer = styled("div")({
  width: "90%",
  height: "100%",
  paddingBottom: "2rem",
  paddingTop: "2rem",
  overflow: "auto",
  ".girdC": {
    marginTop: "20px",
  },
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

const NoDataMessage = styled(Typography)({
  overflow: "auto",
});

export default function Register() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [fakeData, setFakeData] = useState([
    // Datos iniciales
    {
      name: "Prueba1",
      nombre: "Estban",
      numero: 234,
      id: 1,
    },
    {
      name: "Prueba2",
      nombre: "Maria",
      numero: 233,
      id: 2,
    },
  ]);

  const deleteItem = (id) => {
    const updatedData = fakeData.filter((item) => item.id !== id);
    setFakeData(updatedData);
  };

  const showAlert = (item) => {
    const formattedItem = `<span style="color: red">${item}</span>`;

    Swal.fire({
      title: "Eliminar",
      html: `¿Estás seguro de querer eliminar el registro? : ${formattedItem}`,
      icon: "warning",
      iconColor: "red",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const itemToDelete = fakeData.find((data) => data.nombre === item);
        if (itemToDelete) {
          deleteItem(itemToDelete.id);
          Swal.fire({
            title: "Eliminado",
            text: "El registro se ha eliminado correctamente",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
          });
        }
      }
    });
  };
  return (
    <Container>
      <RegisterContainer>
        <Title>
          <h1>See all your forms</h1>
          <p>See all your register and see details</p>
        </Title>

        <Grid container spacing={2} sx={{ marginTop: 0 }}>
          {fakeData.length !== 0 ? (
            fakeData.map((c, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card
                  sx={{
                    // marginBottom: 2,
                    backgroundColor: "#021c1e",

                    borderRadius: "10px ",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    // border: "1px solid white",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {c.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Contenido de la carta
                    </Typography>
                    <Grid
                      container
                      gap={isMobile ? 1 : 0}
                      sx={{ marginTop: 2 }}
                      className={isMobile ? "mobile-buttons-container" : ""}
                    >
                      <Box
                        sx={{
                          marginRight: isMobile ? 0 : 1,
                        }}
                      >
                        <Link
                          href={`/dashboard/registers/register-detail/${c.id}`}
                        >
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                          >
                            See More
                          </Button>
                        </Link>
                      </Box>
                      <Button
                        onClick={() => showAlert(c.nombre)}
                        variant="contained"
                        size="small"
                        color="error"
                      >
                        Delete
                      </Button>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <div>
                <NoDataMessage variant="body1">
                  No hay registros disponibles.
                </NoDataMessage>
              </div>
            </Grid>
          )}
        </Grid>
      </RegisterContainer>
    </Container>
  );
}
