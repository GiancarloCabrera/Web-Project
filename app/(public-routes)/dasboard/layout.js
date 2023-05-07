"use client";
import { ColorModeContext, useMode } from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/styles/Material_Ui";
import Sidebar from "@/components/global/Sidebar";
import styled from "@emotion/styled";
import Topbar from "@/components/global/Topbar";

const App = styled("div")({
  display: "flex",
  position: "relative",
});

const Contentenido = styled("main")({
  height: "100%",
  width: "100%",
  fontFamily: "Source Sans Pro, sans-serif",
});

export default function LayoutDashboard({ children }) {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: "flex", width: "100%", height: "auto" }}>
          <div style={{ height: "100vh" }}>
            <Sidebar />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100vh",
            }}
          >
            <Topbar />
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "auto",
                overflow: "auto",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
