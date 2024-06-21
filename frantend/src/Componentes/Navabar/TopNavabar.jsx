import { Box, Flex, HStack, Select, Spacer, VStack } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { PiShoppingCartLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const TopNavabar = () => {
  return (
    <VStack py={1} fontSize="sm"
    //  className="border-b-2"
     w="full" style={{borderBottom:"0.5px solid var(--color-neutral-2)"}}>
      <Flex w="70%">
        <HStack spacing={2}>
          <NavLink style={{ color: "blue", textDecoration: "underline" }}>
            signin
          </NavLink>
          <NavLink className="max-md:hidden lg:inline-flex  hover:underline">
            Daily Deals
          </NavLink>
          <NavLink className="max-md:hidden lg:inline-flex  hover:underline">
            Help & Contact
          </NavLink>
        </HStack>
        <Spacer />

        <HStack spacing={3}>
          <NavLink
            className="max-sm:hidden md:inline-flex"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            sell
          </NavLink>

          <NavLink className="max-sm:hidden md:inline-flex">Watchlist</NavLink>
          <Select variant="unstyled">
            <option value="">My eBay</option>
            <option value="Expand My eBay">Expand My eBay</option>
            <option value="Summary">Summary</option>
            <option value="Recently Viewed">Recently Viewed</option>
            <option value="Bids/Offers">Bids/Offers</option>
            <option value="Purchase History">Purchase History</option>
            <option value="Buy Again">Buy Again</option>
            <option value="Selling">Selling</option>
            <option value="Saved Searches">Saved Searches</option>
            <option value="Saved Sellers">Saved Sellers</option>
            <option value="Messages">Messages</option>
          </Select>
          <BellIcon className="max-sm:hidden md:inline-flex" />
          <Box>
            <PiShoppingCartLight />
          </Box>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default TopNavabar;
