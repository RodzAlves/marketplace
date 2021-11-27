import { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Flex
      direction="column"
      minH="100vh"
      w="100vw"
      p="0 1rem"
      bgColor={useColorModeValue("white", "gray.800")}
    >
      <Flex w="100%" maxW="1440px" ml="auto" mr="auto" h="100%">
        {children}
      </Flex>
    </Flex>
  );
};
