import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <Box>

      {/* Header Section */}
      <Box textAlign="center" pt={8} borderTop="1px" borderColor="gray.200">
        <Title text1={'ABOUT'} text2={'US'} />
      </Box>

      {/* Main Content Section */}
      <Flex 
        my={10} 
        direction={['column', 'row']} 
        gap={16}
        alignItems="center"
      >
        <Image 
          src={assets.about_img} 
          alt="About us" 
          w="full" 
          maxW={['100%', '450px']}
        />
        <Flex 
          direction="column" 
          justify="center" 
          gap={6} 
          w={['100%', '50%']} 
          color="gray.600"
        >
          <Text>orpgjsjgjrpoj pjepor ejkslgjpsrj eijsljf sperjsj pspjgsp o d kdjgsj</Text>
          <Text>moire oeugss ougspspugs psugpssp spugpsup spospus psops spupsu os sppsus</Text>
          <Text fontWeight="bold">Our Mission</Text>
          <Text>moire oeugss ougspspugs psugpssp spugpsup spospus psops spupsu os sppsus</Text>
        </Flex>
      </Flex>

      {/* Why Choose Us Header */}
      <Box py={4}>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </Box>

      {/* Features Section */}
      <Flex 
        direction={['column', 'row']} 
        fontSize="sm" 
        mb={10}
      >
        {[
          {
            title: "Quality Assurance:",
            content: "Moire oeugss ougspspugs psugpssp spugpsup spospus psops spupsu os sppsus"
          },
          {
            title: "Convenience:",
            content: "Koire oeugss ougspspugs psugpssp spugpsup spospus psops spupsu os sppsus"
          },
          {
            title: "Exceptional Customer Service:",
            content: "Poire oeugss ougspspugs psugpssp spugpsup spospus psops spupsu os sppsus"
          }
        ].map((feature, index) => (
          <Box 
            key={index}
            border="1px" 
            borderColor="gray.200"
            px={[10, 16]} 
            py={[4, 10]} 
            flex={1}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Text fontWeight="bold">{feature.title}</Text>
            <Text color="gray.600">{feature.content}</Text>
          </Box>
        ))}
      </Flex>

      <NewsletterBox />
      
    </Box>
  )
}

export default About