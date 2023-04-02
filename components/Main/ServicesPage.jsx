import styled from "@emotion/styled";
import Image from "next/image";
import imagen from "../../public/images/iconServices.png";
import imagenEnergy from "../../public/images/iconEnergy.png";
import imagenGrapics from "../../public/images/iconGrapics.png";

const Services = styled("section")(({ theme }) => ({
  padding: "160px 10% 90px",
  [theme.breakpoints.down("h")]: {
    padding: "130px 3% 60px ",
  },
  [theme.breakpoints.down("ms")]: {
    padding: "70px 3% 60px ",
  },
}));

const MainText = styled("div")({
  textAlign: "center",
  h2: {
    fontSize: "3.5rem",
    marginBottom: "10px",
  },
  h4: {
    color: "#336b87",
    fontSize: "24px",
    fontWeight: "600",
  },
});

const ServicesContent = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px,auto))",
  alignItems: "center",
  textAlign: "center",
  gap: "2rem",
  marginTop: "5rem",
});

const Box = styled("div")({
  padding: "45px",
  background: "#12141c",
  borderTop: "5px solid transparent",
  transition: "all .40s ease",
  cursor: "pointer",
  borderRadius: "0.5rem",
  ":hover": {
    transform: "scale(1.01) translateY(-5px)",
    borderTop: "5px solid #336b87",
  },
  h3: {
    fontSize: "24px",
    fontWeight: "600",
    margin: "15px 0",
    transition: "all .40s ease",
  },
  p: {
    color: "gray",
    fontSize: "1.1rem",
    lineHeight: "30px",
    fontFamily: "Quicksand, san-serif",
  },
  ".img": {
    width: "60px",
    height: "60px",
  },
  ":hover h3": {
    color: "#2a3132",
  },
});

export default function ServicesPage() {
  return (
    <Services id="services">
      <MainText>
        <h2>Our services</h2>
        <h4>Better Expericences</h4>
      </MainText>

      <ServicesContent>
        <Box>
          <Image
            alt="imgConfigure"
            className="img"
            src={imagen}
            priority={true}
          />
          <h3>Pleasure Designs</h3>
          <p>
            We offer an engaging and easy-to-use experience. Our team works
            tirelessly to create a beautiful, easy-to-navigate app that guides
            you through all the tools needed for effective and sustainable
            resource management to help your pocketbook.
          </p>
        </Box>

        <Box>
          <Image
            alt="imgenergy"
            className="img"
            src={imagenEnergy}
            priority={true}
          />
          <h3>Energy</h3>
          <p>
            Our team of energy efficiency experts works with you to identify
            areas for improvement and develop customized solutions to optimize
            energy consumption in your business. And dat way help your pocket
          </p>
        </Box>

        <Box>
          <Image
            alt="imgGraphics"
            className="img"
            src={imagenGrapics}
            priority={true}
          />
          <h3>Graphics</h3>
          <p>
            Our team of energy efficiency experts works with you to gather
            valuable information about your resource consumption and present it
            clearly and concisely in easy-to-understand graphs and
            visualizations.
          </p>
        </Box>
      </ServicesContent>
    </Services>
  );
}
