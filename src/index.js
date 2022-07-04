import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { AppProvider } from "./context";

ReactDOM.render(
  <AppProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AppProvider>,
  document.getElementById("root")
);
