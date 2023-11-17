import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ChakraProvider>  
  )
}

