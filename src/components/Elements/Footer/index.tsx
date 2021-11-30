import { ReactNode } from "react";

import { Flex, useColorModeValue } from "@chakra-ui/react";

export type FooterProps = {
  children?: ReactNode;
};

const Footer = () => {
  const borderColor = useColorModeValue("#230F5B  ", "purple.200");
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      bg={backgroundColor}
      w="100%"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      bottom={0}
      left={0}
      p={4}
      pb={8}
      borderTopWidth="1px"
      borderTopColor={borderColor}
      transitionDuration="200ms"
    >
      @2021 Marketplace
    </Flex>
  );
};

export { Footer };
