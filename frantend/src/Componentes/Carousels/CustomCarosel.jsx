import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const CustomCarousel = () => {
  const carouselRef = useRef(null);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
      updateButtonState();
    }
  };

  const updateButtonState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsLeftButtonDisabled(scrollLeft === 0);
      setIsRightButtonDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    updateButtonState();
    // Attach the scroll event listener to update button states on scroll
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", updateButtonState);
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", updateButtonState);
      }
    };
  }, []);

  return (
    <Box position="relative" w="90%" m="auto" h="30vh">
      <Button
        rounded="full"
        shadow="md"
        position="absolute"
        left="-30px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={() => scroll(-carouselRef.current.clientWidth)}
        disabled={isLeftButtonDisabled}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        rounded="full"
        shadow="md"
        position="absolute"
        right="-50px"
        top="50%"
        transform="translate(-50% ,-50%)"
        zIndex="1"
        onClick={() => scroll(carouselRef.current.clientWidth)}
        disabled={isRightButtonDisabled}
      >
        <ChevronRightIcon />
      </Button>
      <Box
        w="100%"
        h="100%"
        overflowX="hidden"
        ref={carouselRef}
        _hover={{ overflowX: "scroll" }}
        css={{
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-button": {
            background: "#00a7e0",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <Flex
          w="400%"
          h="calc(100% - 8px)" // Adjust height to avoid scrollbar overlay
          position="relative"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Box
              key={index}
              w={{base: "50%", md:"40%",lg:"5%"}}
              h="100%"
              bg={`hsl(${(index * 36) % 360}, 70%, 50%)`}
              transition="height 0.3s ease"
            >
              Div {index + 1}
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default CustomCarousel;
