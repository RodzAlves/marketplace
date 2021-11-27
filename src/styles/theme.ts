import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light"
  },
  global: {
    fontFamily: "Roboto, sans-serif"
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif"
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "#230F5B"
      }
    }
  }
});
