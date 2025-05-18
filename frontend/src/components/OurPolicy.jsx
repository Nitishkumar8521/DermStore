import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <Flex
      direction={['column', 'row']}
      justify="space-around"
      gap={[12, 2]}
      textAlign="center"
      py={70}
      fontSize={['xs', 'sm', 'md']}
      color="gray.700"
    >
      <Box>
        <Image src={assets.exchange_icon} alt="" w={10} m="auto" mb={30} />
        <Text fontWeight="bold">Easy Exchange Policy</Text>
        <Text color="gray.400">We offer hassle free exchange policy</Text>
      </Box>

      <Box>
        <Image src={assets.quality_icon} alt="" w={10} m="auto" mb={30} />
        <Text fontWeight="bold">7 Days Return Policy</Text>
        <Text color="gray.400">We provide 7 days free return policy</Text>
      </Box>

      <Box>
        <Image src={assets.support_img} alt="" w={10} m="auto" mb={30} />
        <Text fontWeight="bold">Best customer support</Text>
        <Text color="gray.400">We provide 24/7 customer support</Text>
      </Box>
    </Flex>
  )
}

export default OurPolicy
