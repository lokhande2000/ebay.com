import { useContext, useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";
import ProductCard from "../Componentes/Cards/ProductCard";
import Loading from "../Componentes/Loading";
import { ProductData } from "../Context/ProductDataProvider";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const { allProducts, loading } = useContext(ProductData);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Grid
        w="70%"
        m="auto"
        templateColumns="repeat(4, 1fr)"
        gap={6}
        py={8}
        my={5}
      >
        {products &&
          products?.map((ele) => <ProductCard key={ele.id} product={ele} />)}
      </Grid>
    </>
  );
};

export default AllProducts;
