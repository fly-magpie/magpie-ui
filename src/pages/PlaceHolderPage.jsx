import { Box, Heading, Text } from "@chakra-ui/react";

function PlaceholderPage({ name, details }) {
  return (
    <Box p={5} pt="20" boxShadow="lg" bg="white">
      <Heading as="h1" size="lg">
        {name}
      </Heading>
      <Text mt={4}>{details}</Text>
    </Box>
  );
}

export default PlaceholderPage;
