import React, { useContext, useEffect, useState } from 'react'
import { 
  Box, 
  Flex, 
  Input, 
  Image
} from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setVisible(location.pathname.includes('collection'))
  }, [location])

  if (!showSearch || !visible) return null

  return (
    <Box borderTop="1px" borderBottom="1px" bg="gray.50" textAlign="center">
      <Flex
        align="center"
        justify="center"
        border="1px"
        borderColor="gray.400"
        px={5}
        py={2}
        my={3}
        mx={3}
        borderRadius="full"
        w={['75%', '50%']}
        display="inline-flex"
      >
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          flex={1}
          outline="none"
          bg="inherit"
          fontSize="sm"
          type="text"
          placeholder="Search"
          border="none"
          _focus={{ boxShadow: 'none' }}
        />
        <Image src={assets.search_icon} w={4} alt="Search" />
      </Flex>
      <Image
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        w={3}
        cursor="pointer"
        alt="Close search"
        display="inline"
        ml={2}
      />
    </Box>
  )
}

export default SearchBar