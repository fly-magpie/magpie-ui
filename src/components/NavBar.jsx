import React from "react";
import {
  Box,
  Flex,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  // useLocation,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { BellIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useLocation, Link } from "react-router-dom";
// Import other icons and components as needed

const NavigationBar = () => {
  const { onOpen } = useDisclosure();

  const location = useLocation();

  const breadcrumbPathsMapping = {
    "/": [{ label: "Home", to: "/" }],
    "/data-sources": [
      { label: "Home", to: "/" },
      { label: "Data Sources", to: "/data-sources" },
    ],
    "/components/editor": [
      { label: "Home", to: "/" },
      { label: "Components", to: "/components" },
      { label: "Editor", to: "/components/editor" },
    ],
    "/notebooks": [
      { label: "Home", to: "/" },
      { label: "Notebooks", to: "/notesbooks" },
    ],
    "/datastores": [
      { label: "Home", to: "/" },
      { label: "Datastores", to: "/datastores" },
    ],
    "/queries": [
      { label: "Home", to: "/" },
      { label: "Queries", to: "/queries" },
    ],
    "/components": [
      { label: "Home", to: "/" },
      { label: "Components", to: "/components" },
    ],
    "/identities": [
      { label: "Home", to: "/" },
      { label: "Identities", to: "/identities" },
    ],
    "/assistant": [
      { label: "Home", to: "/" },
      { label: "Assistant", to: "/assistant" },
    ],
    "/research": [
      { label: "Home", to: "/" },
      { label: "Research", to: "/research" },
    ],
  };

  const breadcrumbPaths = breadcrumbPathsMapping[location.pathname] || [];

  return (
    <Flex
      position="absolute"
      zIndex="sticky"
      w="full"
      as="nav"
      top={0}
      // rounded={"sm"}
      overflowX={{ base: "auto", md: "hidden" }}
      align="center"
      justify="space-between"
      wrap={{ base: "wrap", md: "nowrap" }}
      padding={{ base: "0.5rem", md: "0.8rem" }}
      mb={10}
      bg="gray.900" // Lighter background color
      color="white" // Adjust text color for visibility
    >
      {/* Logo and Navigation Links */}

      <Flex align="center" mr={5} flex={{ base: "1 0 auto", md: "1" }}>
        <Heading
          as="h1"
          size={{ base: "md", md: "lg" }}
          letterSpacing={"tighter"}
          marginRight="10"
          marginLeft="5"
        >
          <span color="orange">m</span>agpie
        </Heading>
        {/* Conditionally render breadcrumbs based on the pathname */}
        {location.pathname !== "/" && (
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="white.500" />}
            colorScheme="orange"
          >
            {breadcrumbPaths.map((path, index) => (
              <BreadcrumbItem
                key={index}
                isCurrentPage={path.to === location.pathname}
              >
                <BreadcrumbLink
                  as={Link}
                  to={path.to}
                  color={
                    index === breadcrumbPaths.length - 1
                      ? "orange.500"
                      : "white.500"
                  }
                >
                  {path.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        )}
      </Flex>

      {/* Right Section - Notifications and Sign In */}
      <Box>
        <Icon as={BellIcon} w={5} h={5} marginRight="12px" />
        <Button colorScheme="orange" size="sm" onClick={onOpen}>
          Sign In
        </Button>
        {/* SignInModal Component */}
      </Box>
    </Flex>
  );
};

export default NavigationBar;
