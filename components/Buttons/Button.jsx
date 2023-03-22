import styled from "@emotion/styled";

const Button = styled("a")({
  textDecoration: "none",
  display: "inline-block",
  padding: "14px 40px",
  borderRadius: "0.5rem",
  fontSize: "17px",
  fontWeight: "500",
  background: "#763626",
  color: "#fff",
  border: "1px solid #763626",
  transition: "all .40s ease",
  ":hover": {
    transform: "scale(1.01) translateY(-5px)",
    background: "transparent",
    border: "1px solid #336b87",
    color: "#90afc5",
  },
});

export default function button() {
  return <Button></Button>;
}
