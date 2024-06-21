import { useEffect, useState } from "react";
import Carousel1 from "../Componentes/Carousels/Carousel1";
import RecentViewCard from "../Componentes/Carousels/RecentViewCard";
import axios from "axios";
import { VStack } from "@chakra-ui/react";
import Trending from "../Componentes/Trending";
import BannerCard from "../Componentes/Cards/BannerCard";
import SpecialSummer from "../Componentes/SpecialSummer";

const Home = () => {
  const [resentView, setResentView] = useState([]);
  const [product, setProduct] = useState([]);

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

  async function fetchProductsData() {
    try {
      let res = await axios.get("https://ebay-com.onrender.com/products");
      let data = res?.data.filter((item) => item.id < 13);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchProductsData();
  }, []);
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Carousel1 />
      <VStack spacing={6} w="70%" m="auto" pt={5}>
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
    </div>
  );
};

export default Home;
