import React from "react";
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
  name: "",
  email: "",
  anotherEmail: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es requerido"),
  email: Yup.string()
    .email("Formato de correo inválido")
    .required("El correo es requerido"),
  anotherEmail: Yup.string()
    .email("Formato de correo inválido")
    .required("Otro registro es requerido"),
});

const handleSubmit = (values, { resetForm }) => {
  Swal.fire({
    icon: "success",
    title: "¡Datos enviados!",
    text: "Los datos se han enviado correctamente.",
  });
  // Realiza las acciones necesarias con los datos enviados

  resetForm();
};

const SimpleForm = () => {
  return (
    <ContainerGlobal>
      <Title>
        <h1>Your Registers</h1>
        <p>See all your register and see details</p>
      </Title>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, isValid, dirty, values, resetForm }) => (
          <Form style={{ paddingTop: "20px" }}>
            <FormContainer style={{ width: "100%" }}>
              <div>
                <Field
                  as={TextField}
                  label="Nombre"
                  name="name"
                  variant="outlined"
                  fullWidth
                  error={touched.name && errors.name}
                  helperText={touched.name && errors.name}
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  label="Register"
                  name="email"
                  variant="outlined"
                  fullWidth
                  error={touched.email && errors.email}
                  helperText={<ErrorMessage name="email" />}
                />
              </div>
            </FormContainer>
            <div style={{ marginBottom: "1rem" }}>
              <Field
                as={TextField}
                label="Otro registro"
                name="anotherEmail"
                variant="outlined"
                fullWidth
                error={touched.anotherEmail && errors.anotherEmail}
                helperText={<ErrorMessage name="anotherEmail" />}
              />
            </div>
            {dirty && isValid && (
              <Button
                variant="contained"
                style={{ backgroundColor: "red", color: "white" }}
                type="submit"
                fullWidth
                onClick={() => {
                  handleSubmit(values, { resetForm });
                }}
              >
                Submit
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </ContainerGlobal>
  );
};

export default SimpleForm;
