import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Input from "@material-ui/core/Input";

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
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    margin: "auto",
  },
}));

const ContainerGlobal = styled("div")({
  width: "90%",
  height: "100%",
  paddingBottom: "2rem",
  paddingTop: "2rem",
  overflow: "auto",
});

const FormContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  "& > div": {
    width: "100%",
  },
  "& > div:last-child": {
    marginBottom: "1rem",
  },
}));

const initialValues = {
  allDevicesNum1: "",
  deskCompNum2: "",
  hoursPerDayDeskComp3: "",
  avgYearsUsageDekComp4: "",

  numberServers5: "",
  avgHoursPerDayUsageServ6: "",
  avgYearsUsageServ7: "",

  numberLaptops8: "",
  avgHoursPerDayUsageLaptop9: "",
  avgYearsUsageLaptop10: "",

  energyConsumedByBranchW11: "",
};

const validationSchema = Yup.object({
  allDevicesNum1: Yup.number()
    .typeError("La cantidad de dispositivos electronicos debe ser un numero")
    .integer("La cantidad debe ser un numero entero")
    .positive("La cantidad debe ser un numero positivo")
    .required(
      "La cantidad de dispositivos electronicos que maneja es requerida"
    ),

  energyConsumedByBranchW11: Yup.number()
    .typeError("La cantidad de cuanto consumio la sede debe ser un numero")
    .positive("La cantidad debe ser un numero positivo")
    .required("La cantidad de cuanto se consumio la sede es requerido"),
});

const validationSchemaComputer = Yup.object({
  deskCompNum2: Yup.number()
    .typeError("La cantidad de computadores de escritorio debe ser un numero")
    .integer("La cantidad escrita debe ser un numero entero")
    .positive("La cantidad debe ser un numero positivo")
    .required(
      "La cantidad de computadores de escritorio que maneja es requerida"
    ),
  hoursPerDayDeskComp3: Yup.number()
    .typeError(
      "La cantidad de horas del computador encendido debe ser un numero"
    )
    .positive("La cantidad registrada debe ser un numero positivo")
    .required("La cantidad de horas del computador encendido es requerido"),
  avgYearsUsageDekComp4: Yup.number()
    .typeError("Los años de uso promedio deben ser un numero")
    .positive("La cantidad debe ser un numero positivo")
    .required("Los años de uso de promedio debe ser requerido"),
});

const validationShemaServers = Yup.object({
  numberServers5: Yup.number()
    .typeError("La cantidad de servidores debe ser un numero")
    .integer("La cantidad escrita debe ser un numero entero")
    .positive("La cantidad debe ser un numero positivo")
    .required("La cantidad de los servidores es requerida"),
  avgHoursPerDayUsageServ6: Yup.number()
    .typeError("La cantidad de horas del servidor encendido debe ser un numero")
    .positive("La cantidad registrada debe ser un numero positivo")
    .required("La cantidad de horas es requerido"),
  avgYearsUsageServ7: Yup.number()
    .typeError("Los años de uso promedio deben ser un numero")
    .positive("La cantidad debe ser un numero positivo")
    .required("Los años de uso promedio debe ser requerido"),
});

const validationSchemaPortatil = Yup.object({
  numberLaptops8: Yup.number()
    .typeError("La cantidad de computadores debe ser un numero")
    .integer("La cantdiad escrita debe ser un numero entero")
    .positive("La cantidad debe ser un numero positivo")
    .required("La cantidad de los portatiles es requerida"),
  avgHoursPerDayUsageLaptop9: Yup.number()
    .typeError("La cantidad de horas del portatil encedido debe ser un numero ")
    .positive("La cantidad registrada debe ser un numero positivo")
    .required("La cantidad de horas es requerido"),
  avgYearsUsageLaptop10: Yup.number()
    .typeError("Los años de uso promedio debe ser un numero")
    .positive("La cantidad debe ser un numero positivo")
    .required("Los ñoas de uso promedio debe ser requerido"),
});
const combinedSchema = Yup.object().shape({
  ...validationSchema.fields,
  ...validationSchemaComputer.fields,
  ...validationShemaServers.fields,
  ...validationSchemaPortatil.fields,
});

const SimpleForm = () => {
  const fetchData = async (formData) => {
    try {
      const response = await fetch("http://localhost:3001/api/form/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Datos enviados!",
          text: "Los datos se han enviado correctamente.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "Se produjo un error al enviar los datos.",
        });
      }

      // Mostrar la alerta de éxito si la petición fue exitosa
    } catch (error) {
      console.error("Error:", error);
      console.log("HOLAAAAAA");

      // Mostrar la alerta de error utilizando SweetAlert
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Se produjo un error al enviar los datos.",
      });
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    // Realizar las acciones necesarias con los datos enviados
    // ...

    const allDevices = parseInt(values.allDevicesNum1);
    const deskCompNum2 = parseInt(values.deskCompNum2);
    const numberServers5 = parseInt(values.numberServers5);
    const numberLaptops8 = parseInt(values.numberLaptops8);

    const hoursPerDayDeskComp3 = parseFloat(values.hoursPerDayDeskComp3);
    const avgHoursPerDayUsageServ6 = parseFloat(
      values.avgHoursPerDayUsageServ6
    );
    const avgHoursPerDayUsageLaptop9 = parseFloat(
      values.avgHoursPerDayUsageLaptop9
    );

    const avgYearsUsageDekComp4 = parseFloat(values.avgYearsUsageDekComp4);
    const avgYearsUsageServ7 = parseFloat(values.avgYearsUsageServ7);
    const avgYearsUsageLaptop10 = parseFloat(values.avgYearsUsageLaptop10);

    const energyConsumedByBranchW11 = parseFloat(
      values.energyConsumedByBranchW11
    );

    const userEmail = "hamletcruzpirazan@gmail.com";

    const formData = {
      allDevicesNum1: allDevices,
      deskCompNum2: deskCompNum2,
      numberServers5: numberServers5,
      numberLaptops8: numberLaptops8,
      hoursPerDayDeskComp3: hoursPerDayDeskComp3,
      avgHoursPerDayUsageServ6: avgHoursPerDayUsageServ6,
      avgHoursPerDayUsageLaptop9: avgHoursPerDayUsageLaptop9,
      avgYearsUsageDekComp4: avgYearsUsageDekComp4,
      avgYearsUsageServ7: avgYearsUsageServ7,
      avgYearsUsageLaptop10: avgYearsUsageLaptop10,
      energyConsumedByBranchW11: energyConsumedByBranchW11,
      emailUser: userEmail,
    };

    console.log(formData, "Holaaaa");
    fetchData(formData);

    // Mostrar la alerta SweetAlert

    resetForm();
    useEffect(() => {
      console.log(formData);
    }, [formData]);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  useEffect(() => {
    setIsButtonDisabled(true);
  }, []);
  return (
    <ContainerGlobal>
      <Title>
        <h1>Your Registers</h1>
        <p>See all your register and see details</p>
      </Title>
      <Formik
        validationSchema={combinedSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, values, isValid, resetForm }) => {
          // Actualizar el estado del botón en función de la validez del formulario
          useEffect(() => {
            setIsButtonDisabled(!isValid);
          }, [isValid]);

          return (
            <Form style={{ paddingTop: "20px" }}>
              <FormContainer style={{ width: "100%" }}>
                <div>
                  <Field
                    as={TextField}
                    label="Cantidad de dispositivos electronicos"
                    name="allDevicesNum1"
                    variant="outlined"
                    fullWidth
                    error={touched.allDevicesNum1 && errors.allDevicesNum1}
                    helperText={touched.allDevicesNum1 && errors.allDevicesNum1}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Cantidad computadores de Escritorio"
                    name="deskCompNum2"
                    variant="outlined"
                    fullWidth
                    error={touched.deskCompNum2 && errors.deskCompNum2}
                    helperText={<ErrorMessage name="deskCompNum2" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Horas de encendido de los computadores de escritorio"
                    name="hoursPerDayDeskComp3"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.hoursPerDayDeskComp3 &&
                      errors.hoursPerDayDeskComp3
                    }
                    helperText={<ErrorMessage name="hoursPerDayDeskComp3" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Años de uso de promedio de las computadoras de escritorio"
                    name="avgYearsUsageDekComp4"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.avgYearsUsageDekComp4 &&
                      errors.avgYearsUsageDekComp4
                    }
                    helperText={<ErrorMessage name="avgYearsUsageDekComp4" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Cantidad de servidores"
                    name="numberServers5"
                    variant="outlined"
                    fullWidth
                    error={touched.numberServers5 && errors.numberServers5}
                    helperText={<ErrorMessage name="numberServers5" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Horas de encendido de los servidores"
                    name="avgHoursPerDayUsageServ6"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.avgHoursPerDayUsageServ6 &&
                      errors.avgHoursPerDayUsageServ6
                    }
                    helperText={
                      <ErrorMessage name="avgHoursPerDayUsageServ6" />
                    }
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Años de uso de promedio de los servidores"
                    name="avgYearsUsageServ7"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.avgYearsUsageServ7 && errors.avgYearsUsageServ7
                    }
                    helperText={<ErrorMessage name="avgYearsUsageServ7" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Cantidad de portatiles"
                    name="numberLaptops8"
                    variant="outlined"
                    fullWidth
                    error={touched.numberLaptops8 && errors.numberLaptops8}
                    helperText={<ErrorMessage name="numberLaptops8" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Horas de encendido de los portatiles"
                    name="avgHoursPerDayUsageLaptop9"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.avgHoursPerDayUsageLaptop9 &&
                      errors.avgHoursPerDayUsageLaptop9
                    }
                    helperText={
                      <ErrorMessage name="avgHoursPerDayUsageLaptop9" />
                    }
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Años de uso de promedio de los portatiles"
                    name="avgYearsUsageLaptop10"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.avgYearsUsageLaptop10 &&
                      errors.avgYearsUsageLaptop10
                    }
                    helperText={<ErrorMessage name="avgYearsUsageLaptop10" />}
                  />
                </div>
              </FormContainer>
              <div style={{ marginBottom: "1rem" }}>
                <Field
                  as={TextField}
                  label="Cuanta energia consumio la sede en W (Watt)"
                  name="energyConsumedByBranchW11"
                  variant="outlined"
                  fullWidth
                  error={
                    touched.energyConsumedByBranchW11 &&
                    errors.energyConsumedByBranchW11
                  }
                  helperText={<ErrorMessage name="energyConsumedByBranchW11" />}
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isButtonDisabled}
              >
                Calcular
              </Button>
            </Form>
          );
        }}
      </Formik>
    </ContainerGlobal>
  );
};

export default SimpleForm;
