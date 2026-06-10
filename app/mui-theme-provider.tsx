"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const logoGreen = "#2f9e44";
const logoOrange = "#f08c00";
const dashboardBackground = "#101a13";
const paperBackground = "#17251b";
const dashboardText = "#f7f3ea";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#57c26a",
      dark: logoGreen,
      light: "#91d99d",
      contrastText: "#07110a",
    },
    secondary: {
      main: logoOrange,
      dark: "#b96b00",
      light: "#ffb24d",
      contrastText: "#1d1408",
    },
    background: {
      default: dashboardBackground,
      paper: paperBackground,
    },
    divider: "rgba(47, 158, 68, 0.18)",
    text: {
      primary: dashboardText,
      secondary: "#b5c2b8",
    },
    action: {
      hover: "rgba(87, 194, 106, 0.12)",
      selected: "rgba(87, 194, 106, 0.18)",
      disabledBackground: "rgba(87, 194, 106, 0.18)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: paperBackground,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: logoOrange,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            borderLeft: `3px solid ${logoGreen}`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: paperBackground,
        },
      },
    },
  },
});

export function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
