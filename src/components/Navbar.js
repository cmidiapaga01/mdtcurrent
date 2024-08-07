import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Text w="100px" color={"black"}>
        Teste
      </Text>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    position={{ base: "absolute", md: "static" }}
    top="100%" // Place the menu below the navbar
    left="0"
    // bg="white"
    w={{ base: "100%", md: "auto" }}
    m={0}
    // mt={{ base: "0", md: "4" }} // Add margin top to prevent overlapping
    pt={{ base: "2", md: "4" }} // Add padding to the menu items
    pb={5}
    px={8}
    pe={{ base: "8", lg: "0" }}
    zIndex="99" // Ensure menu is above other content    
    bg={{ base: "rgba(255, 255, 255, 0.85)", md: "none" }} // Semi-transparent white background
    backdropFilter={{ base: "blur(10px)", md: "none" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It works </MenuItem>
        <MenuItem to="/faetures">Features </MenuItem>
        <MenuItem to="/pricing">Pricing </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={"black"}
            bg={"white"}
            _hover={{
              bg: ["gray.100"]
            }}
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      maxW="container.xl"
      // position="fixed" // Add position fixed here
      // top="0" // Stick the navbar to the top of the viewport
      zIndex="100"
      // mb={8}
      p={[6, 8, 6, 6]}
      bg="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(20px)" 
      color={"black"}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Navbar;