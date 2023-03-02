'use client';

import { createTheme } from "@mui/material"; 

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 650,
        md: 1024,
        lg: 1900,
        xl: 2400,
      },
    },
    palette: {
      mode: "dark"
    },
    typography: {
      fontFamily: 'Quicksand, san-serif',
    },
  });

  export default theme
