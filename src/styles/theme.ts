import { extendTheme } from "@chakra-ui/react";
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";
import { Button } from "./button";

export const theme = extendTheme({
  textStyles: {
    h1: {
      fontWeight: "bold"
    }
  },
  components: {
    Button
  },
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
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode("white", "gray.800")(props),
        color: mode("#230F5B", "purple.200")(props)
      }
    })
  }
});
