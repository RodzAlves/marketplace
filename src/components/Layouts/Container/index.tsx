import { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Navbar } from "components/Elements";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Flex
      direction="column"
      minH="100vh"
      w="100vw"
      bgColor={useColorModeValue("white", "gray.800")}
    >
      <Navbar />

      <Flex w="100%" maxW="1440px" ml="auto" p="0 1rem" mr="auto" h="100%">
        {children}
      </Flex>
    </Flex>
  );
};
