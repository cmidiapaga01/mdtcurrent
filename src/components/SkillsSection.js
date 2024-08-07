import React from 'react';
import { Box, SimpleGrid, Stack, Flex, Image, Text } from '@chakra-ui/react';
import image1 from '../images/dns.svg'
import image2 from '../images/html.svg'
import image3 from '../images/javascript.svg'
import image4 from '../images/css.svg'
import image5 from '../images/dns.svg'
import image6 from '../images/dns.svg'
import image7 from '../images/dns.svg'
import image8 from '../images/dns.svg'
import image9 from '../images/dns.svg'

const Feature = ({ imageUrl }) => {
  return (
    <Stack>
      <Flex
        w={20}
        h={20}
        align={'center'}
        justify={'center'}
        mb={1}>
        <Image src={imageUrl} boxSize="100%" objectFit="cover" rounded="full" />
      </Flex>
    </Stack>
  )
}

export default function SkillsSection() {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Minhas habilidades</Text>
      <SimpleGrid columns={{ base: 4, md: 6 }} spacing={4}>
        {/* Linha 1 */}
        <Feature imageUrl= {image1}/>
        <Feature imageUrl= {image2} />
        <Feature imageUrl= {image3} />
        <Feature imageUrl= {image4} />
        <Feature imageUrl= {image1} />
        <Feature imageUrl= {image1} />
        {/* Linha 2 */}
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
      </SimpleGrid>
    </Box>
  )
}
