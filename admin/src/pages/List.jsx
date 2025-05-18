import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useToast
} from '@chakra-ui/react'

const List = ({ token }) => {
  const [list, setList] = useState([])
  const chakraToast = useToast()

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products)
      } else {
        chakraToast({ status: 'error', description: response.data.message })
      }
    } catch (error) {
      console.log(error)
      chakraToast({ status: 'error', description: error.message })
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      )
      if (response.data.message) {
        chakraToast({ status: 'success', description: response.data.message })
        await fetchList()
      } else {
        chakraToast({ status: 'error', description: response.data.message })
      }
    } catch (error) {
      console.log(error)
      chakraToast({ status: 'error', description: error.message })
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <Box>
      <Heading size="md" mb={4}>All Products List</Heading>

      <Flex
        display={{ base: 'none', md: 'grid' }}
        gridTemplateColumns="1fr 3fr 1fr 1fr 1fr"
        alignItems="center"
        p={2}
        borderWidth={1}
        bg="gray.100"
        fontSize="sm"
        fontWeight="bold"
      >
        <Text>Image</Text>
        <Text>Name</Text>
        <Text>Category</Text>
        <Text>Price</Text>
        <Text textAlign="center">Action</Text>
      </Flex>

      {list.map((item, index) => (
        <Grid
          key={index}
          templateColumns={{ base: '1fr 3fr 1fr', md: '1fr 3fr 1fr 1fr 1fr' }}
          alignItems="center"
          gap={2}
          p={2}
          borderWidth={1}
          fontSize="sm"
        >
          <GridItem>
            <Image src={item.image[0]} boxSize="48px" objectFit="cover" alt={item.name} />
          </GridItem>

          <GridItem>
            <Text>{item.name}</Text>
          </GridItem>

          <GridItem>
            <Text>{item.category}</Text>
          </GridItem>

          <GridItem display={{ base: 'none', md: 'block' }}>
            <Text>{currency}{item.price}</Text>
          </GridItem>

          <GridItem>
            <Button
              size="sm"
              colorScheme="red"
              variant="ghost"
              onClick={() => removeProduct(item._id)}
            >
              X
            </Button>
          </GridItem>
        </Grid>
      ))}
    </Box>
  )
}

export default List
