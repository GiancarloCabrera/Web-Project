import React from "react";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";

const Container = styled("div")({
  position: "relative",
  maxWidth: "900px",
  width: "100%",
  borderRadius: "6px",
  padding: "30px",
  margin: "0 15px",
  background: "hsl(220, 10%, 94%)",
  boxShadow: "0 5px 10px rbga(0,0,0,0.1)",
});

const Registracion = styled("header")({
  position: "relative",
  fontSize: "20px",
  fontWeight: "600",
  color: "#333",
  "::before": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "-2px",
    height: "3px",
    width: "27px",
    borderRadius: "8px",
    background: "hsl(94, 59%, 35%)",
  },
});

const Form = styled("form")({
  position: "relative",
  marginTop: "16px",
  minHeight: "490px",
  background: "hsl(220, 10%, 94%)",
});

const FormFirst = styled("div")({});

const DetailsPersonal = styled("div")({
  marginTop: "30px",
});

const Title = styled("span")({
  display: "block",
  marginBottom: "8px",
  fontSize: "16px",
  fontWeight: "500",
  margin: "6px 0",
  color: "#333",
});

const Fields = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

const InputFields = styled("div")({
  display: "flex",
  width: "calc(100% / 3 - 15px)",
  flexDirection: "column",
  margin: "4px 0",
  input: {
    outline: "none",
    fontSize: "14px",
    fontWeight: "400",
    color: "#333",
    borderRadius: "5px",
    border: "1px solid #aaa",
    padding: "0 15px",
    height: "42px",
    margin: "8px 0",
  },
  "input:is(:focus, :valid)": {
    boxShadow: "0 3px 6px rgba(0, 0,0, 0.13)",
  },
  "input[type=date]": {
    color: "#707070",
  },
  "input[type=date]:valid": {
    color: "#333",
  },
  label: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#2e2e2e",
  },
});

const Button = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "45px",
  maxWidth: "200px",
  width: "100%",
  border: "none",
  outline: "none",
  color: "#fff",
  borderRadius: "5px",
  margin: "25px 0",
  background: "#bdf094",
  transition: "all 0.3s linear",
  cursor: "pointer",

  ":hover": {
    background: "#265df2",
  },
  ".iconSend": {
    margin: "0 6px",
  },
});

const BtnText = styled("span")({});

const FormC = () => {
  return (
    <Container>
      <Registracion className="header">Registracion</Registracion>

      <Form action="#">
        <FormFirst>
          <DetailsPersonal>
            <Title>Personal Details</Title>

            <Fields>
              <InputFields>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter a name for the Plant"
                ></input>
              </InputFields>
              <InputFields>
                <label>Date</label>
                <input
                  type="date"
                  placeholder="Enter a Date for the Plant"
                ></input>
              </InputFields>
              <InputFields>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter a name for the email"
                ></input>
              </InputFields>
              <InputFields>
                <label>Phtot</label>

                <input type="file" accept="image/*" />
              </InputFields>

              <Button>
                <BtnText>Send</BtnText>
                <SendIcon className="iconSend" />
              </Button>
            </Fields>
          </DetailsPersonal>
        </FormFirst>
      </Form>
    </Container>
  );
};

export default FormC;
