import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CustomCarouselCard = ({product}) => {
    const { id, name, brand, price, url } = product
    console.log(product)
  return (
    <Box
    // w={{base: "50%", md:"40%",lg:"5%"}}
    w='full'
    h="100%"
    bg={`hsl(${(id * 36) % 360}, 70%, 50%)`}
    transition="height 0.3s linear"
  >

    <Image src={url[0]} alt='product img' />
    <Text>{name || brand}</Text>
    {/* <Text><b>${price}</b></Text> */}
    
  </Box>
  )
}

export default CustomCarouselCard
