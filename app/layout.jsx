'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../styles/Material_Ui';

export default function RootLayout({ children }) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = children;
  
  return (
    // <CacheProvider value={emotionCache}>
    <html lang="en">
      <head />
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
    // </CacheProvider>
  )
}
