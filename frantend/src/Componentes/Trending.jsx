import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Trending = () => {
  return (
    <VStack spacing={5} alignItems="flex-start">
      <Heading as="h3" size="md">
        Trending on eBay
      </Heading>
      <HStack>
        <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <VStack>
            <Image
              _hover={{ shadow: "lg" }}
              w="150px"
              rounded="full"
              src="https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg"
              alt="img"
            />
            <Text fontWeight="500" fontSize="sm">
              Luxury
            </Text>
          </VStack>
        </Box>

        <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <VStack>
            <Image
              _hover={{ shadow: "lg" }}
              w="150px"
              rounded="full"
              src="https://ir.ebaystatic.com/cr/v/c01/02_PopularDestination_Sneakers.jpg"
              alt="img"
            />
            <Text fontWeight="500" fontSize="sm">
              Sneakers
            </Text>
          </VStack>
        </Box>

        <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <VStack>
            <Image
              _hover={{ shadow: "lg" }}
              w="150px"
              rounded="full"
              src="https://ir.ebaystatic.com/cr/v/c01/03_PopularDestination_Tire.jpg"
              alt="img"
            />
            <Text fontWeight="500" fontSize="sm">
              P& A
            </Text>
          </VStack>
        </Box>

        <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <VStack>
            <Image
              _hover={{ shadow: "lg" }}
              w="150px"
              rounded="full"
              src="	https://ir.ebaystatic.com/cr/v/c01/ECM_PopularDestination_Reburbished.jpg"
              alt="img"
            />
            <Text fontSize="sm" fontWeight="500">
              Refurbished
            </Text>
          </VStack>
        </Box>

        <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <VStack>
            <Image
              _hover={{ shadow: "lg" }}
              w="150px"
              rounded="full"
              src="	https://ir.ebaystatic.com/cr/v/c01/05_PopularDestination_Cards.jpg"
              alt="img"
            />
            <Text fontSize="sm" fontWeight="500">
              Trading cards
            </Text>
          </VStack>
        </Box>

        <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <VStack>
            <Image
              _hover={{ shadow: "lg" }}
              w="150px"
              rounded="full"
              src="https://ir.ebaystatic.com/cr/v/c01/06_PopularDestination_PreLoved.jpg"
              alt="img"
            />
            <Text fontSize="sm" fontWeight="500">
              Pre-loved Luxury
            </Text>
          </VStack>
        </Box>

        <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          <VStack>
            <Image
              _hover={{ shadow: "lg" }}
              w="150px"
              rounded="full"
              src="	https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg"
              alt="img"
            />
            <Text fontSize="sm" fontWeight="500">
              Toys
            </Text>
          </VStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Trending;
