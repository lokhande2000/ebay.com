import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import LazyLoadingCard from "./LazyLoadingCard";

const CustomCarouselCard = ({ product }) => {
  const { id, name, price, url } = product;

  const handleClick = ()=>{
    console.log("click", id)
  }

  return (
    <Box
      onClick={handleClick}
      // w={{base: "50%", md:"40%",lg:"5%"}}
      w="full"
      // h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      // bg={`hsl(${(id * 36) % 360}, 70%, 50%)`}
      transition="height 0.3s linear"
    >
      <VStack w="full" h="50%" bg="#e5e5e5" rounded="xl">
        <Image
          src={url[0]}
          alt="product img"
          h="full"
          w="80%"
          mx="auto"
          objectFit="contain"
        />
      </VStack>
      <Text>{name}</Text>

      <Text>${price}</Text>
    </Box>
  );
};

export default CustomCarouselCard;
