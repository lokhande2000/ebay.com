import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Select,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductView = () => {
  const [viewImageIndex, setViewImageIndex] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const fetchSingleProduct = async () => {
    try {
      let res = await axios.get(`https://ebay-com.onrender.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const { name, price, url } = singleProduct;

  console.log(singleProduct);
  useEffect(() => {
    fetchSingleProduct();
  }, []);
  return (
    <Box p={5} h="80vh">
      <Flex
        h="full"
        direction={{ base: "column", md: "row" }}
        w="80%"
        mx="auto"
        bg="red"
      >
        <HStack flex="1.5" h="full" spacing={2}>
          <VStack overflowY="scroll" h="full" justifyContent='space-between'>
            {url &&
              url?.map((img, i) => (
                <Image
                  onMouseEnter={()=>{
                    setViewImageIndex(i)
                  }}
                  onClick={() => {
                    setViewImageIndex(i);
                  }}
                  key={i}
                  w="94px"
                  h="94px"
                  objectFit="contain"
                  src={img}
                  alt="Product"
                />
              ))}
          </VStack>
          <VStack h="100%">
            {url && (
              <Image
                h="full"
                w="full"
                objectFit="contain"
                src={url[viewImageIndex]}
                alt="Product"
              />
            )}
          </VStack>
        </HStack>

        <VStack h="full" flex="1" align="start" p={5}>
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <Badge colorScheme="red">15% OFF</Badge>
          <Text fontSize="xl">
            ${price}
            {/* <Text as="span" color="gray.500" textDecoration="line-through">
              $52.65
            </Text> */}
          </Text>

          <Box>
            <Text mb={2}>Color:</Text>
            <Select
              placeholder="Select color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="color1">Color 1</option>
              <option value="color2">Color 2</option>
              <option value="color3">Color 3</option>
            </Select>
          </Box>

          <Box>
            <Text mb={2}>Size:</Text>
            <Select
              placeholder="Select size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </Select>
          </Box>

          <Box>
            <Text mb={2}>Quantity:</Text>
            <Select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Select>
          </Box>

          <HStack spacing={4}>
            <Button colorScheme="blue">Buy It Now</Button>
            <Button>Add to Cart</Button>
            <Button>Add to Wishlist</Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProductView;
