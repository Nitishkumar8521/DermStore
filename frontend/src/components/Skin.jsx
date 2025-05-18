import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Text, Center } from "@chakra-ui/react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const Skin = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <Box my="2.5rem">
      {" "}
      {/* my-10 equivalent */}
      <Center py={8} flexDirection="column" textAlign="center">
        <Title text1={'Skin Care &'} text2={' Beauty Guides'} />
        <Text 
          w="75%"
          mx="auto"
          fontSize={["xs", "sm", "md"]}
          color="gray.600"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem lpsum has been the.
        </Text>
      </Center>
      
      <Grid
        templateColumns={[
          "repeat(2, 1fr)", // base
          "repeat(3, 1fr)", // sm
          "repeat(4, 1fr)", // md
          "repeat(5, 1fr)", // lg
        ]}
        gap="1rem"
        gapy="1.5rem"
      >
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            description='Read'
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Skin;
