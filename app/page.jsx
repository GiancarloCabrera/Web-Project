'use client'

import { Grid } from '@mui/material'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        sm={6}
        md={12}
      ><h1>Page Main</h1></Grid>
      <Grid
        item
        xs={6}
        sm={6}
        md={12}
      ><h1>Page Main 2</h1></Grid>
    </Grid>
  //  <h1>Main</h1>
  )
}
