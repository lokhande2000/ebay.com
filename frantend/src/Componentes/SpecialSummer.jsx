import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import FadeIn from "./Buttons/FadeIn";

const SpecialSummer = () => {
  return (
    <Flex
      w="full"
      justifyContent="space-between "
      p={5}
      mx={8}
      rounded="xl"
      className="bg-neutral_1"
    >
      <Box cursor="pointer">
        <Heading size="md">Feel special this summer with 15% off*</Heading>
        <Text>
          Save on luxury jewelry, watches and handbags for you.|*Min. spend
          $300. Max. discount $100
        </Text>
      </Box>
      <Box>
        <FadeIn text="Code: LUXUS15" />
      </Box>
    </Flex>
  );
};

export default SpecialSummer;
