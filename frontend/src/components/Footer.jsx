import React from 'react'
import { Box, Flex, Grid, Text, Image, Divider, List, ListItem } from '@chakra-ui/react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <Box>
      <Grid
        templateColumns={{ base: '1fr', sm: '3fr 1fr 1fr' }}
        gap={14}
        my={10}
        mt={40}
        fontSize="sm"
      >
        <Box>
          <Image src={assets.company_logo} mb={5} w={32} alt="Company Logo" />
          <Text color="gray.600" w={{ base: 'full', md: '66%' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="medium" mb={5}>
            COMPANY
          </Text>
          <List spacing={1} color="gray.600">
            <ListItem>Home</ListItem>
            <ListItem>About us</ListItem>
            <ListItem>Delivery</ListItem>
            <ListItem>Privacy policy</ListItem>
          </List>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="medium" mb={5}>
            GET IN TOUCH
          </Text>
          <List spacing={1} color="gray.600">
            <ListItem>+1-212-584-4751</ListItem>
            <ListItem>contact@foreveryou.com</ListItem>
          </List>
        </Box>
      </Grid>

      <Box>
        <Divider />
        <Text py={5} fontSize="sm" textAlign="center">
          Copyright 2024@forever.com - All Right Reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
