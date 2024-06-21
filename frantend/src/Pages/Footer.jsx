import React from 'react';
import { Box, Container, SimpleGrid, Stack, Text, Link, Divider, HStack, Select } from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box borderTop="1px" className='bg-neutral_1' color="gray.700" py={10}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <Text fontWeight="bold">Buy</Text>
            <Link href="#">Registration</Link>
            <Link href="#">eBay Money Back Guarantee</Link>
            <Link href="#">Bidding & buying help</Link>
            <Link href="#">Stores</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold">Sell</Text>
            <Link href="#">Start selling</Link>
            <Link href="#">Learn to sell</Link>
            <Link href="#">Affiliates</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold">Tools & apps</Text>
            <Link href="#">Developers</Link>
            <Link href="#">Security center</Link>
            <Link href="#">Site map</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold">Stay connected</Text>
            <HStack spacing={3}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
            </HStack>
            <Link href="#">eBay&apos;s Blogs</Link>
          </Stack>
        </SimpleGrid>

        <Divider my={10} />

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <Text fontWeight="bold">About eBay</Text>
            <Link href="#">Company info</Link>
            <Link href="#">News</Link>
            <Link href="#">Investors</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Government relations</Link>
            <Link href="#">Advertise with us</Link>
            <Link href="#">Policies</Link>
            <Link href="#">Verified Rights Owner (VeRO) Program</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold">Help & Contact</Text>
            <Link href="#">Seller Information Center</Link>
            <Link href="#">Contact us</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold">Community</Text>
            <Link href="#">Announcements</Link>
            <Link href="#">Discussion boards</Link>
            <Link href="#">eBay Giving Works</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold">eBay Sites</Text>
            <Select placeholder="United States" variant="filled">
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="IT">Italy</option>
              <option value="ES">Spain</option>
            </Select>
          </Stack>
        </SimpleGrid>

        <Divider my={10} />

        <Text textAlign="center" fontSize="sm">
          &copy; {new Date().getFullYear()} eBay Inc. All Rights Reserved. 
          <Link href="#">Accessibility</Link>, 
          <Link href="#">User Agreement</Link>, 
          <Link href="#">Privacy</Link>, 
          <Link href="#">Payments Terms of Use</Link>, 
          <Link href="#">Cookies</Link>, 
          <Link href="#">CA Privacy Notice</Link>, 
          <Link href="#">Your Privacy Choices</Link>, 
          <Link href="#">AdChoice</Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
