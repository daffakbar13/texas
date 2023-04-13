import { CSSObject } from '@emotion/react'
import { createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import { globalStyles } from '../globalStyles'

export const theme = createTheme({
  palette: {
    // KFC
    // primary: { main: '#a3080c' },
    //
    // Dunkin Donuts
    // primary: { main: '#FF671F' },
    //
    // MCD
    // primary: { main: '#DA291C' },
    //
    //  Starbucks
    primary: { main: '#006752' },
    error: { main: red[900] },
    text: { primary: grey[900] },
  },
  shape: { borderRadius: 8 },
  // typography: { poster: { fontSize: 18, fontWeight: 'bold' } },
  components: {
    MuiCssBaseline: { styleOverrides: { ...(globalStyles as CSSObject) } },
    MuiButton: {
      defaultProps: {
        size: 'large',
        variant: 'contained',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 64,
          paddingRight: 16,
          paddingLeft: 16,
          minWidth: 0,
        },
        sizeSmall: {
          paddingTop: 2,
          paddingBottom: 2,
        },
        sizeMedium: {
          paddingTop: 4,
          paddingBottom: 4,
        },
        sizeLarge: {
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: grey[100],
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '8px 20px',
        },
        input: {
          padding: 0,
        },
      },
    },
  },
})
