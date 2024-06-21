import { HStack, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <HStack h='80vh' w='70%' m='auto' justifyContent='center'>
        
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </HStack>
  );
};

export default Loading;
