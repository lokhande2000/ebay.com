import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const BottomNavabar = () => {
  return (
    <VStack py={1} fontSize="sm" w="full" >
      <Flex
        fontSize="xs"
        w="70%"
        m="auto"
        alignItems="center"
        justify="space-between"
        overflow='hidden'
        gap={{base:10}}
      >
        <NavLink to="">Saved</NavLink>
        <NavLink to="">Electronics</NavLink>
        <NavLink to="">Motors</NavLink>
        <NavLink to="">Fashion</NavLink>
        <NavLink to="">Collectibles&Art</NavLink>
        <NavLink to="">Sports</NavLink>
        <NavLink to="">Health&Beauty</NavLink>
        <NavLink to="">Industrial&equipment</NavLink>
        <NavLink to="">Home&Garden</NavLink>
        <NavLink to="">DealsSell</NavLink>
        <NavLink to="">Sell</NavLink>
      </Flex>
    </VStack>
  );
};

export default BottomNavabar;
