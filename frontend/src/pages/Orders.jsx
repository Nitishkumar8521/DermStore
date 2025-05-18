import React, { useContext, useEffect, useState } from 'react'
import { 
  Box, 
  Flex, 
  Text, 
  Image, 
  Button, 
  useToast,
  Divider
} from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])
  const toast = useToast()

  const loadOrderData = async () => {
    try {
      if(!token) return null

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      )
      
      if(response.data.success) {
        let allOrdersItem = []
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date
            })
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <Box borderTop="1px" borderColor="gray.200" pt={16}>
      <Box mb={6}>
        <Title text1={'MY'} text2={'ORDERS'} />
      </Box>

      <Box>
        {orderData.map((item, index) => (
          <Flex
            key={index}
            py={4}
            borderTop="1px"
            borderBottom="1px"
            borderColor="gray.200"
            color="gray.700"
            direction={['column', 'row']}
            align={['flex-start', 'center']}
            justify="space-between"
            gap={4}
          >
            <Flex align="flex-start" gap={6} fontSize="sm">
              <Image 
                src={item.image[0]} 
                alt={item.name}
                w={['50px', '80px']}
              />
              <Box>
                <Text fontSize={['sm', 'md']} fontWeight="medium">
                  {item.name}
                </Text>
                <Flex align="center" gap={3} mt={2} fontSize="md" color="gray.700">
                  <Text fontSize="lg">{currency}{item.price}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                  {/* <Text>Size: {item.size}</Text> */}
                </Flex>
                <Text mt={2}>
                  Date: <Text as="span" color="gray.400">
                    {new Date(item.date).toDateString()}
                  </Text>
                </Text>
                <Text mt={2}>
                  Payment: <Text as="span" color="gray.400">
                    {item.paymentMethod}
                  </Text>
                </Text>
              </Box>
            </Flex>

            <Flex 
              w={['full', '50%']} 
              justify="space-between" 
              mt={[4, 0]}
              align="center"
            >
              <Flex align="center" gap={2}>
                <Box 
                  minW={2} 
                  h={2} 
                  borderRadius="full" 
                  bg={item.status === 'Delivered' ? 'green.500' : 'yellow.500'}
                />
                <Text fontSize={['sm', 'md']}>{item.status}</Text>
              </Flex>
              <Button 
                onClick={loadOrderData}
                variant="outline"
                px={4}
                py={2}
                fontSize="sm"
                fontWeight="medium"
                borderRadius="sm"
                _hover={{ bg: 'gray.100' }}
              >
                Track Order
              </Button>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default Orders