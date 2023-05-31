"use client"

import { ThemeProvider } from "@emotion/react"
import theme from '../styles/Material_Ui';
import { CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react"
import { Providers } from "./GlobalRedux/provider";


export default function AppProviders({children, session}) {

    return (
        <SessionProvider session={session}>
            <ThemeProvider theme={theme}>
                {/* Applies the MUI baseline styles and fonts for all components and HTML to the children */}
                <CssBaseline/>
                    <Providers>
                        {children}
                    </Providers>
            </ThemeProvider>
        </SessionProvider>
            
    )
}