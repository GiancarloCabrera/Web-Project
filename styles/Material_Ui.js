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
        h: 1325,
        ms: 970,
        mx: 830,
      },
    },
    palette: {
      mode: "dark",
      // This Color are being Tested
      primary: {  
        main: "#11cb5f"
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
    typography: {
      fontFamily: 'Quicksand, san-serif',
    },
  });

  export default theme
