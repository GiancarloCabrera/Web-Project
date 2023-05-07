"use client";
import React from "react";
import { ColorModeContext, useMode } from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../global/Topbar";
import Link from "next/link";
import Sidebar from "../global/Sidebar";
import styled from "@emotion/styled";

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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App className="xddd">
          <Sidebar />
          <Content className="content">
            <Topbar />
          </Content>
        </App>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
