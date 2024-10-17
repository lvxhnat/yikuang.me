import * as React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { ThemeProvider as ThemeMUIProvider } from "@mui/material/styles";
import { FC } from "react";
import { createTheme } from "./common/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeMUIProvider theme={createTheme("light")}>{children}</ThemeMUIProvider>
  );
};

function ThemedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

root.render(<ThemedApp />);
