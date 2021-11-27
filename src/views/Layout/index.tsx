import { ReactNode } from "react";

import { Flex } from "@chakra-ui/react";
import { Container } from "components/layouts";

export type LayoutPageProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutPageProps) => (
  <Flex>
    <Container>{children}</Container>
  </Flex>
);

export { Layout };
