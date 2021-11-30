import { useState, useCallback } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  CardItem,
  CardItemProps,
  Cart,
  Footer,
  Select
} from "components/Elements";
import { HomeProps } from "pages";
import { Layout } from "views/Layout";
import { useCart } from "contexts/Cart";
import { orderOptions, ratingOptions } from "./mock/selects";

const PER_PAGE = 3;

type Order = "asc" | "desc" | "" | string | string[];

type Filters = {
  order: Order;
  rating: number;
};

export function Home({ items }: HomeProps) {
  const purpleColor = useColorModeValue("#230F5B  ", "purple.200");
  const { clearCart } = useCart();

  const [products, setProducts] = useState<CardItemProps[]>(items);
  const [filteredProducts, setFilteredProducts] = useState<CardItemProps[]>();

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Filters>({
    order: "",
    rating: 0
  });

  const [currentPage, setCurrentPage] = useState<number>(0);
  const pages = filteredProducts
    ? Math.ceil(filteredProducts.length / PER_PAGE)
    : Math.ceil(products.length / PER_PAGE);
  const startIndex = currentPage * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;

  const currentProducts = filteredProducts
    ? filteredProducts.slice(startIndex, endIndex)
    : products.slice(startIndex, endIndex);

  const searchProducts = useCallback(
    async (searchInput: string) => {
      setSearchTerm(searchInput);
      const filteredData = products.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilteredProducts(filteredData);
      setCurrentPage(0);
    },
    [products]
  );

  const filterRatingProducts = useCallback(
    async (rating: number) => {
      setFilters({
        order: "",
        rating
      });

      const filteredData = products.filter((item) => item.rating.rate < rating);

      setFilteredProducts(filteredData);
      setCurrentPage(0);
    },
    [products]
  );

  const filterSortProducts = useCallback(
    async (sort: Order) => {
      setFilters({
        order: sort,
        rating: 0
      });

      const filteredData =
        sort === "asc"
          ? products.sort((a, b) => a.price - b.price)
          : products.sort((a, b) => b.price - a.price);

      setFilteredProducts(filteredData);
      setCurrentPage(0);
    },
    [products]
  );

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage + 1 < pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const cleanAllFilters = useCallback(() => {
    setSearchTerm("");
    setFilters({
      order: "",
      rating: 0
    });
    setCurrentPage(0);

    console.log("products", products);
    setFilteredProducts(products);
  }, [products]);

  return (
    <Layout>
      <Box
        display="grid"
        gridTemplateColumns="3fr 1fr"
        w="100%"
        p="10"
        gridColumnGap="4rem"
      >
        <Flex w="100%" flexDirection="column">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100%"
            p="8"
          >
            <Box w="50%">
              <InputGroup mb="3">
                <Input
                  placeholder="Search"
                  value={searchTerm}
                  borderColor={purpleColor}
                  onChange={(e) => searchProducts(e.target.value)}
                />
                <InputRightElement>
                  <SearchIcon color="gray.400" />
                </InputRightElement>
              </InputGroup>
              <Box
                display="grid"
                gridTemplateColumns="2fr 1.5fr"
                gridGap="2rem"
              >
                <Select
                  placeholder="Filter by rating"
                  onChange={(value) => filterRatingProducts(Number(value))}
                  options={ratingOptions}
                  value={String(filters.rating)}
                />
                <Select
                  placeholder="Sort by"
                  onChange={(value) => filterSortProducts(value.toString())}
                  options={orderOptions}
                  value={filters.order}
                />
              </Box>
              <Text
                cursor="pointer"
                textAlign="center"
                mt="1"
                onClick={cleanAllFilters}
              >
                Clean all filters
              </Text>
            </Box>
          </Box>

          {currentProducts?.length > 0 ? (
            <>
              <Box
                w="100%"
                display="flex"
                gridGap="3rem"
                flex="1 1 auto"
                justifyContent={
                  currentProducts.length === 3 ? "space-between" : "flex-start"
                }
              >
                {currentProducts.map((product) => (
                  <CardItem key={product.id} {...product} />
                ))}
              </Box>

              <Box
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
                mb="20"
              >
                <Flex alignItems="center" gridGap="1rem">
                  <Button
                    color={purpleColor}
                    variant="link"
                    fontSize="sm"
                    onClick={handlePreviousPage}
                  >
                    Previous page
                  </Button>
                  <Button
                    color={purpleColor}
                    variant="link"
                    fontSize="sm"
                    onClick={handleNextPage}
                  >
                    Next page
                  </Button>
                </Flex>
              </Box>
            </>
          ) : (
            <Text textAlign="center">No items found.</Text>
          )}
        </Flex>

        <Box
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Cart />
          <Button
            color={purpleColor}
            variant="link"
            fontSize="sm"
            onClick={clearCart}
            mt={4}
            w="100%"
            textAlign="center"
          >
            Clean cart
          </Button>
        </Box>
      </Box>

      <Footer />
    </Layout>
  );
}
