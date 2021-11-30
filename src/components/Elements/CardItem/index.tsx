import {
  Box,
  Button,
  Heading,
  Image,
  Skeleton,
  useColorModeValue
} from "@chakra-ui/react";
import { useCart } from "contexts/Cart";
import { ellipsis } from "utils/ellipsis";
import { formatPrice } from "utils/formatPrice";
import { Rating } from "../Rating";

export type RatingItemProps = {
  rate: number;
  count?: number;
};

export type CardItemProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  rating: RatingItemProps;
};

const CardItem = ({
  id,
  image,
  title,
  description,
  rating,
  price
}: CardItemProps) => {
  const { addToCart, removeFromCart, loading, isInCart } = useCart();
  const borderColor = useColorModeValue("#230F5B  ", "purple.200");

  const handleClickCart = () => {
    if (isInCart(id)) {
      removeFromCart(id);
      return;
    }

    const newItem = {
      id,
      title,
      price,
      quantity: 1
    };

    addToCart(newItem);
  };

  return (
    <Box
      maxW="15rem"
      maxH="30rem"
      h="100%"
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderColor={borderColor}
    >
      <Skeleton w="100%" h="10rem" isLoaded={!!image}>
        <Image
          src={image}
          alt={title}
          w="100%"
          h="10rem"
          objectFit="contain"
          objectPosition="top"
          border="1px"
          borderColor="gray.600"
          borderRadius="8px"
          loading="eager"
        />
      </Skeleton>

      <Box
        p={5}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        h="100%"
      >
        <Box>
          <Heading as="h2" size="sm" mb="1">
            {ellipsis(title, 40)}
          </Heading>
          <Box as="h2" mb="1" fontWeight="semibold">
            Description:
            <Box as="p" fontSize="xs" fontWeight="normal">
              {ellipsis(description, 100)}
            </Box>
          </Box>

          <Box as="h2" mb="1" fontWeight="semibold">
            rating: <Rating rating={rating.rate} />
          </Box>

          <Box as="h2" mb="1" fontWeight="semibold">
            price:
            <Box as="span" ml="1" fontSize="sm" fontWeight="normal">
              {formatPrice(price)}
            </Box>
          </Box>
        </Box>

        <Button
          minH="4rem"
          maxH="4rem"
          size="lg"
          backgroundColor={isInCart(id) ? "tomato" : borderColor}
          isLoading={loading}
          onClick={handleClickCart}
        >
          {isInCart(id) ? "Remove from cart" : "Add to cart"}
        </Button>
      </Box>
    </Box>
  );
};

export { CardItem };
