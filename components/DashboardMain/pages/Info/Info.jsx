import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ConctacPage from "@/components/Main/ContactPage";
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

  ".arc": {
    background: "#021c1e",
  },
});

const InfoContainer = styled("div")({
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

export default function Info() {
  return (
    <Container>
      <InfoContainer>
        <Title>
          <h1>Info</h1>
          <p>Si tienes alguna duda no dudes en preguntar</p>
        </Title>

        <Accordion className="arc" defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p>Pregunta Importante</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sunt quisquam mollitia assumenda aperiam quibusdam officia laborum
              suscipit accusantium, nihil inventore labore veniam nam atque
              rerum sequi, fugit sapiente incidunt?
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="arc" defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p>Pregunta Importante</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sunt quisquam mollitia assumenda aperiam quibusdam officia laborum
              suscipit accusantium, nihil inventore labore veniam nam atque
              rerum sequi, fugit sapiente incidunt?
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="arc" defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p>Pregunta Importante</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sunt quisquam mollitia assumenda aperiam quibusdam officia laborum
              suscipit accusantium, nihil inventore labore veniam nam atque
              rerum sequi, fugit sapiente incidunt?
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="arc" defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <p>Pregunta Importante</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sunt quisquam mollitia assumenda aperiam quibusdam officia laborum
              suscipit accusantium, nihil inventore labore veniam nam atque
              rerum sequi, fugit sapiente incidunt?
            </p>
          </AccordionDetails>
        </Accordion>
        {/* <div style={{ background: "black", paddingBottom: "90%" }}>
          <ConctacPage />
        </div> */}
      </InfoContainer>
    </Container>
  );
}
