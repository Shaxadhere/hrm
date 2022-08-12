//react imports
import React from "react";
import ReactDOM from "react-dom";

//app config imports
import AppRouter from "./config/routes";

//ui config imports
import Theme from "./assets/theme";
import Breakpoints from "./config/breakpoints";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "./index.css";

//ui config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({ Theme, Breakpoints, config });


//render
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
