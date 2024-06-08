import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../Style/Carousel.css";
const slideImages = [
  // {
  //   url: "https://i.postimg.cc/HsCkCwDC/Capture.png",
  // },
  {
    url: "https://images-static.nykaa.com/uploads/fe616105-d856-4ef7-9a91-22a68a988094.png?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://i.ebayimg.com/images/g/F6QAAOSwQcJfIpcl/s-l1600.webp"
  },
  {
    url: "https://i.ebayimg.com/00/s/NDEzWDE2MDA=/z/rQsAAOSwX35mPI0d/$_57.JPG"
  },
  
  {
    url: "https://images-static.nykaa.com/uploads/b5e477cd-478c-4f1d-b1a5-c2030c3d0615.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/7250c4ef-daf6-4f77-ab9d-ea897b773904.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/41cab243-d530-4f83-b083-6352b09f3a13.jpg?tr=w-1200,cm-pad_resize",
  }
 
];

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
const Carousel1 = () => {
  return (
    <div  className='slidecontainer'>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className='eachslide ' key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carousel1;