import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { GridItem, Box, Image, Text, Button, Center } from "@chakra-ui/react";

const ProductItem = ({ id, image, name, price, description }) => {
  const { currency } = useContext(ShopContext);

  return (
    <GridItem>
      <Link to={description !== "Read" ? `/product/${id}` : "/read"}>
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="md"
          _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
          transition="all 0.3s ease"
        >
          <Box
            w="100%"
            aspectRatio="1 / 1" // ensures perfect square box
            position="relative"
          >
            <Image
              src={image[0]}
              alt={name}
              objectFit="cover"
              w="100%"
              h="100%"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
        </Box>

        <Text pt={3} pb={1} fontSize="sm" color="gray.700" noOfLines={1}>
          {name}
        </Text>

        <Text fontSize="sm" fontWeight="medium" color="gray.800">
          {currency}
          {price}
        </Text>

        {description && (
          <Center>
            <Button colorScheme="teal" variant="outline">
              {description}
            </Button>
          </Center>
        )}
      </Link>
    </GridItem>
  );
};

export default ProductItem;
