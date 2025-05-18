import { Box, Text, Flex } from '@chakra-ui/react'

const Title = ({ text1, text2 }) => {
  return (
    <Flex 
      display="inline-flex" 
      gap={2} 
      alignItems="center" 
    >
      <Text fontSize={30} color="gray.500">
        {text1}{' '}
        <Text as="span" color="gray.700" fontWeight="medium">
          {text2}
        </Text>
      </Text>
      <Box 
        w={["32px", "48px"]}  
        h={["1px", "2px"]}    
        bg="gray.700" 
      />
    </Flex>
  )
}

export default Title