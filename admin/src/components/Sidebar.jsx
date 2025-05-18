import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box 
      w={{ base: '30%', md: '18%' }} 
      minH="100vh" 
      borderRight="2px solid" 
      borderColor="gray.200" 
      py={6}
      px={4}
    >
      <VStack spacing={4} align="flex-start">
        <NavLink to="/add">
          {({ isActive }) => (
            <Flex 
              align="center" 
              gap={3} 
              px={3} 
              py={2} 
              rounded="lg" 
              border="1px solid"
              borderRight="0"
              borderColor={isActive ? 'gray.500' : 'gray.300'}
              bg={isActive ? 'gray.50' : 'transparent'}
            >
              <Image boxSize="20px" src={assets.add_icon} alt="Add" />
              <Text display={{ base: 'none', md: 'block' }}>Add Items</Text>
            </Flex>
          )}
        </NavLink>

        <NavLink to="/list">
          {({ isActive }) => (
            <Flex 
              align="center" 
              gap={3} 
              px={3} 
              py={2} 
              rounded="lg" 
              border="1px solid"
              borderRight="0"
              borderColor={isActive ? 'gray.500' : 'gray.300'}
              bg={isActive ? 'gray.50' : 'transparent'}
            >
              <Image boxSize="20px" src={assets.order_icon} alt="List" />
              <Text display={{ base: 'none', md: 'block' }}>List Items</Text>
            </Flex>
          )}
        </NavLink>

        <NavLink to="/orders">
          {({ isActive }) => (
            <Flex 
              align="center" 
              gap={3} 
              px={3} 
              py={2} 
              rounded="lg" 
              border="1px solid"
              borderRight="0"
              borderColor={isActive ? 'gray.500' : 'gray.300'}
              bg={isActive ? 'gray.50' : 'transparent'}
            >
              <Image boxSize="20px" src={assets.order_icon} alt="Orders" />
              <Text display={{ base: 'none', md: 'block' }}>Orders</Text>
            </Flex>
          )}
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;

