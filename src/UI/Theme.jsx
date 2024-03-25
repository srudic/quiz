import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark", // Set initial mode to dark
    primary: {
      main: "#2196f3", // Blue color for primary elements
    },
    background: {
      default: "#121212", // Dark background color
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light", // Set mode to light
    primary: {
      main: "#2196f3", // Blue color for primary elements
    },
    background: {
      default: "#FFFFFF", // White background color
    },
  },
});
