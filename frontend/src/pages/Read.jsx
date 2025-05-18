import {
  Box,
  Center,
  Text,
  Heading,
  VStack,
  Image,
  UnorderedList,
  GridItem,
  Link,
  Button,
  ListItem,
} from "@chakra-ui/react";

const Read = () => {
  return (
    <VStack>
      <Center width="80%">
        <Heading fontFamily="initial">
          The 16 Best Tinted Sunscreens for UV Protection With Natural Coverage
          for Flawless-Looking Skin
        </Heading>
      </Center>
      <Box w="80%" margin="auto" p="50px">
        <Image src="https://blogscdn.thehut.net/app/uploads/sites/1160/2025/04/BLOG-_-What-to-Buy-_-Best-Tinted-Sunscreen_1743791269.png" />
      </Box>
      <Text fontSize="xl" margin="auto" w="80%">
        Wearing sunscreen is a non-negotiable skin care option, but what if you
        want to double down on your sun protection while adding some coverage,
        too? If layering sunscreen under makeup makes for an extra step on busy
        days, try tinted sunscreen. This super popular skincare-meets-makeup
        product acts like a skin tint (some give more coverage than others) with
        the full protection of a standard sunscreen, making this single product
        all you need. With their weightless, natural finish, below, our roundup
        of the best tinted sunscreens allows you to reap the benefits of SPF
        while forgoing heavy face makeup—a win-win!
      </Text>
      <Text fontSize="4xl" margin="auto" w="80%">
        What is Tinted Sunscreen?
      </Text>
      <Text fontSize="xl" margin="auto" w="80%">
        Tinted sunscreens are pigmented SPFs that offer the benefit of
        lightweight makeup to provide coverage to the skin. Unlike other types
        of sunscreens that can leave behind a white cast, the colored pigment in
        tinted sunscreens allows the formula to seamlessly blend in with the
        skin’s tone for a natural finish. Heavier than a tinted moisturizer,
        tinted sunscreens offer the added benefit of full sun protection. That
        means that when wearing one, there’s zero compromise of sun protection.
        While some versions offer the added benefit of hydration or incorporate
        anti-aging ingredients, their finishes also range from dewy to more
        matte.
      </Text>
      <Text fontSize="4xl" margin="auto" w="80%">
        What to Look for in Tinted Sunscreens?
      </Text>
      <Text fontSize="xl" margin="auto" w="80%">
        Choosing the right tinted sunscreen for you is a personal choice, but
        there are a few important factors to consider so you can rest assured
        that the product provides ample protection.
      </Text>
      <UnorderedList w="70%" margin="auto">
        <ListItem fontSize="xl">
          <span style={{ fontWeight: "bold" }}>SPF:</span> Tinted sunscreens use
          the same SPF levels as traditional sunscreens, so like them, make sure
          yours has at least SPF 30 to block out most UV rays.
        </ListItem>
        <ListItem fontSize="xl">
          <span style={{ fontWeight: "bold" }}>Skin Type:</span> Since some
          sunscreens may not be a good fit for some skin types, it’s important
          to use one that works for your skin—not against it. For example, if
          your skin is oily or acne-prone, look for a non-comedogenic formula,
          and if your skin is dry, layer on one that contains hyaluronic acid or
          glycerin for a moisturizing effect.
        </ListItem>
        <ListItem fontSize="xl">
          <span style={{ fontWeight: "bold" }}>
            A Skin-Tone-Flattering Shade:
          </span>
          Some tinted sunscreens are universal in color, while others, like
          makeup, come in a variety of different shades. Swatch a few shades to
          find one that flatters your skin tone for a natural look.
        </ListItem>
        <ListItem fontSize="xl">
          <span style={{ fontWeight: "bold" }}>The Coverage Factors:</span>
          The Coverage Factors: Like foundation and concealer, tinted sunscreen
          provides coverage ranging from sheer to full.
        </ListItem>
      </UnorderedList>
      <Text fontSize="4xl" margin="auto" w="80%">
        Shop the Best Tinted Sunscreens
      </Text>
      <Text fontSize="2xl" margin="auto" w="80%">
        1. Supergoop Glowscreen SPF 40
      </Text>
      <GridItem >
        <Link to="/product/6826e0a9d6e10495940fcca1">
          <Box boxShadow='base'
            position="relative"
            overflow="hidden"
            borderRadius="md"
            _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
            transition="all 0.3s ease"
          >
            <Box
              w="100%"
              aspectRatio="1 / 1" // ensures perfect square box
              position="relative"
            >
              <Image
                src="https://res.cloudinary.com/dawxefegz/image/upload/v1747378344/hg2qqauijshckdbzm2zi.jpg"
                alt="xyz"
                objectFit="cover"
                w="100%"
                h="100%"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.1)" }}
              />
            </Box>
          </Box>

          <Text pt={3} pb={1} fontSize="sm" color="gray.700" noOfLines={1}>
            demo
          </Text>

          <Text fontSize="sm" fontWeight="medium" color="gray.800">
            $34
          </Text>

          <Center>
            <Button colorScheme="teal" variant="outline">
              BUY NOW
            </Button>
          </Center>
        </Link>
      </GridItem>
    </VStack>
  );
};

export default Read;
