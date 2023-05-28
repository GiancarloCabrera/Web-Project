import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import Swal from "sweetalert2";

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
  cantidadElectronicos: "",
  cantidadComputadoresEscritorio: "",
  horasComputadorEncendido: "",
  añosUsoPromedio: "",
  cantidadServidores: "",
  horasServidorEncendido: "",
  añosUsoPromedioServidor: "",
  cantidadPortatil: "",
  horasPortatilEncendido: "",
  añosUsoPromedioPortatil: "",

  energiaWatt: "",
};

const validationSchema = Yup.object({
  cantidadElectronicos: Yup.number()
    .typeError("La cantidad de dispositivos electronicos debe ser un numero")
    .integer("La cantidad debe ser un numero entero")
    .positive("La cantidad debe ser un numero positivo")
    .required(
      "La cantidad de dispositivos electronicos que maneja es requerida"
    ),

  energiaWatt: Yup.number()
    .typeError("La cantidad de cuanto consumio la sede debe ser un numero")
    .positive("La cantidad debe ser un numero positivo")
    .required("La cantidad de cuanto se consumio la sede es requerido"),
});

const validationSchemaComputer = Yup.object({
  cantidadComputadoresEscritorio: Yup.number()
    .typeError("La cantidad de computadores de escritorio debe ser un numero")
    .integer("La cantidad escrita debe ser un numero entero")
    .positive("La cantidad debe ser un numero positivo")
    .required(
      "La cantidad de computadores de escritorio que maneja es requerida"
    ),
  horasComputadorEncendido: Yup.number()
    .typeError(
      "La cantidad de horas del computador encendido debe ser un numero"
    )
    .positive("La cantidad registrada debe ser un numero positivo")
    .required("La cantidad de horas del computador encendido es requerido"),
  añosUsoPromedio: Yup.number()
    .typeError("Los años de uso promedio deben ser un numero")
    .positive("La cantidad debe ser un numero positivo")
    .required("Los años de uso de promedio debe ser requerido"),
});

const validationShemaServers = Yup.object({
  cantidadServidores: Yup.number()
    .typeError("La cantidad de servidores debe ser un numero")
    .integer("La cantidad escrita debe ser un numero entero")
    .positive("La cantidad debe ser un numero positivo")
    .required("La cantidad de los servidores es requerida"),
  horasServidorEncendido: Yup.number()
    .typeError("La cantidad de horas del servidor encendido debe ser un numero")
    .positive("La cantidad registrada debe ser un numero positivo")
    .required("La cantidad de horas es requerido"),
  añosUsoPromedioServidor: Yup.number()
    .typeError("Los años de uso promedio deben ser un numero")
    .positive("La cantidad debe ser un numero positivo")
    .required("Los años de uso promedio debe ser requerido"),
});

const validationSchemaPortatil = Yup.object({
  cantidadPortatil: Yup.number()
    .typeError("La cantidad de computadores debe ser un numero")
    .integer("La cantdiad escrita debe ser un numero entero")
    .positive("La cantidad debe ser un numero positivo")
    .required("La cantidad de los portatiles es requerida"),
  horasPortatilEncendido: Yup.number()
    .typeError("La cantidad de horas del portatil encedido debe ser un numero ")
    .positive("La cantidad registrada debe ser un numero positivo")
    .required("La cantidad de horas es requerido"),
  añosUsoPromedioPortatil: Yup.number()
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
const isCombinedFormValid = (touched, errors) => {
  const combinedFields = Object.keys(combinedSchema.fields);

  // Verificar si todos los campos del formulario combinado son válidos
  const isCombinedValid = combinedFields.every((field) => {
    return !errors[field];
  });

  return isCombinedValid;
};

const handleSubmit = (values, { resetForm }) => {
  // Realizar las acciones necesarias con los datos enviados
  // ...

  // Mostrar la alerta SweetAlert
  Swal.fire({
    icon: "success",
    title: "¡Datos enviados!",
    text: "Los datos se han enviado correctamente.",
  });

  resetForm();
};

const SimpleForm = () => {
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
                    name="cantidadElectronicos"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.cantidadElectronicos &&
                      errors.cantidadElectronicos
                    }
                    helperText={
                      touched.cantidadElectronicos &&
                      errors.cantidadElectronicos
                    }
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Cantidad computadores de Escritorio"
                    name="cantidadComputadoresEscritorio"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.cantidadComputadoresEscritorio &&
                      errors.cantidadComputadoresEscritorio
                    }
                    helperText={
                      <ErrorMessage name="cantidadComputadoresEscritorio" />
                    }
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Horas de encendido de los computadores de escritorio"
                    name="horasComputadorEncendido"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.horasComputadorEncendido &&
                      errors.horasComputadorEncendido
                    }
                    helperText={
                      <ErrorMessage name="horasComputadorEncendido" />
                    }
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Años de uso de promedio de las computadoras de escritorio"
                    name="añosUsoPromedio"
                    variant="outlined"
                    fullWidth
                    error={touched.añosUsoPromedio && errors.añosUsoPromedio}
                    helperText={<ErrorMessage name="añosUsoPromedio" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Cantidad de servidores"
                    name="cantidadServidores"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.cantidadServidores && errors.cantidadServidores
                    }
                    helperText={<ErrorMessage name="cantidadServidores" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Horas de encendido de los servidores"
                    name="horasServidorEncendido"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.horasServidorEncendido &&
                      errors.horasServidorEncendido
                    }
                    helperText={<ErrorMessage name="horasServidorEncendido" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Años de uso de promedio de los servidores"
                    name="añosUsoPromedioServidor"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.añosUsoPromedioServidor &&
                      errors.añosUsoPromedioServidor
                    }
                    helperText={<ErrorMessage name="añosUsoPromedioServidor" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Cantidad de portatiles"
                    name="cantidadPortatil"
                    variant="outlined"
                    fullWidth
                    error={touched.cantidadPortatil && errors.cantidadPortatil}
                    helperText={<ErrorMessage name="cantidadPortatil" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Horas de encendido de los portatiles"
                    name="horasPortatilEncendido"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.horasPortatilEncendido &&
                      errors.horasPortatilEncendido
                    }
                    helperText={<ErrorMessage name="horasPortatilEncendido" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    label="Años de uso de promedio de los portatiles"
                    name="añosUsoPromedioPortatil"
                    variant="outlined"
                    fullWidth
                    error={
                      touched.añosUsoPromedioPortatil &&
                      errors.añosUsoPromedioPortatil
                    }
                    helperText={<ErrorMessage name="añosUsoPromedioPortatil" />}
                  />
                </div>
              </FormContainer>
              <div style={{ marginBottom: "1rem" }}>
                <Field
                  as={TextField}
                  label="Cuanta energia consumio la sede en W (Watt)"
                  name="energiaWatt"
                  variant="outlined"
                  fullWidth
                  error={touched.energiaWatt && errors.energiaWatt}
                  helperText={<ErrorMessage name="energiaWatt" />}
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
