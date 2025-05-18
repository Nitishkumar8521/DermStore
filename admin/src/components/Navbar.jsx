import React from 'react';
import { assets } from '../assets/assets.js';
import { Box, Flex, Image, Button } from '@chakra-ui/react';

const Navbar = ({ setToken }) => {
  return (
    <Flex 
      as="nav"
      py={2}
      px={{ base: 4, md: 8 }}
      justify="space-between"
      align="center"
      bg="white"
      shadow="sm"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Image 
        src={assets.logo}
        alt="Logo"
        w={{ base: '80px', md: '10%' }}
        maxW="120px"
      />
      <Button 
        onClick={() => setToken('')}
        colorScheme="gray"
        size={{ base: 'sm', sm: 'md' }}
        rounded="full"
      >
        Logout
      </Button>
    </Flex>
  );
};

export default Navbar;
