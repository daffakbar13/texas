import { CSSObject } from '@emotion/react'
import { createTheme } from '@mui/material'
import { grey, indigo, red } from '@mui/material/colors'
import { globalStyles } from '../globalStyles'

export const theme = createTheme({
  palette: {
    // background: { default: '#f5f5f5' },
    primary: { main: indigo[900] },
    error: { main: red[900] },
    text: { primary: grey[800] },
  },
  shape: { borderRadius: 8 },
  typography: { fontSize: 14 },
  components: {
    MuiCssBaseline: { styleOverrides: { ...(globalStyles as CSSObject) } },
    MuiButton: {
      defaultProps: {
        size: 'medium',
        variant: 'contained',
        disableElevation: true,
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: indigo[900],
            backgroundColor: 'white',
          },
        },
      },
    },
  },
})
