import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RecentViewCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ width: "90%", margin: "10px auto" }}>
      <Carousel slidesToSlide={3} responsive={responsive}>
        <div
          style={{ height: "30vh", backgroundColor: "green", margin: "10px" }}
        >
          Item 1
        </div>
        <div
          style={{ height: "30vh", backgroundColor: "green", margin: "10px" }}
        >
          Item 2
        </div>
        <div
          style={{ height: "30vh", backgroundColor: "green", margin: "10px" }}
        >
          Item 3
        </div>
        <div
          style={{ height: "30vh", backgroundColor: "green", margin: "10px" }}
        >
          Item 4
        </div>
        <div
          style={{ height: "30vh", backgroundColor: "green", margin: "10px" }}
        >
          Item 1
        </div>
        <div
          style={{ height: "30vh", backgroundColor: "green", margin: "10px" }}
        >
          Item 2
        </div>
        <div
          style={{ height: "30vh", backgroundColor: "green", margin: "10px" }}
        >
          Item 3
        </div>
        <div
          style={{ height: "30vh", backgroundColor: "green", margin: "10px" }}
        >
          Item 4
        </div>
      </Carousel>
    </div>
  );
};

export default RecentViewCard;
