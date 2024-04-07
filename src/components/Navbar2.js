import { useState } from "react";
// import gfgLogo from "./assets/gfg-new-logo.svg";

import {
  Flex,
  Box,
  Text,
  Image,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box bg="lightgrey" w="100%" h="90%" p={4}>
      <Text as="h2" fontWeight="bold">
        Top Navigation Bar by Chakra UI
      </Text>
      <Flex mt="3" justifyContent="left">
        <Flex
          direction="column"
          alignItems="left"
          w={{ base: "90%", md: "90%", lg: "100%" }}
        >
          <Breadcrumb
            bg="#BFD8AF"
            fontWeight="bold"
            spacing="4px"
            pt="1"
            separator=" "
          >
            <a href="https://www.geeksforgeeks.org/" target="_blank">
              <img
                bg="red"
                // src={gfgLogo}
                className="logo react"
                alt="gfg logo"
              />
            </a>
            <BreadcrumbItem>
              <BreadcrumbLink
                color="blue"
                href="https://www.geeksforgeeks.org/"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link
                color="blue"
                href="https://www.geeksforgeeks.org/how-to-implement-chakra-ui-in-reactjs/"
                isExternal
              >
                About
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                color="blue"
                href="https://www.geeksforgeeks.org/jobs?ref=ghm"
              >
                Career
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink color="blue" href="#">
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Nav;
