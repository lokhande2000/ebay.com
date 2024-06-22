import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, price, url, shipping } = product;
  const navigat = useNavigate();

  const handleClick = () => {
    navigat(`/productView/${id}`);
  };

  return (
    <VStack
      onClick={handleClick}
      cursor="pointer"
      //   spacing={3}
      //   boxShadow='xl'
      fontSize="sm"
      h="50vh"
      alignItems="flex-start"
      _hover={{ boxShadow: "md" }}
      p={4}
      //   w="full"
      rounded="md"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      transition="height 0.3s linear"
    >
      <VStack w="full" h="50%" rounded="xl">
        <Image
          src={url[0]}
          alt="product img"
          h="full"
          mx="auto"
          rounded="md"
          objectFit="content"
        />
      </VStack>
      <Text>{name}</Text>
      <Text>{shipping}</Text>

      <Text fontWeight='bold'>${price}</Text>
    </VStack>
  );
};

export default ProductCard;
