import React from "react";
import {
  Flex,
  Box,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { RepeatIcon, LinkIcon } from "@chakra-ui/icons"; // Placeholder icons
import {
  PostgresIcon,
  MongoDBIcon,
  DatabricksIcon,
  SnowflakeIcon,
  MySQLIcon,
  BigQueryIcon
} from "../components/CustomIcons";

const SourcePage = () => {
  const sources = [
    { label: "Synthetic Data", icon: <RepeatIcon />, href: "#custom-api" },
    { label: "Custom API", icon: <LinkIcon />, href: "#custom-api" },
    {
      label: "Postgres DB",
      icon: <PostgresIcon boxSize={10} />,
      href: "#postgres-db",
    },
    { label: "MongoDB", icon: <MongoDBIcon boxSize={10} />, href: "#mongodb" },
    { label: "MySQL", icon: <MySQLIcon />, href: "#mysql" },
    {
      label: "Databricks",
      icon: <DatabricksIcon boxSize={10} />,
      href: "#databricks",
    },
    { label: "Snowflake", icon: <SnowflakeIcon />, href: "#snowflake" },
    { label: "BigQuery", icon: <BigQueryIcon />, href: "#bigquery" },
  ];

  const iconSize = useBreakpointValue({ base: "25px", md: "30px", lg: "35px" });
  const bgColor =  useColorModeValue("white", "orange.400");
  // const hoverBgColor = useColorModeValue("orange.50", "orange.200");
    const pageBgColor = useColorModeValue("orange.50", "orange.200");

  return (
    <Flex direction={{ base: "column", md: "row" }} bg={pageBgColor} h="100vh" pt={20}>
      {/* Right Panel - Data Source Icons */}
      <Box flex="1" p="5">
        <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={6}>
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
              boxShadow="md" // Add shadow
              flexDirection="column"
              alignItems="center"
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
              <Box fontSize={iconSize} as="span" mb="2">
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
  );
};

export default SourcePage;
