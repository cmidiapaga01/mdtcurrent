// Footer.jsx
import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box py="4" bg="gray.500" color="white">
      <Flex maxW="container.xl" mx="auto" alignItems="center" justifyContent="center">
        <Link as={RouterLink} to="/" mr="4">
          Home
        </Link>
        <Link as={RouterLink} to="/" mr="4">
        {/* <Link as={RouterLink} to="/about" mr="4"> */}
          About
        </Link>
        <Link as={RouterLink} to="/">
          Contact
        </Link>
      </Flex>
      <Box textAlign="center" mt="2">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
