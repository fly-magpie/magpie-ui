import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Center,
  Flex,
  VStack,
  Input,
  Button,
  Box,
  Grid,
  Icon,
  GridItem,
  LinkBox,
  LinkOverlay,
  HStack,
  useBreakpointValue,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";

import {
  FcFilledFilter,
  FcWorkflow,
  FcBarChart,
  FcBiomass,
  FcSurvey,
  FcGenealogy,
  FcDatabase,
  FcAddDatabase,
  FcContacts,
  FcDataSheet,
  FcFilingCabinet,
} from "react-icons/fc";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(""); // State to hold the input value
  const navigate = useNavigate(); // Hook to allow navigation

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the input value when it changes
  };

  const handleButtonClick = () => {
    navigate("/assistant", { state: { inputValue } }); // Navigate to /assistant and pass the input value as state
  };
  const sources = [
    {
      label: "Components",
      icon: <Icon as={FcBarChart} />,
      href: "/components",
    },
    {
      label: "Data Sources",
      icon: <Icon as={FcAddDatabase} />,
      href: "/data-sources",
    },
    {
      label: "Notebooks",
      icon: <Icon as={FcWorkflow} />,
      href: "/notebooks",
    },
    {
      label: "Datastores",
      icon: <Icon as={FcDataSheet} />,
      href: "/datastores",
    },
    {
      label: "Queries",
      icon: <Icon as={FcFilledFilter} />,
      href: "/queries",
    },
    {
      label: "Identities",
      icon: <Icon as={FcContacts} />,
      href: "/identities",
    },

    {
      label: "Research",
      icon: <Icon as={FcBiomass} />,
      href: "/research",
    },
  ];

  const iconSize = useBreakpointValue({
    base: "24px",
    md: "28px",
    lg: "30px",
  });
  const bgColor = useColorModeValue("white", "orange.400"); // Adjust colors for light/dark mode
  // const hoverBgColor = useColorModeValue("orange.50", "orange.200");
  const pageBgColor = useColorModeValue("Yellow.50", "Yellow.100");
  // const pageBgColor = useColorModeValue("gray.50", "gray.400");
  const suggestions = [
    "Create a graph for communters in London Tube in last 10 days",
    "Create a line chart for daily COVID-19 cases last 30 days",
    "Create a bar chart for daily rainfall in London in last 10 days",
  ];
  const [placeholder, setPlaceholder] = useState("");
  const [arrayIndex, setArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        // Determine the current suggestion and the action (typing/deleting)
        const currentSuggestion = suggestions[arrayIndex];
        let nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;

        // Update the placeholder text
        setPlaceholder(currentSuggestion.substring(0, nextCharIndex));
        setCharIndex(nextCharIndex);

        if (!isDeleting && nextCharIndex === currentSuggestion.length) {
          // If finished typing a suggestion, start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1000); // Adjust pause duration as needed
        } else if (isDeleting && nextCharIndex === 0) {
          // If finished deleting, move to the next suggestion
          setIsDeleting(false);
          setArrayIndex((arrayIndex + 1) % suggestions.length);
        }
      },
      isDeleting ? 30 : 75
    ); // Adjust typing speed and deleting speed

    return () => clearTimeout(timeoutId);
  }, [arrayIndex, charIndex, isDeleting, suggestions]);

  return (
    <Center top={10} h="100vh" bg={pageBgColor}>
      <VStack spacing={6}>
        <Image src="/magpie_logo1.svg" alt="Logo" boxSize="250px" />
        <HStack top={15}>
          <Input
            placeholder={placeholder}
            size="lg"
            // textOverflow={"ellipsis"}
            focusBorderColor="orange.400"
            w="xl"
            boxShadow="md" // Add shadow
            _focus={{
              boxShadow: "xl", // Add shadow on focus
            }}
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button
            boxShadow="md"
            _hover={{
              boxShadow: "lg",
            }}
            colorScheme="orange"
            size="lg"
            onClick={handleButtonClick}
            px={6}
          >
            Fly!
          </Button>
        </HStack>
        {/* <Text fontSize="lg" p={10} color="gray.500">
          {" "}
          End to End{" "}
          <span style={{ color: "#DD6B20" }}>Data Visualization</span> For Your
          React Application
        </Text> */}
        <Flex direction="row" w="100%" pt={10}>
          {/* Right Panel - Data Source Icons */}
          <Box flex="1" p="5">
            <Grid
              templateColumns="repeat(auto-fit, minmax(120px, 2fr))"
              gap={5}
            >
              {sources.map((source, index) => (
                <LinkBox
                  as={GridItem}
                  key={index}
                  w="100%"
                  h="120px"
                  bg={bgColor}
                  borderWidth="1px"
                  borderRadius="md"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  boxShadow="md" // Add shadow
                  justifyContent="center"
                  p="3"
                  _hover={{
                    // bg: hoverBgColor,
                    borderColor: "orange.400",
                    transform: "scale(1.05)",
                    boxShadow: "xl", // Add shadow,
                    transition: "all .2s ease-in-out",
                  }}
                >
                  <Box fontSize={iconSize} as="span" mb="-1">
                    {React.cloneElement(source.icon, { boxSize: iconSize })}
                  </Box>
                  <Text mt="2">
                    <LinkOverlay
                      href={source.href}
                      isExternal={source.href.startsWith("http")}
                    >
                      {source.label}
                    </LinkOverlay>
                  </Text>
                </LinkBox>
              ))}
            </Grid>
          </Box>
        </Flex>
      </VStack>
    </Center>
  );
};

export default SearchBar;
