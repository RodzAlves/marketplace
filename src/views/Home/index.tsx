import { useState } from "react";
import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { CardItem, CardItemProps, Cart, Footer } from "components/Elements";
import { HomeProps } from "pages";
import { Layout } from "views/Layout";

const PER_PAGE = 3;

export function Home({ items }: HomeProps) {
  const purpleColor = useColorModeValue("#230F5B  ", "purple.200");

  const [products, setProducts] = useState<CardItemProps[]>(items);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const pages = Math.ceil(products.length / PER_PAGE);
  const startIndex = currentPage * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <Layout>
      <Box
        display="grid"
        gridTemplateColumns="3fr 1fr"
        w="100%"
        p="10"
        gridColumnGap="2rem"
      >
        <Flex w="100%" flexDirection="column">
          <Box w="100%" h="100%" display="flex" justifyContent="space-between">
            {currentProducts.map((product) => (
              <CardItem key={product.id} {...product} />
            ))}
          </Box>

          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            pb="20"
          >
            <Flex alignItems="center" gridGap="1rem">
              <Button
                color={purpleColor}
                variant="link"
                fontSize="sm"
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous page
              </Button>
              <Button
                color={purpleColor}
                variant="link"
                fontSize="sm"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next page
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Box>
          <Cart />
        </Box>
      </Box>

      <Footer />
    </Layout>
  );
}
