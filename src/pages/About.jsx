import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading>About Us</Heading>
        <Text>
          Welcome to our website. We are dedicated to providing the best service possible.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;