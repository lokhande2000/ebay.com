import { useContext, useEffect, useState } from "react";
import Carousel1 from "../Componentes/Carousels/Carousel1";
import RecentViewCard from "../Componentes/Carousels/RecentViewCard";
import axios from "axios";
import { Box, VStack } from "@chakra-ui/react";
import Trending from "../Componentes/Trending";
import BannerCard from "../Componentes/Cards/BannerCard";
import SpecialSummer from "../Componentes/SpecialSummer";
import { ProductData } from "../Context/ProductDataProvider";

const Home = () => {
  const [resentView, setResentView] = useState([]);
  const [product, setProduct] = useState([]);
  const { allProducts } = useContext(ProductData)

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

    if(allProducts){
      const res = allProducts.filter((ele)=> ele.id <= 11)
      setProduct(res)
    }
  }, [allProducts]);
  return (
    <Box pb={8} w={{base:'90%', md:"80%", lg:"70%"}} m="auto" >
      <Carousel1 />
      <VStack spacing={6} w='full' pt={5}>
        <RecentViewCard
          resentView={resentView}
          sectionName="Your Recently Viewed Items"
        />
        <RecentViewCard
          resentView={product}
          sectionName="Cell Phones & Smartphones"
        />
        <Trending />
        <BannerCard
          title="Growing your collection? We`ve got your back"
          detels="You`re protected by the eBay Money Back Guarantee."
          bgcolor="#FBCE20"
          btnText="Shop collectibles"
          url="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/KA0AAOSwKZhmQglh/$_57.PNG"
        />
        .<SpecialSummer />
        <BannerCard
          title="Feel special with 15% off*"
          detels="Save on luxury jewelry, watches and handbags for your summer."
          bgcolor="#f7f7f7"
          btnText="Code: LUXUS15"
          url="	https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/Lw0AAOSwA5ZmWI36/$_57.JPG"
        />

      </VStack>


    </Box>
  );
};

export default Home;
