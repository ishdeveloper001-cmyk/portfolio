import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0ea5e9',
    },
    secondary: {
      main: '#10b981',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: 'Plus Jakarta Sans, Inter, system-ui, -apple-system, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: 'Plus Jakarta Sans, Inter, system-ui, -apple-system, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#4b5563',
        },
      },
    },
  },
});

export default theme;

