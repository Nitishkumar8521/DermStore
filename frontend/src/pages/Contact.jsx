// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 border-t'>
//         <Title text1={'CONTACT'} text2={'US'} />
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//           <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
//           <p className='text-gray-500'>Tel:(415) 555-0132 <br />Email: admin@forever.com</p>
//           <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
//           <p className='text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
//         </div>
//       </div>

//       <NewsletterBox />
//     </div>
//   )
// }

// export default Contact

import React from 'react'
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <Box>
      {/* Header Section */}
      <Box textAlign="center" pt={10} borderTop="1px" borderColor="gray.200">
        <Title text1={'CONTACT'} text2={'US'} />
      </Box>

      {/* Contact Content Section */}
      <Flex
        my={10}
        direction={['column', 'row']}
        justify="center"
        gap={10}
        mb={28}
      >
        <Image 
          src={assets.contact_img} 
          alt="Contact us" 
          w="full" 
          maxW={['100%', '480px']}
        />

        <Flex 
          direction="column" 
          justify="center" 
          align="flex-start" 
          gap={6}
        >
          <Text fontSize="xl" fontWeight="semibold" color="gray.600">
            Our Store
          </Text>
          <Text color="gray.500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </Text>
          <Text color="gray.500">
            Tel:(415) 555-0132 <br />Email: admin@forever.com
          </Text>
          <Text fontSize="xl" fontWeight="semibold" color="gray.600">
            Careers at Forever
          </Text>
          <Text color="gray.500">
            Learn more about our teams and job openings.
          </Text>
          <Button
            variant="outline"
            border="1px"
            borderColor="black"
            px={8}
            py={4}
            fontSize="sm"
            _hover={{
              bg: 'black',
              color: 'white',
            }}
            transition="all 0.5s"
          >
            Explore jobs
          </Button>
        </Flex>
      </Flex>

      <NewsletterBox />
    </Box>
  )
}

export default Contact