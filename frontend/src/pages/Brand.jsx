import React, { useContext, useEffect, useState } from 'react'
import { Box, Grid, Text, Center } from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useParams } from 'react-router-dom'

const Brand = () => {
    const { brandName } = useParams()
    const { products } = useContext(ShopContext)
    //console.log(brandName,"brandName")

    const [Brand, setBrand] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.brand.toLowerCase()==brandName.toLocaleLowerCase()))
        setBrand(bestProduct.slice(0,5))
    },[products,brandName])
    //console.log(products,"Brand")
  return (
    <Box my={10}>
      <Center py={8} flexDirection="column" textAlign="center">
        <Title text1={'BEST'} text2={`Brand`}/>
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
          "repeat(2, 1fr)",  
          "repeat(3, 1fr)",  
          "repeat(4, 1fr)",  
          "repeat(5, 1fr)"   
        ]}
        gap={4}
        gapy={6}
      >
        {
          Brand.map((item, index) => (
            <ProductItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              image={item.image} 
              price={item.price} 
            />
          ))
        }
      </Grid>
    </Box>
  )
}

export default Brand