import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import LazyLoadingCard from "./LazyLoadingCard";
import { useNavigate } from "react-router-dom";

const CustomCarouselCard = ({ product }) => {
  // const { id, name, price, url } = product;
  const navigat = useNavigate();

  const handleClick = () => {
    navigat(`/productView/${product?.id}`);
  };

  return (
    <Box
      onClick={handleClick}
      cursor="pointer"
      // w={{base: "50%", md:"40%",lg:"5%"}}
      w="full"
      pb={4}
      // h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      // bg={`hsl(${(id * 36) % 360}, 70%, 50%)`}
      transition="height 0.3s linear"
    >
      <VStack w="full" h="50%" bg="#e5e5e5" rounded="xl">
        <Image
          src={product?.url[0]}
          alt="product img"
          h="full"
          // w="70%"
          mx="auto"
          objectFit="content"
        />
      </VStack>
      <Text>{product?.name}</Text>

      <Text fontWeight="bold">${product?.price}</Text>
    </Box>
  );
};

export default CustomCarouselCard;
