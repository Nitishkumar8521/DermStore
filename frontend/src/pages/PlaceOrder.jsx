import React, { useState, useContext } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  Image,
  useToast,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const toast = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      // for(const items in cartItems) {
      //   for(const item in cartItems[items]) {
      //     if(cartItems[items][item] > 0) {
      //       const itemInfo = structuredClone(products.find(product => product._id === items));
      //       if(itemInfo) {
      //         itemInfo.size = item;
      //         itemInfo.quantity = cartItems[items][item];
      //         orderItems.push(itemInfo);
      //       }
      //     }
      //   }
      // }

      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === itemId)
          );
          if (itemInfo) {
            itemInfo.quantity = cartItems[itemId];
            orderItems.push(itemInfo);
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod": {
          const response = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast({
              title: "Error",
              description: response.data.message,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
          break;
        }

        case "stripe": {
          const responseStripe = await axios.post(
            `${backendUrl}/api/order/stripe`,
            orderData,
            { headers: { token } }
          );
          if (responseStripe.data.success) {
            window.location.replace(responseStripe.data.session_url);
          } else {
            toast({
              title: "Error",
              description: responseStripe.data.message,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      as="form"
      onSubmit={onSubmitHandler}
      direction={["column", "row"]}
      justify="space-between"
      gap={4}
      pt={[5, 14]}
      minH="80vh"
      borderTop="1px"
      borderColor="gray.200"
    >
      {/* Left Side - Delivery Information */}
      <Flex direction="column" gap={4} w={["full", "480px"]}>
        <Box my={3}>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </Box>

        <Flex gap={3}>
          <Input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            placeholder="First name"
            borderRadius="md"
            py={1.5}
            px={3.5}
          />
          <Input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            placeholder="Last name"
            borderRadius="md"
            py={1.5}
            px={3.5}
          />
        </Flex>

        <Input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email address"
          borderRadius="md"
          py={1.5}
          px={3.5}
        />

        <Input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          placeholder="Street"
          borderRadius="md"
          py={1.5}
          px={3.5}
        />

        <Flex gap={3}>
          <Input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            placeholder="City"
            borderRadius="md"
            py={1.5}
            px={3.5}
          />
          <Input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            placeholder="State"
            borderRadius="md"
            py={1.5}
            px={3.5}
          />
        </Flex>

        <Flex gap={3}>
          <Input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="number"
            placeholder="Zipcode"
            borderRadius="md"
            py={1.5}
            px={3.5}
          />
          <Input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            placeholder="Country"
            borderRadius="md"
            py={1.5}
            px={3.5}
          />
        </Flex>

        <Input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          type="number"
          placeholder="Mobile number"
          borderRadius="md"
          py={1.5}
          px={3.5}
        />
      </Flex>

      {/* Right Side - Order Summary */}
      <Box mt={[8, 0]}>
        <Box mt={8} minW="320px">
          <CartTotal />
        </Box>

        <Box mt={12}>
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          <RadioGroup onChange={setMethod} value={method} mt={4}>
            <Stack direction={["column", "row"]} spacing={3}>
              <Flex
                align="center"
                gap={3}
                border="1px"
                p={2}
                px={3}
                cursor="pointer"
                borderRadius="md"
                onClick={() => setMethod("stripe")}
              >
                <Radio value="stripe" colorScheme="green" />
                <Image src={assets.stripe_logo} h={5} mx={4} alt="Stripe" />
              </Flex>

              <Flex
                align="center"
                gap={3}
                border="1px"
                p={2}
                px={3}
                cursor="pointer"
                borderRadius="md"
                onClick={() => setMethod("razorpay")}
              >
                <Radio value="razorpay" colorScheme="green" />
                <Image src={assets.razorpay_logo} h={5} mx={4} alt="Razorpay" />
              </Flex>

              <Flex
                align="center"
                gap={3}
                border="1px"
                p={2}
                px={3}
                cursor="pointer"
                borderRadius="md"
                onClick={() => setMethod("cod")}
              >
                <Radio value="cod" colorScheme="green" />
                <Text color="gray.500" fontSize="sm" fontWeight="medium" mx={4}>
                  CASH ON DELIVERY
                </Text>
              </Flex>
            </Stack>
          </RadioGroup>

          <Flex justify="flex-end" mt={8}>
            <Button
              type="submit"
              bg="black"
              color="white"
              px={16}
              py={3}
              fontSize="sm"
              _hover={{ bg: "gray.800" }}
            >
              PLACE ORDER
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default PlaceOrder;
