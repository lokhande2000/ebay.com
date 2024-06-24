import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductData = createContext();

const ProductDataProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await axios.get("https://ebay-com.onrender.com/products");

      setAllProducts(res?.data);
      setLoading(false);
    } catch (error) {
      setIsError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const allProductData = {
    allProducts,
    isError,
    loading,
  };

  return (
    <ProductData.Provider value={allProductData}>
      {children}
    </ProductData.Provider>
  );
};

export default ProductDataProvider;
