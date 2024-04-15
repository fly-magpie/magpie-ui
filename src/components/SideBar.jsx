// Import necessary components from Chakra UI

import {
  Box,
  Flex,
  Image,
  VStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const SideMenu = () => {
  const bg = useColorModeValue("gray.100", "gray.700"); // Responsive color mode

  return (
    <Box w="250px" h="100vh" bg={bg} padding="5">
      <Flex flexDirection="column" alignItems="center" h="100%">
        {/* Logo */}
        <Image src="/logo.png" boxSize="100px" marginBottom="5" />

        {/* Navigation Links */}
        <VStack spacing="5" align="stretch">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default SideMenu;
