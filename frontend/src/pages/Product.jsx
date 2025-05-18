import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const toast = useToast();

  useEffect(() => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    addToCart(productData._id);
    toast({
      title: "Added to cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return productData ? (
    <Box borderTopWidth={2} pt={10}>
      <Flex gap={12} direction={["column", "row"]}>
        {/* Product Images */}
        <Flex flex={1} direction={["column-reverse", "row"]} gap={3}>
          <Flex
            overflowX={["auto", "hidden"]}
            overflowY={["hidden", "scroll"]}
            justify={["space-between", "normal"]}
            w={["full", "18.7%"]}
            direction={["row", "column"]}
          >
            {productData.image.map((item, index) => (
              <Image
                onClick={() => setImage(item)}
                src={item}
                key={index}
                w={["24%", "full"]}
                mb={[0, 3]}
                flexShrink={0}
                cursor="pointer"
                alt={`Product thumbnail ${index}`}
              />
            ))}
          </Flex>
          <Box w={["full", "80%"]}>
            <Image src={image} w="full" h="auto" alt={productData.name} />
          </Box>
        </Flex>

        {/* Product Info */}
        <Box flex={1}>
          <Text fontWeight="medium" fontSize="2xl" mt={2}>
            {productData.name}
          </Text>
          <Flex align="center" gap={1} mt={2}>
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src={assets.star_icon}
                w="14px"
                alt="Star rating"
              />
            ))}
            <Image src={assets.star_dull_icon} w="14px" alt="Dull star" />
            <Text pl={2}>(122)</Text>
          </Flex>
          <Text mt={5} fontSize="3xl" fontWeight="medium">
            {currency}
            {productData.price}
          </Text>
          <Text mt={5} color="gray.500" w={["full", "80%"]}>
            {productData.description}
          </Text>

          <Button
            onClick={handleAddToCart}
            bg="black"
            color="white"
            px={8}
            py={3}
            fontSize="sm"
            mt={8}
            _active={{ bg: "gray.700" }}
            _hover={{ bg: "gray.800" }}
          >
            ADD TO CART
          </Button>

          <Divider mt={8} w={["full", "80%"]} />

          <Box
            fontSize="sm"
            color="gray.500"
            mt={5}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Text>100% Original product.</Text>
            <Text>Cash on delivery is available on this product.</Text>
            <Text>Easy return and exchange policy within 7 days.</Text>
          </Box>
        </Box>
      </Flex>

      {/* Description and Review Section */}
      <Box mt={20}>
        <Flex>
          <Text
            as="b"
            border="1px"
            borderColor="gray.200"
            px={5}
            py={3}
            fontSize="sm"
          >
            Description
          </Text>
          <Text border="1px" borderColor="gray.200" px={5} py={3} fontSize="sm">
            Reviews (122)
          </Text>
        </Flex>
        <Box
          border="1px"
          borderColor="gray.200"
          px={6}
          py={6}
          fontSize="sm"
          color="gray.500"
        >
          <Text mb={4}>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet.
          </Text>
          <Text>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices and any available
            variations.
          </Text>
        </Box>
      </Box>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        brand={productData.brand} 
      />
    </Box>
  ) : (
    <Box />
  );
};

export default Product;
