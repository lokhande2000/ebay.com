import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";
import axios from "axios";
import ProductCard from "../Componentes/Cards/ProductCard";
import Loading from "../Componentes/Loading";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllProductsData() {
    try {
      let res = await axios.get("https://ebay-com.onrender.com/products");
      let data = res?.data;
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllProductsData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Grid w="70%" m="auto" templateColumns="repeat(4, 1fr)" gap={6} py={8} my={5}>
        {products &&
          products?.map((ele) => <ProductCard key={ele.id} product={ele} />)}
      </Grid>
    </>
  );
};

export default AllProducts;
