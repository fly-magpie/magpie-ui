import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function PlaceholderPage() {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <Heading as="h1" size="lg">This is a placeholder page</Heading>
      <Text mt={4}>Content will be added soon...</Text>
    </Box>
  );
}

export default PlaceholderPage;