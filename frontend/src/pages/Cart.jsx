// import React, { useContext, useEffect, useState } from "react";
// import { 
//   Box, 
//   Flex, 
//   Text, 
//   Image, 
//   Input, 
//   Button, 
//   Grid, 
//   GridItem 
// } from "@chakra-ui/react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import { assets } from "../assets/assets";
// import CartTotal from "../components/CartTotal";

// const Cart = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } =
//     useContext(ShopContext);

//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             tempData.push({
//               _id: items,
//               size: item,
//               quantity: cartItems[items][item],
//             });
//           }
//         }
//       }
//       setCartData(tempData);
//     }
//   }, [cartItems, products]);

//   return (
//     <Box borderTop="1px" borderColor="gray.200" pt={14}>
//       <Box mb={3}>
//         <Title text1={"YOUR"} text2={"CART"} />
//       </Box>

//       <Box>
//         {cartData.map((item, index) => {
//           const productData = products.find(
//             (product) => product._id === item._id
//           );
//           return (
//             <Grid
//               key={index}
//               py={4}
//               borderTop="1px"
//               borderBottom="1px"
//               borderColor="gray.200"
//               color="gray.700"
//               templateColumns={{
//                 base: "4fr 0.5fr 0.5fr",
//                 sm: "4fr 2fr 0.5fr"
//               }}
//               alignItems="center"
//               gap={4}
//             >
//               <GridItem>
//                 <Flex alignItems="flex-start" gap={6}>
//                   <Image
//                     src={productData.image[0]}
//                     w={{ base: "50px", sm: "80px" }}
//                     alt={productData.name}
//                   />
//                   <Box>
//                     <Text fontSize={{ base: "xs", sm: "lg" }} fontWeight="medium">
//                       {productData.name}
//                     </Text>
//                     <Flex alignItems="center" gap={5} mt={2}>
//                       <Text>
//                         {currency}
//                         {productData.price}
//                       </Text>
//                       <Text 
//                         px={{ base: 1, sm: 2 }}
//                         py={{ sm: 1 }}
//                         border="1px"
//                         bg="gray.50"
//                       >
//                         {item.size}
//                       </Text>
//                     </Flex>
//                   </Box>
//                 </Flex>
//               </GridItem>

//               <GridItem>
//                 <Input
//                   onChange={(e) =>
//                     e.target.value === "" || e.target.value === "0"
//                       ? null
//                       : updateQuantity(
//                           item._id,
//                           item.size,
//                           Number(e.target.value)
//                         )
//                   }
//                   border="1px"
//                   maxW={{ base: "40px", sm: "80px" }}
//                   px={{ base: 1, sm: 2 }}
//                   py={1}
//                   type="number"
//                   min={1}
//                   defaultValue={item.quantity}
//                 />
//               </GridItem>

//               <GridItem mr={{ base: 4, sm: 0 }}>
//                 <Image
//                   onClick={() => updateQuantity(item._id, item.size, 0)}
//                   src={assets.bin_icon}
//                   w={{ base: "16px", sm: "20px" }}
//                   cursor="pointer"
//                   alt="Delete item"
//                 />
//               </GridItem>
//             </Grid>
//           );
//         })}
//       </Box>

//       <Flex justify="flex-end" my={20}>
//         <Box w={{ base: "full", sm: "450px" }}>
//           <CartTotal />
//           <Box w="full" textAlign="end">
//             <Button
//               onClick={() => navigate("/place-order")}
//               bg="black"
//               color="white"
//               fontSize="sm"
//               my={8}
//               px={8}
//               py={3}
//               _hover={{ bg: "gray.800" }}
//             >
//               PROCEED TO CHECKOUT
//             </Button>
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default Cart;

import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Input,
  Button,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          tempData.push({
            _id: itemId,
            quantity: cartItems[itemId]
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <Box borderTop="1px" borderColor="gray.200" pt={14}>
      <Box mb={3}>
        <Title text1={"YOUR"} text2={"CART"} />
      </Box>

      <Box>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <Grid
              key={index}
              py={4}
              borderTop="1px"
              borderBottom="1px"
              borderColor="gray.200"
              color="gray.700"
              templateColumns={{
                base: "4fr 0.5fr 0.5fr",
                sm: "4fr 2fr 0.5fr"
              }}
              alignItems="center"
              gap={4}
            >
              <GridItem>
                <Flex alignItems="flex-start" gap={6}>
                  <Image
                    src={productData?.image[0]}
                    w={{ base: "50px", sm: "80px" }}
                    alt={productData?.name}
                  />
                  <Box>
                    <Text fontSize={{ base: "xs", sm: "lg" }} fontWeight="medium">
                      {productData?.name}
                    </Text>
                    <Text mt={2}>
                      {currency}
                      {productData?.price}
                    </Text>
                  </Box>
                </Flex>
              </GridItem>

              <GridItem>
                <Input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(item._id, Number(e.target.value))
                  }
                  border="1px"
                  maxW={{ base: "40px", sm: "80px" }}
                  px={{ base: 1, sm: 2 }}
                  py={1}
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
              </GridItem>

              <GridItem mr={{ base: 4, sm: 0 }}>
                <Image
                  onClick={() => updateQuantity(item._id, 0)}
                  src={assets.bin_icon}
                  w={{ base: "16px", sm: "20px" }}
                  cursor="pointer"
                  alt="Delete item"
                />
              </GridItem>
            </Grid>
          );
        })}
      </Box>

      <Flex justify="flex-end" my={20}>
        <Box w={{ base: "full", sm: "450px" }}>
          <CartTotal />
          <Box w="full" textAlign="end">
            <Button
              onClick={() => navigate("/place-order")}
              bg="black"
              color="white"
              fontSize="sm"
              my={8}
              px={8}
              py={3}
              _hover={{ bg: "gray.800" }}
            >
              PROCEED TO CHECKOUT
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
