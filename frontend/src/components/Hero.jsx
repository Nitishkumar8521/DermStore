import React from "react";
import { Box, Heading, Flex, Text, Image } from "@chakra-ui/react";
import { assets } from "../assets/assets";
import { useState } from "react";

const Hero = () => {
  let [index, setIndex] = useState(0);
  const arr = [
    {
      url: `${assets.heading1}`,
      heading: "20%off",
      description: "Beat the heat during the Summer Sale with code: SUN",
    },
    {
      url: `${assets.heading2}`,
      heading: "Honor Your Skin",
      description:
        "The best brands in beauty, skin and hair care, expert advice and personalized recommendations.",
    },
  ];
  
  const id = setTimeout(() => {
    if (index == 1) {
      setIndex(() => 0);
    } else {
      setIndex((index) => index + 1);
    }
    return clearInterval(id);
  }, 3000);
  return (
    <Flex
      direction={["column", "row"]}
      border="1px"
      borderColor="gray.400"
      bg={arr[index].url}
    >
      {/* left Image */}
      <Image
        src={arr[index].url}
        w={["full", "50%"]}
        h="350px"
        alt="Latest arrivals"
      />

      {/* Right Content */}
      <Flex w={["full", "50%"]} align="center" justify="center" py={[10, 0]}>
        <Box color="#414141">
          <Flex align="center" direction="column" gap={2}>
            <Text
              fontSize={["3xl", null, "5xl"]}
              py={[0, 3]}
              lineHeight="relaxed"
            >
              {arr[index].heading}
            </Text>
            <Text fontWeight="medium" fontSize={["sm", "md"]}>
              {arr[index].description}
            </Text>
            <Text
              p="10px"
              fontWeight="semibold"
              fontSize={["sm", "md"]}
              bg="black"
              color="white"
            >
              SHOP NOW
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
