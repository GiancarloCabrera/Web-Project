import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

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
  anotherValue: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es requerido"),
  email: Yup.string()
    .email("Formato de correo inválido")
    .required("El correo es requerido"),
});

const SimpleForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [anotherValue, setAnotherValue] = useState("");

  useEffect(() => {
    console.log(name, "Constante actual");
  }, [name]);

  return (
    <ContainerGlobal>
      <Title>
        <h1>Your Registers</h1>
        <p>See all your register and see details</p>
      </Title>

      <Formik
        validate={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormContainer style={{ width: "100%" }}>
            <div>
              <TextField
                label="Nombre"
                name="name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={Boolean(
                  name && !validationSchema.fields.name.validate(name)
                )}
                helperText={<ErrorMessage name="name" />}
              />
            </div>
            <div>
              <TextField
                label="Register"
                name="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(
                  name && !validationSchema.fields.email.validate(email)
                )}
                helperText={<ErrorMessage name="email" />}
              />
            </div>
          </FormContainer>
          <div style={{ marginBottom: "1rem" }}>
            <TextField
              label="Otro registro"
              name="anotherEmail"
              variant="outlined"
              fullWidth
              value={anotherValue}
              onChange={(e) => setAnotherValue(e.target.value)}
              error={Boolean(
                anotherValue &&
                  !validationSchema.fields.email.validate(anotherValue)
              )}
              helperText={<ErrorMessage name="anotherEmail" />}
            />
          </div>
        </Form>
      </Formik>
    </ContainerGlobal>
  );
};

export default SimpleForm;
