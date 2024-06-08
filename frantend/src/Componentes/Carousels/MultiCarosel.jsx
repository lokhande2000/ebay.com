import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@chakra-ui/react";

const MultiCarosel = () => {
  const images = [
    "https://i.ebayimg.com/images/g/F6QAAOSwQcJfIpcl/s-l1600.webp",
    "https://i.ebayimg.com/00/s/NDEzWDE2MDA=/z/rQsAAOSwX35mPI0d/$_57.JPG",
  ];

  return (
    <Box h="30vh" bg='red' w="90%" m="10px auto" position="relative">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {images.map((image, index) => (
          <div
            key={index}
            
          >
            <img  src={image} alt="img" />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default MultiCarosel;
