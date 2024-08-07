import { Box, Flex, keyframes } from '@chakra-ui/react';
import React from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import image1 from '../images/ganalytics.svg';
import image2 from '../images/gtagmanager.svg';

export default function StatusIndicator() {
  const activeColor = 'green.500';
  const ringScaleMin = 0.33;
  const ringScaleMax = 0.66;

  const pulseRing = keyframes`
    0% {
      transform: scale(${ringScaleMin});
    }
    30% {
      transform: scale(${ringScaleMax});
    }
    40%, 50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  `;

  const pulseDot = keyframes`
    0% {
      transform: scale(0.9);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(0.9);
    }
  `;

  return (
    <Flex justifyContent="center" alignItems="center" h="216px" w="full" flexDir="column" overflow="hidden" position="relative">
      {/* Setinha */}
      <ArrowUpIcon boxSize="48px" color={activeColor} position="absolute" top="50%" transform="translateY(-50%)" zIndex={1} animation={`${pulseRing} 2.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`} />
      {/* Primeira imagem */}
      <Box
        as="div"
        h="48px"
        w="48px"
        mb="2em" // Aumentando a distância entre os círculos
        position="relative"
        borderRadius="50%"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={`url(${image1})`}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: activeColor,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
        _after={{
          animation: `2.25s ${pulseDot} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
      />
      {/* Segunda imagem */}
      <Box
        as="div"
        h="24px"
        w="24px"
        position="relative"
        borderRadius="50%"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={`url(${image2})`}
        mt="2em" // Aumentando a distância entre os círculos
      />
    </Flex>
  );
}
