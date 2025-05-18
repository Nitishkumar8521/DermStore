import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App.jsx";
import { useToast } from "@chakra-ui/react";
import { assets } from "../assets/assets.js";
import {
  Box,
  Text,
  Image,
  Stack,
  Grid,
  Select,
  Heading,
  Divider,
} from "@chakra-ui/react";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const toast = useToast();

  const fetchAllOrders = async () => {
    if (!token) {
      return;
    }

    try {
      //console.log("Nk");
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
        console.log(response.data.orders.reverse(), "setOrders");
      } else {
        toast({ status: "error", description: response.data.message });
      }
    } catch (error) {
      toast({ status: "error", description: error.message });
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      toast({ status: "error", description: error.message });
    }
  };

  useEffect(() => {
    fetchAllOrders();
    //console.log("check")
  }, [token]);

  return (
    <Box>
      <Heading size="md" mb={4}>
        Order Page
      </Heading>
      <Stack spacing={4}>
        {orders.map((order, index) => (
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "0.5fr 2fr 1fr",
              lg: "0.5fr 2fr 1fr 1fr 1fr",
            }}
            gap={4}
            borderWidth="1px"
            borderRadius="lg"
            p={{ base: 3, md: 6 }}
            key={index}
            fontSize={{ base: "xs", sm: "sm" }}
            alignItems="start"
          >
            <Image boxSize="48px" src={assets.parcel_icon} alt="parcel" />

            <Box>
              <Box>
                {order.items.map((item, i) => (
                  <Text key={i} py={0.5}>
                    {item.name} X {item.quantity}{" "}
                    <Text as="span">{item.size}</Text>
                    {i !== order.items.length - 1 && ","}
                  </Text>
                ))}
              </Box>
              <Text mt={3} mb={2} fontWeight="semibold">
                {order.address.firstName} {order.address.lastName}
              </Text>
              <Box>
                <Text>{order.address.street},</Text>
                <Text>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </Text>
              </Box>
              <Text>{order.address.phone}</Text>
            </Box>

            <Stack spacing={1}>
              <Text fontSize="sm">Items: {order.items.length}</Text>
              <Text>Method: {order.paymentMethod}</Text>
              <Text>Payment: {order.payment ? "Done" : "Pending"}</Text>
              <Text>Date: {new Date(order.date).toLocaleDateString()}</Text>
            </Stack>

            <Text fontSize="sm">
              {currency}
              {order.amount}
            </Text>

            <Select
              value={order.status}
              onChange={(event) => statusHandler(event, order._id)}
              fontWeight="semibold"
              size="sm"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </Select>
          </Grid>
        ))}
      </Stack>
    </Box>
  );
};

export default Orders;
