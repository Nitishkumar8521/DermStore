import React, { useContext, useEffect, useState } from 'react'
import { Box, Grid, Center } from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'

const RelatedProducts = ({ category, brand }) => {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = [...products]
      productCopy = productCopy.filter((item) => category === item.category)
      productCopy = productCopy.filter((item) => brand === item.brand)
      setRelated(productCopy.slice(0, 5))
    }
  }, [products, category, brand])

  return (
    <Box my={24}>
      <Center py={2}>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </Center>

      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(5, 1fr)'
        }}
        gap={4}
        gapy={6}
      >
        {related.map((item) => (
          <ProductItem 
            key={item._id} 
            id={item._id} 
            name={item.name} 
            price={item.price} 
            image={item.image}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default RelatedProducts