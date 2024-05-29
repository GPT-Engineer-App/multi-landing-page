import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold">
          MyWebsite
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "brand.700" }} _activeLink={{ bg: "brand.900" }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" p={2} _hover={{ textDecoration: "none", bg: "brand.700" }} _activeLink={{ bg: "brand.900" }}>
            About
          </Link>
          <Link as={NavLink} to="/contact" p={2} _hover={{ textDecoration: "none", bg: "brand.700" }} _activeLink={{ bg: "brand.900" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;