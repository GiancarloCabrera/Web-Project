"use client";
<<<<<<< HEAD
import MainDashboard from "@/components/Dashboard/pages/MainDashboard";
=======
>>>>>>> 3f203c9 (More changes)
import React from "react";
import { ColorModeContext, useMode } from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Link from "next/link";
import Sidebar from "@/components/global/Sidebar";
import styled from "@emotion/styled";

import Topbar from "@/components/global/Topbar";

const App = styled("div")({
  display: "flex",
  position: "relative",
  height: "100vh",
});

const Content = styled("main")({
  height: "100%",
  width: "100%",
  fontFamily: "Source Sans Pro, sans-serif",
});

export default function Dashboard() {
  const [theme, colorMode] = useMode();
  return (
<<<<<<< HEAD
    <div>
      <MainDashboard />
    </div>
=======
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App className="xddd">
          <Sidebar />
          <Content className="content">
            <Topbar />
          </Content>
          Hola como estas
        </App>
      </ThemeProvider>
    </ColorModeContext.Provider>
>>>>>>> 3f203c9 (More changes)
  );
}
