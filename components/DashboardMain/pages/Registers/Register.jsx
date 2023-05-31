import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";

import Swal from "sweetalert2";
// import { styled } from "@mui/system";
import { styled, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Link from "next/link";
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

const useStyles = makeStyles((theme) => ({
  modal: {
    color: "black",
    backgroundColor: "#fff", // Color de fondo semi-transparente
    // Resto de estilos del modal
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "300px",
    borderRadius: "8px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Register() {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [dataCard, setDataCard] = useState();
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

  // useEffect(() => {
  //   console.log(dataCard);

  //   if (dataCard) {
  //     const cartaSelectionada = dataCard.userForms.find(
  //       (carta) => carta._id === id
  //     );
  //     setPruebaState(cartaSelectionada);
  //     console.log(pruebaState, "PruebaSate");
  //   }
  // }, [id, dataCard]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
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

  const handleShow = (id) => {
    const cartaSeleccionada = dataCard.userForms.find(
      (carta) => carta._id === id
    );
    setSelectedForm(cartaSeleccionada);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedForm(null);
    setIsModalOpen(false);
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

        {isLoading ? (
          <h1>Cargando perro</h1>
        ) : (
          <Grid container spacing={2} sx={{ marginTop: 0 }}>
            {dataCard.userForms.length !== 0 ? (
              dataCard.userForms.map((c, i) => (
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
                        Dispositivos {c.allDevicesNum1}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Consumo energetico {c.percResult}
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
                            href={`/dashboard/registers/register-detail/${c._id}`}
                          >
                            <Button
                              onClick={() => handleShow(c)}
                              variant="outlined"
                              size="small"
                              color="primary"
                            >
                              See More
                            </Button>
                          </Link>
                        </Box>
                        <Button
                          onClick={() => handleShow(c._id)}
                          variant="contained"
                          size="small"
                          color="error"
                        >
                          Show
                        </Button>
                        {selectedForm && (
                          <Modal
                            open={isModalOpen}
                            onClose={handleClose}
                            BackdropProps={{
                              style: {
                                backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
                              },
                            }}
                          >
                            <div className={classes.modal}>
                              <h2>Modal Escojido</h2>
                              <p>ID: {selectedForm._id}</p>
                              <p>Email: {selectedForm.emailUser}</p>
                              <p>
                                All Devices Number:{" "}
                                {selectedForm.allDevicesNum1}
                              </p>
                              <p>
                                Desk Computer Number:{" "}
                                {selectedForm.deskCompNum2}
                              </p>
                              <p>
                                Hours per Day Desk Computer:{" "}
                                {selectedForm.hoursPerDayDeskComp3}
                              </p>
                              {/* Resto del contenido del modal */}
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleClose}
                              >
                                Close Modal
                              </Button>
                            </div>
                          </Modal>
                        )}
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
        )}
      </RegisterContainer>
    </Container>
  );
}
