import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import FadeIn from "../Buttons/FadeIn";

const BannerCard = ({ title, detels, bgcolor, url, btnText }) => {
  return (
    <Flex
      bg={bgcolor}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      my={5}
      minH="40vh"
      rounded="2xl"
      overflow="hidden"
    >
      <VStack padding={3} alignItems="flex-start">
        <Heading as="h4" size="lg" color="#592E13">
          {title}
        </Heading>
        <Text>{detels}</Text>
        <FadeIn text={btnText} />
      </VStack>

      <Box>
        <Image h="full" src={url} alt="banner img" />
      </Box>
    </Flex>
  );
};

export default BannerCard;
