import {
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue
} from "@chakra-ui/react";

import { useCart } from "contexts/Cart";

const Cart = () => {
  const { items, total } = useCart();
  const bgColor = useColorModeValue("#230F5B  ", "purple.200");

  return (
    <Box
      maxW="20rem"
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderColor={bgColor}
      h="100%"
      maxH="35rem"
    >
      <Box
        p={8}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        h="100%"
        overflow="auto"
        gridGap="1rem"
      >
        {items.map((item) => (
          <Box
            key={item.id}
            p="4"
            display="flex"
            justifyContent="center"
            border="1px"
            borderRadius="8"
            borderColor={bgColor}
            flexDirection="column"
          >
            <Box as="h2" mb="1" fontWeight="semibold">
              Name:
              <Box as="span" ml="1" fontSize="sm" fontWeight="normal">
                {item.title}
              </Box>
            </Box>
            <Box as="h2" mb="1" fontWeight="semibold">
              Quantity:
              <Box as="span" ml="1" fontSize="sm" fontWeight="normal">
                {item.quantity}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      {/* <Box
        p={8}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        h="100%"
      >
        <Heading as="h2" size="sm" mb="1">
          {name}
        </Heading>
        <Box as="h2" mb="1" fontWeight="semibold">
          Description:
          <Box as="span" ml="1" fontSize="sm" fontWeight="normal">
            {description}
          </Box>
        </Box>

        <Box as="h2" mb="1" fontWeight="semibold">
          rating: <Rating rating={rating} />
        </Box>

        <Box as="h2" mb="1" fontWeight="semibold">
          price:
          <Box as="span" ml="1" fontSize="sm" fontWeight="normal">
            {formatPrice(price)}
          </Box>
        </Box>

        <Button maxH="4rem" size="lg">
          Add to cart
        </Button>
      </Box> */}

      <Box
        p="8"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="8"
        backgroundColor={bgColor}
      >
        <Heading as="h1" size="md" color="#fff">
          Total: {total}
        </Heading>
      </Box>
    </Box>
  );
};

export { Cart };
