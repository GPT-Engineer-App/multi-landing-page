import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading>Contact Us</Heading>
        <Text>
          If you have any questions, feel free to reach out to us at contact@mywebsite.com.
        </Text>
      </VStack>
    </Box>
  );
};

export default Contact;