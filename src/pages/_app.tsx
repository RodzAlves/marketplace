import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";
import { CartProvider } from "contexts/Cart";

function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CartProvider>
  );
}
export default App;
