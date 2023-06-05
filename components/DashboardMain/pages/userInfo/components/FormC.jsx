import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import Swal from "sweetalert2";

import { useSelector } from "react-redux";

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
  password: "",
  newPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required Field"),
  email: Yup.string()
    .required("Required Field"),
  password: Yup.string()
    .required("Required Field"),
  newPassword: Yup.string()
    .required("Required Field"),
});

const combinedSchema = Yup.object().shape({
  ...validationSchema.fields,
});

const SimpleForm = () => {
  const fetchData = async (formData) => {
    try {
      const response = await fetch("http://localhost:3001/api/user/updUserCredByEmail", {
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
          title: "¡Data Send!",
          text: "Your credentials have been updated successfully",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "An error occurred while updating your credentials",
        });
      }

    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "An error occurred while sending the data.",
      });
    }
  };

  const { email } = useSelector(
    (state) => state.persistedReducer.login.loginUserCredentials
  );
  useEffect(() => {
    console.log("MAIN DASHBOARD: ", email);
  }, [email]);

  const handleSubmit = (values) => {
    // Realizar las acciones necesarias con los datos enviados
    // ...

    // const email = values.email;
    console.log('holaa');
    const password = values.password;
    const newPassword = values.newPassword;

    const formData = {
      email,
      password,
      newPassword
    };

    console.log(formData, "Holaaaa");
    fetchData(formData);

    // Mostrar la alerta SweetAlert

    resetForm();
    // useEffect(() => {
    //   console.log(formData);
    // }, [formData]);
  };

  return (
    <ContainerGlobal>
      <Title>
        <h1>User Profile</h1>
        <p>Check and modify your credentials!</p>
      </Title>
      <Formik
        validationSchema={combinedSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        >
        {({ touched, errors, values, resetForm }) => {

           return ( 
            <Form style={{ paddingTop: "20px" }}>
              <FormContainer style={{ width: "100%" }}>
                <div>
                  <Field
                    as={TextField}
                    name="email"
                    variant="outlined"
                    fullWidth
                    disabled
                    value={email}
                    error={touched.email && errors.email}
                    helperText={<ErrorMessage name="email" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    type='password'
                    label="Password"
                    name="password"
                    variant="outlined"
                    fullWidth
                    error={touched.password && errors.password}
                    helperText={<ErrorMessage name="password" />}
                  />
                </div>

                <div>
                  <Field
                    as={TextField}
                    type='password'
                    label="New password"
                    name="newPassword"
                    variant="outlined"
                    fullWidth
                    error={touched.newPassword && errors.newPassword}
                    helperText={<ErrorMessage name="newPassword" />}
                  />
                </div>
              </FormContainer>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                // disabled={isButtonDisabled}
              >
                Update
              </Button>
            </Form>
          );
        }}
      </Formik>
    </ContainerGlobal>
  );
};

export default SimpleForm;
