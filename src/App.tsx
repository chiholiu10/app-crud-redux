import React from "react";
import theme from "./Styles/Theme";
import { ThemeProvider } from "styled-components";
import { CSSreset } from "./Styles/CssReset";
import Application from "./Components/Application/Application";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSreset />
      <Application />
    </ThemeProvider>
  );
};;
