import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Flex,
  useToast
} from '@chakra-ui/react';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/login`, {
        email,
        password
      });

      if (response.data.success) {
        setToken(response.data.token);
        toast({
          title: 'Login Successful!',
          status: 'success',
          duration: 3000,
          isClosable: true
        });
      } else {
        toast({
          title: 'Login Failed',
          description: response.data.message,
          status: 'error',
          duration: 3000,
          isClosable: true
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box bg="white" p={8} rounded="lg" shadow="md" w="full" maxW="md">
        <Heading mb={6} textAlign="center" size="lg">
          Admin Panel
        </Heading>
        <form onSubmit={onSubmitHandler}>
          <FormControl mb={4} isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit" width="full" mt={2}>
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;

