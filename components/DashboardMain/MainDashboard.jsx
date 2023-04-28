import styled from "@emotion/styled";
import Body from "@/components/DashboardMain/Body/Body";
import SideBar from "@/components/DashboardMain/SideBar/SideBar";

const Container = styled("div")({
  position: "relative",
  width: "95vw",
  height: "95vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "hsl(220, 10%, 94%)",
  overflow: "hidden",
  borderRadius: "1rem",
  boxShadow: "2px 2px 8px rgb(190, 190, 190)",
  color: "black",
});

export default function MainDashboard() {
  return (
    <Container>
      <SideBar />
      <Body />
    </Container>
  );
}
