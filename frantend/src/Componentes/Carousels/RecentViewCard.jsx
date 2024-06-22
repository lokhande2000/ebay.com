import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  VStack,
  textDecoration,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import CustomCarouselCard from "./CarouselsComponents/CustomCarouselCard";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

const RecentViewCard = ({ resentView, sectionName }) => {
  const carouselRef = useRef(null);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);
  const navigate = useNavigate();

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
    <VStack
      px={2}
      spacing={5}
      alignItems="flex-start"
      // maxH={{ base: "60vh", md: "55vh", lg: "50vh" }}
      minH="50vh"
    >
      <Flex w="full" justifyContent="space-between">
        <Heading as="h3" size="md" display="flex">
          {sectionName}
        </Heading>
        <Spacer />
        <Link to="/products" className="hover:underline decoration-solid ">
          see all
        </Link>
      </Flex>
      <Box
        position="relative"
        maxH="90%"
        // maxH={{ base: "60vh", md: "55vh", lg: "50vh" }}
      >
        <Button
          rounded="full"
          shadow="md"
          bg="#fff"
          p={0}
          border="1px solid #999"
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
          bg="#fff"
          p={0}
          border="1px solid #999"
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
          overflowX="scroll"
          ref={carouselRef}
          _hover={{
            "&::-webkit-scrollbar": {
              display: "inline-block",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-button": {
              background: "#555",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#666",
            },
          }}
          css={{
            "&::-webkit-scrollbar": {
              height: "8px",
              overflow: "hidden",
            },
          }}
          // scrollBehavior='smooth'
        >
          <Flex
            gap={5}
            w={{ base: "500%", md: "400%", lg: "200%" }}
            position="relative"
            transition="all 0.5s ease-in-out "
          >
            {resentView &&
              resentView?.map((ele) => (
                <CustomCarouselCard key={ele.id} product={ele} />
              ))}
          </Flex>
        </Box>
      </Box>
    </VStack>
  );
};

export default RecentViewCard;
