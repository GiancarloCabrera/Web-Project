import styled from "@emotion/styled";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";


const LastText = styled("div")({
  p: {
    textAlign: "center",
    padding: "15px",
    color: "gray",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
});

const A = styled("a")({
  textDecoration: "none",
  position: "fixed",
  bottom: "2.1rem",
  right: "2.1rem",
});

const Arrow = styled("div")({
  ".i": {
    height: "40px",
    width: "40px",
    background: "#763626",
    borderRadius: "0.5rem",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    marginRight: "10px",
    transition: "all .40s ease",
    padding: "10px",
  },
  ".i:hover": {
    transform: "scale(1.01) translateY(-5px)",
    background: "#336b87",
  },
});

export default function LowerPart() {
  return (
    <div>
      <LastText>
        <p>Mejora tu bolsillo con nosotros</p>
      </LastText>
      <Arrow>
        <A href="#">
          <ArrowUpwardIcon className="i" />
        </A>
      </Arrow>
    </div>
  );
}
