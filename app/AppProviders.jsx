"use client"

import { ThemeProvider } from "@emotion/react"
import { Provider } from "react-redux"
import theme from '../styles/Material_Ui';
import store from '../redux/store'
import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react"


export default function AppProviders({children, session}) {

    return (
        <SessionProvider session={session}>
            <ThemeProvider theme={theme}>
                {/* Applies the MUI baseline styles and fonts for all components and HTML to the children */}
                <CssBaseline/>
                <Provider store={ store }>
                    {children}
                </Provider>
            </ThemeProvider>
        </SessionProvider>
            
    )
}