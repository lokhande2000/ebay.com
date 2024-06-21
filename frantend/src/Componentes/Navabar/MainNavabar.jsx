import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const MainNavabar = () => {

  const navigate = useNavigate()

  const handleNavigate = ()=>{
    navigate("/")
  }
  return (
    <VStack  w="full" style={{borderBottom:"0.5px solid var(--color-neutral-2)"}}>>
      <HStack
        //    bg="tomato"
        w="70%"
        p={2}
      >
        <Box>
          <Heading cursor='pointer' onClick={handleNavigate} fontWeight="700" letterSpacing="-3px">
            <span className="text-red-600">e</span>
            <span className="text-blue-600">b</span>
            <span className="text-yellow-300">a</span>
            <span className="text-green-600">y</span>
          </Heading>
        </Box>

        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <Menu display={{ base: "none", xl: "inline-flex" }}>
            <MenuButton
              as={Button}
              variant="ghost"
              bg="#fff"
              _hover={{ bg: "#fff" }}
              display={{ base: "none", xl: "inline-flex" }}
            >
              Shop by category
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}></Grid>
            </MenuList>
          </Menu>
        </HStack>
        {/* </HStack> */}
        <HStack>
          <InputGroup w="38vw">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
            >
              <SearchIcon />
            </InputLeftElement>
            <Input
              placeholder="Search for anything"
              focusBorderColor="black.500"
              rounded={0}
              borderColor="#000"
            />
            <InputRightElement
              w="20%"
              display={{ base: "none", lg: "inline-flex" }}
            >
              <Select
                rounded={0}
                borderColor="#000"
                focusBorderColor="black.500"
              >
                <option value="">All Categories</option>
                <option value="">Antiques</option>
              </Select>
            </InputRightElement>
          </InputGroup>
          <Button
            display={{ base: "none", lg: "inline-flex" }}
            size="md"
            style={{ backgroundColor: "var(--color-blue-4)" }}
            color="#fff"
            rounded={0}
            px={10}
          >
            Search
          </Button>
          <Button
            display={{ md: "inline-flex", lg: "none" }}
            size="md"
            style={{ backgroundColor: "var(--color-blue-4)" }}
            color="#fff"
            rounded={0}
            px={5}
          >
            <SearchIcon />
          </Button>
          <Link fontSize="xs" display={{ base: "none", xl: "inline-flex" }}>
            Advanced
          </Link>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default MainNavabar;
