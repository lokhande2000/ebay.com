import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import CustomCarouselCard from "./CarouselsComponents/CustomCarouselCard";

const RecentViewCard = () => {

  const carouselRef = useRef(null);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);
  const [resentView, setResentView] = useState([]);

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

  async function fetchData() {
    try {
      let res = await axios.get(
        "https://ebay-com.onrender.com/recentlyViewedItems"
      );
      setResentView(res?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();

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
    <VStack  w="90%" m=" 20px auto" spacing={8} alignItems='flex-start'>
      <Heading as="h3" size="md" display='flex'  >
      Your Recently Viewed Items
      </Heading>
      <Box position="relative" minH="45vh">
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
            // w="200%"
            gap={5}
            w={{ base: "500%", md: "400%", lg: "200%" }}
            h="calc(100% - 8px)" // Adjust height to avoid scrollbar overlay
            position="relative"
            transition="all 0.5s ease-in-out "
          >
            {resentView.map((ele) => (
              <CustomCarouselCard key={ele.id} product={ele} />
            ))}
          </Flex>
        </Box>
      </Box>
    </VStack>
  );
};

export default RecentViewCard;
