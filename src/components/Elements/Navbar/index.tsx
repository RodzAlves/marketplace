import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { ReactNode } from "react";

// export type NavbarProps = {};

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700")
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box px="4" w="100%" maxW="1440px" m="0 auto">
        <Flex h="16" alignItems="center" justifyContent="space-between">
          <Heading fontSize="2xl" as="h1">
            Market
          </Heading>

          <Flex alignItems="center">
            <NavLink>Store</NavLink>
            <NavLink>My account</NavLink>
          </Flex>

          <Flex alignItems="center">
            <Stack direction="row" spacing="7">
              <Button variant="outline" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Avatar size="sm" src={"https://i.pravatar.cc/150?img=21"} />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export { Navbar };
