import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import foto from "../../../../assets/Icons/fotoPrueba.webp";
import "../../SideBar/xd.css";
const Container = styled("div")({
  width: "100%",
  maxHeight: "100vh",
  display: "flex",
  alignItems: "flex-start",
  textAlign: "left",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "hsl(220, 10%, 94%)",
  fontFamily: "Montserrat, sans-serif",
  color: "black",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  paddingLeft: "3.5rem",
  paddingRight: "3.5rem",
  overflow: "hidden",

  h1: {
    padding: "1rem ",

    width: "100%",
    textAlign: "left",
    fontSize: "1.5rem",
    color: "hsl(0, 0%, 18%)",
    fontWeight: "700",
  },
});

const CardRegister = styled("div")({
  position: "relative",
  width: "350px",
  height: "190px",
  background: "#fff",
  borderRadius: "20px",
  boxShadow: "0 35px 80px hsl(220, 10%, 94%)",
  paddingTop: "2rem",
  transition: "0.5s",

  // border: "1px solid gray",
  ":hover": {
    height: "450px",
  },

  ":hover .imgbox": {
    width: "250px",
    height: "250px",
  },
});

const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  paddingTop: "4rem",
  // display: "grid",
  // gridTemplateColumns: "repeat(3, 1fr)",
  // gap: "1rem",
  // maxHeight: "100vh",
  overflow: "auto",
  // flexWrap: "wrap",
  width: "100%",
  height: "100%",

  boxSizing: "border-box",

  //   [theme.breakpoints.down()]
}));

const ImgBox = styled("div")({
  position: "absolute",
  left: "50%",
  top: "-50px",
  transform: "translateX(-50%)",
  width: "150px",
  height: "150px",
  background: "#fff",
  borderRadius: "20px",
  boxShadow: "0 15px 50px hsl(220, 10%, 94%)",
  overflow: "hidden",
  transition: "0.5s",

  ".image": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const Content = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  // overflow: "hidden",
});

const Details = styled("div")({
  textAlign: "center",
  width: "100%",
  transition: "0.5s",
  // transform: "translateY(150px)",
  h2: {
    fontSize: "1.25em",
    fontWeight: "600",
    color: "#555",
    lineHeight: "1.2em",
  },
  ".card:hover .content .details": {
    transform: "translateY(0px)",
  },
});

const SpanDetails = styled("span")({
  fontSize: "0.75em",
  fontWeight: "500",
  opacity: "0.5",
});

const Data = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px 0",

  h3: {
    fontSize: "1em",
    color: "#555",
    lineHeight: "1.2em",
    fontWeight: "600",
  },
  span: {
    fontSize: ".0.85em",
    fontWeight: "400",
    opacity: "0.5",
  },
});

const ActionBtn = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  button: {
    padding: "10px 30px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    fontSize: "1em",
    fontWeight: "500",
    background: "#ff5f95",
    color: "#fff",
    fontFamily: "Montserrat, sans-serif",
    cursor: "pointer",
  },
  "button:nth-child(2)": {
    border: "1px solid #999",
    color: "#999",
    background: "#fff",
  },
});

const fakeData = [
  {
    name: "Prueba1",
    nombre: "Estban",
    numero: 234,
    id: 1,
  },
];

export default function Register() {
  return (
    <Container>
      <h1>Welcome to your Registers</h1>
      <CardsContainer>
        {fakeData.length !== 0
          ? fakeData.map((c, i) => (
              <CardRegister className="card" key={i}>
                {/* <h1>{c.name}</h1> */}
                <ImgBox className="imgbox">
                  <Image className="image" src={foto} />
                </ImgBox>

                <Content className="content">
                  <Details className="details">
                    <div style={{ paddingBottom: "20px" }}>
                      <h2>
                        {c.name}
                        <br />
                        <SpanDetails>{c.nombre}</SpanDetails>
                      </h2>
                    </div>

                    <div style={{ paddingBottom: "20px" }}>
                      <Data>
                        <h3>
                          {c.numero}
                          <br />
                          <span>Hola</span>
                        </h3>
                        <h3>
                          {c.numero}
                          <br />
                          <span>Hola</span>
                        </h3>
                        <h3>
                          {c.numero}
                          <br />
                          <span>Hola</span>
                        </h3>
                      </Data>
                      <ActionBtn>
                        <Link
                          href={`dashboard/registers/register-detail/${c.id}`}
                        >
                          <button>See More</button>
                        </Link>

                        <button>Delete</button>
                      </ActionBtn>
                    </div>
                  </Details>
                </Content>
                {/* <Link href={`dashboard/registers/register-detail/${c.id}`}>
                  <button>View full register</button>
                </Link> */}
              </CardRegister>
            ))
          : null}
      </CardsContainer>
    </Container>
  );
}
