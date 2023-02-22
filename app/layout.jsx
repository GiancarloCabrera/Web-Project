'use client';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
// import CssBaseline from '@mui/material/CssBaseline';
// import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../styles/Material_Ui';
import store from '../redux/store'

export default function RootLayout({ children }) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = children;
  
  return (
    // <CacheProvider value={emotionCache}>
    <html lang="en">
      <head />
      <ThemeProvider theme={theme}>
          <Provider store={ store }>
            <body>{children}</body>
          </Provider>
      </ThemeProvider>
    </html>
    // </CacheProvider>
  )
}
