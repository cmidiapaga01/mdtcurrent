// Container.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';

const Container = ({ children }) => {
  return (
    <Box maxW="container.xl" mx="auto">
      {children}
    </Box>
  );
};

export default Container;
