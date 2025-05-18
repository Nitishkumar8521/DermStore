import React from 'react';
import { Box, Text, Input, Button, Flex } from '@chakra-ui/react';

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Box textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" color="gray.800">
        Subscribe now & get 20% off
      </Text>
      <Text color="gray.400" mt={5}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>

      <Box
        as="form"
        onSubmit={onSubmitHandler}
        w="full"
        maxW="600px"
        mx="auto"
        my={10}
      >
        <Flex
          align="center"
          gap={10}
          border="1px solid gray"
          pl={10}
          w="full"
          direction={{ base: 'column', sm: 'row' }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            flex="1"
            required
            variant="unstyled"
          />
          <Button
            type="submit"
            bg="black"
            color="white"
            fontSize="xs"
            px={10}
            py={4}
            _hover={{ bg: 'gray.700' }}
          >
            SUBSCRIBE
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default NewsletterBox;
