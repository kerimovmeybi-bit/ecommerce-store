import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { getTheme } from "../theme/theme";

interface ThemeContextType {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

interface ThemeProviderCustomProps {
  children: ReactNode;
}

export function ThemeProviderCustom({
  children,
}: ThemeProviderCustomProps) {
  const [mode, setMode] = useState<
    "light" | "dark"
  >(
    () =>
      (localStorage.getItem("theme") as
        | "light"
        | "dark") || "light"
  );

  const toggleTheme = () => {
    const newMode =
      mode === "light"
        ? "dark"
        : "light";

    setMode(newMode);

    localStorage.setItem(
      "theme",
      newMode
    );
  };

  const theme = useMemo(
    () => getTheme(mode),
    [mode]
  );

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used inside ThemeProviderCustom"
    );
  }

  return context;
}