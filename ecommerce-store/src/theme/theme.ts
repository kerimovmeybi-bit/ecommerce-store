import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
    },

    typography: {
      fontFamily: "Inter, sans-serif",

      h1: {
        fontWeight: 800,
      },

      h2: {
        fontWeight: 800,
        letterSpacing: "-0.03em",
      },

      h3: {
        fontWeight: 700,
      },

      h4: {
        fontWeight: 700,
      },

      h5: {
        fontWeight: 600,
      },

      h6: {
        fontWeight: 600,
      },

      button: {
        fontWeight: 600,
        textTransform: "none",
      },
    },
  });