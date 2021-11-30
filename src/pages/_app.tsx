import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import { CartProvider } from "contexts/Cart";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ChakraProvider>
  );
}
export default App;
