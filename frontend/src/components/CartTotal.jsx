import React, { useContext } from 'react'
import { Box, Flex, Text, Divider } from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

  return (
    <Box w="full">
      <Box mb={4}>
        <Title text1={'CART'} text2={'TOTALS'} />
      </Box>

      <Flex direction="column" gap={2} mt={2} fontSize="sm">
        <Flex justify="space-between">
          <Text>Subtotal</Text>
          <Text>{currency} {getCartAmount()}.00</Text>
        </Flex>
        <Divider />
        <Flex justify="space-between">
          <Text>Shipping Fee</Text>
          <Text>{currency}{delivery_fee}.00</Text>
        </Flex>
        <Divider />
        <Flex justify="space-between">
          <Text>Total</Text>
          <Text>
            {currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default CartTotal