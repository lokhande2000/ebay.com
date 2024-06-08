import { Box, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import TopNavabar from './TopNavabar'
import MainNavabar from './MainNavabar'
import BottomNavabar from './BottomNavabar'

const Navabar = () => {
  return (
    <VStack color="#555" spacing={0}>
      <TopNavabar/>
      <MainNavabar  />
      <BottomNavabar/>
    </VStack>
  )
}

export default Navabar
