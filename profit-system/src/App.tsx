import { Button, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Button>ボタン</Button>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
