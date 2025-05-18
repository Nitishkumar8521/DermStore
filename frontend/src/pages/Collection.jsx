import { useContext, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Checkbox,
  Select,
  Grid,
  Collapse,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const { isOpen: showFilter, onToggle: toggleFilter } = useDisclosure();
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (value) => {
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };


  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <Flex
      direction={["column", "row"]}
      gap={[1, 10]}
      pt={10}
      borderTop="1px"
      borderColor="gray.200"
    >
      {/* Filter Options */}
      <Box minW={40}>
        <Flex
          my={2}
          fontSize="xl"
          alignItems="center"
          gap={2}
          cursor="pointer"
          onClick={toggleFilter}
        >
          FILTERS
          <Image
            src={assets.dropdown_icon}
            h={3}
            display={["block", "none"]}
            transform={showFilter ? "rotate(90deg)" : "none"}
            transition="transform 0.2s"
          />
        </Flex>

        {/* Category Filter */}
        <Collapse in={showFilter || ["sm", "md", "lg", "xl"].includes}>
          <Box border="1px" borderColor="gray.300" pl={5} py={3} mt={6}>
            <Text mb={3} fontSize="sm" fontWeight="medium">
              CATEGORIES
            </Text>
            <Flex
              direction="column"
              gap={2}
              fontSize="sm"
              fontWeight="light"
              color="gray.700"
            >
              {["Eye", "Shampoo", "Face"].map((cat) => (
                <Checkbox
                  key={cat}
                  value={cat}
                  isChecked={category.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                >
                  {cat}
                </Checkbox>
              ))}
            </Flex>
          </Box>
        </Collapse>
      </Box>

      {/* Right Side */}
      <Box flex={1}>
        <Flex direction={["column", "row"]} justify="space-between" mb={4}>
          <Title text1={"ALL"} text2={"COLLECTION"} />

          {/* Product Sort */}
          <Select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            border="2px"
            borderColor="gray.300"
            fontSize={["sm", "md"]}
            px={2}
            w={["150px", "200px"]}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </Select>
        </Flex>

        {/* Map Products */}
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={4}
          gapy={6}
        >
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Collection;
