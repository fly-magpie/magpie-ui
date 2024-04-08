// src/pages/BuilderPage.js
import React from "react";
import AppBreadcrumb from "../components/AppBreadcrumb";

import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  IconButton,
  FormControl,
  FormLabel,
  Tbody,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tr,
  Th,
  Td,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import {
  EditIcon,
  SettingsIcon,
  CloseIcon,
  //   UpDownIcon,
  //   AtSignIcon,
  LinkIcon,
  AddIcon,
} from "@chakra-ui/icons";
import ReactECharts from "echarts-for-react"; // Import the ECharts component

const EditorPage = () => {
  // Example option for ECharts
  const breadcrumbPaths = [
    { label: "Home", to: "/" },
    { label: "Sources", to: "/sources" },
    { label: "Editor", to: "/editor" }, // Assuming this is the current page
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const option = {
    title: {
      text: "Daily Average Commuters in London Tube",
      subtext: "Last 10 Days",
    },
    xAxis: {
      nameGap: 50,
      name: "Date",
      nameLocation: "middle",
      type: "category",
      data: [
        "2024-03-25",
        "2024-03-26",
        "2024-03-27",
        "2024-03-28",
        "2024-03-29",
        "2024-03-30",
        "2024-03-31",
        "2024-04-01",
        "2024-04-02",
        "2024-04-03",
        "2024-04-04",
      ],
      axisLabel: {
        formatter: "{value}",
      },
    },
    yAxis: {
      nameGap: 70,
      name: "Number of Commuters",
      nameLocation: "middle",
      type: "value",
      axisLabel: {
        formatter: "{value}",
      },
      nameRotate: 90,
    },
    tooltip: {
      trigger: "axis",
      formatter: "Date: {b0}<br/>Commuters: {c0} Numbers",
    },
    series: [
      {
        data: [
          400000, 568259.35, 400000, 400000, 400000, 400000, 600000, 600000,
          400000, 400000, 600000,
        ],
        type: "line",
        smooth: true,
        itemStyle: {
          color: "#ED8936",
        },
      },
    ],
  };

  const [activePanel, setActivePanel] = useState(false);
  const [chartOptions, setChartOptions] = useState(option);
  const togglePanel = (panelType) => {
    if (panelType) {
      onOpen();
      setActivePanel(panelType); // Set the active panel
    } else {
      onClose(); // Close the drawer if no panel type is provided
      setActivePanel(false); // Reset the active panel
    }
  };

  const updateChartOption = (path, value) => {
    setChartOptions((prevOptions) => {
      const updatedOptions = JSON.parse(JSON.stringify(prevOptions)); // Deep copy to avoid direct state mutation
      let schema = updatedOptions; // A schema pointer to traverse the chart options object
      const pathList = path.split("."); // Convert string path to array
      const lastKey = pathList.pop(); // Remove the last key for the final assignment

      // Traverse the schema to the last key
      pathList.forEach((key) => {
        if (schema[key] === undefined) schema[key] = {}; // Ensure nested keys exist
        schema = schema[key];
      });

      // Update the final property value
      schema[lastKey] = value;

      return updatedOptions;
    });
  };

  const tableData = [
    { day: "Mon", value: 120 },
    { day: "Tue", value: 200 },
    // Add other days
  ];

  return (
    <Flex h="100vh" boxShadow="xl" p="6" rounded="md" bg="white">
      {/* <AppBreadcrumb paths={breadcrumbPaths} /> */}
      {/* Left Panel with ECharts */}
      <Center flex="7" p="4" borderRight="1px" borderColor="gray.200">
        <Tabs
          // isFitted
          isLazy
          // position="relative"
          // variant="unstyled"
          // // variant="soft-rounded"
          w="full"
          h="full"
          colorScheme="orange.400"
        >
          <TabList mb="1em">
            <Tab
              _selected={{
                // border: "1px",
                borderColor: "orange.400",
                color: "orange.400",
              }}
              // _focus={{ boxShadow: "none" }}
              px={4}
              py={2}
            >
              Graph View
            </Tab>
            <Tab
              _selected={{
                // border: "1px",
                borderColor: "orange.400",
                color: "orange.400",
              }}
              // _focus={{ boxShadow: "none" }}
              px={4}
              py={2}
            >
              Table View
            </Tab>
          </TabList>
          <TabPanels h="full">
            <TabPanel h="full">
              <Flex direction="column" h="full" justify="center" align="center">
                {/* Graph Editing Tools Panel */}
                <Flex
                  direction="column"
                  position="fixed" // Positioning it over the chart
                  top="80" // Adjust the position as needed
                  left="2.5" // Adjust the position as needed
                  p="2"
                  m="2"
                  bg="white"
                  boxShadow="md"
                  borderRadius="md"
                  zIndex="overlay"
                >
                  {/* Icons for editing tools */}
                  <IconButton
                    aria-label="Edit Chart"
                    icon={<EditIcon />}
                    colorScheme="orange"
                    m="1"
                    onClick={() => togglePanel("edit")}
                  />
                  <IconButton
                    aria-label="Settings"
                    icon={<SettingsIcon />}
                    colorScheme="orange"
                    m="1"
                    onClick={() => togglePanel("setting")}
                  />
                  <IconButton
                    aria-label="Copy link"
                    icon={<LinkIcon />}
                    colorScheme="orange"
                    m="1"
                    onClick={() => togglePanel("size")}
                  />
                  <IconButton
                    aria-label="Other settings"
                    icon={<AddIcon />}
                    colorScheme="orange"
                    m="1"
                    onClick={() => togglePanel("other")}
                  />
                  {/* Add more icons as needed */}
                </Flex>
                <Box
                  w="full" // Use the full width of the tab panel
                  maxW="4xl" // Maximum width can be adjusted as needed
                  borderWidth="1px" // Adds a border
                  borderRadius="lg" // Rounds the corners
                  overflow="hidden" // Keeps the chart within the bounds of the border radius
                  boxShadow="lg" // Adds a shadow for depth
                  bg="white" // Background color for the card
                  p={6}
                >
                  <ReactECharts
                    option={chartOptions}
                    style={{ height: "600px", width: "100%" }}
                  />
                </Box>
                {/* <ReactECharts
                  option={option}
                  style={{ height: "80%", width: "100%" }}
                /> */}
              </Flex>
            </TabPanel>
            <TabPanel h="full">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Day</Th>
                    <Th>Value</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tableData.map((data, index) => (
                    <Tr key={index}>
                      <Td>{data.day}</Td>
                      <Td>{data.value}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
      {/* Right Panel with Chat Window */}
      <Box flex="3" bg="gray.60" p="4" h="full" overflowY="auto">
        <Box
          top="0"
          position="fixed"
          width="600px" // Fixed width of the panel
          height="100vh" // Full viewport height
          bg="white"
          p="4"
          boxShadow="xl"
          transition="right 0.3s ease-in-out"
          zIndex="overlay" // Ensure it's above everything else
          right={activePanel === "setting" ? "0" : "-100%"}
          // ... other styles
        >
          <IconButton
            aria-label="Close panel"
            icon={<CloseIcon />}
            position="absolute"
            top="2"
            right="6"
            onClick={() => setActivePanel(false)}
          />
          {/*  just add a heading */}
          {/* Color editing content */}
        </Box>
        <Box
          top="0"
          position="fixed"
          width="600px" // absolute"width of the panel
          height="100vh" // Full viewport height
          bg="white"
          p="4"
          boxShadow="xl"
          transition="right 0.3s ease-in-out"
          zIndex="overlay" // Ensure it's above everything else
          right={activePanel === "edit" ? "0" : "-100%"}
          // ... other styles
        >
          <IconButton
            aria-label="Close panel"
            icon={<CloseIcon />}
            position="absolute"
            top="2"
            right="6"
            onClick={() => setActivePanel(false)}
          />

          {/* Chart settings form */}
          <Flex direction="column" overflowY="auto" p="4">
            {/* Title Input */}
            <FormControl id="chart-title" my="4">
              <FormLabel>Chart Title</FormLabel>
              <Input
                value={chartOptions.title.text}
                onChange={(e) =>
                  updateChartOption("title.text", e.target.value)
                }
              />
            </FormControl>

            {/* Axis Title Inputs */}
            <FormControl id="x-axis-title" my="4">
              <FormLabel>X-Axis Title</FormLabel>
              <Input
                value={chartOptions.xAxis.name}
                type="text"
                onChange={(e) =>
                  updateChartOption("xAxis.name", e.target.value)
                }
              />
            </FormControl>

            <FormControl id="y-axis-title" my="4">
              <FormLabel>Y-Axis Title</FormLabel>
              <Input
                value={chartOptions.yAxis.name}
                type="text"
                onChange={(e) =>
                  setChartOptions({
                    ...chartOptions,
                    yAxis: { ...chartOptions.yAxis, name: e.target.value },
                  })
                }
              />
            </FormControl>
            <FormControl id="y-axis-name-gap" my="4">
              <FormLabel>
                Y-Axis Name Gap: {chartOptions.yAxis.nameGap}
              </FormLabel>
              <Slider
                defaultValue={chartOptions.yAxis.nameGap}
                min={0}
                colorScheme="orange"
                size={"lg"}
                max={100}
                onChange={(val) => updateChartOption("yAxis.nameGap", val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>

            <FormControl id="x-axis-name-gap" my="4">
              <FormLabel>
                X-Axis Name Gap: {chartOptions.xAxis.nameGap}
              </FormLabel>
              <Slider
                defaultValue={chartOptions.xAxis.nameGap}
                min={0}
                size={"lg"}
                colorScheme="orange"
                max={100}
                onChange={(val) => updateChartOption("xAxis.nameGap", val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>

            {/* ... Add more controls for other properties like color scheme, legend, tooltip, etc. */}
          </Flex>
        </Box>
        <Box
          top="0"
          position="fixed"
          width="600px" // absolute"width of the panel
          height="100vh" // Full viewport height
          bg="white"
          p="4"
          boxShadow="xl"
          transition="right 0.3s ease-in-out"
          zIndex="overlay" // Ensure it's above everything else
          right={activePanel === "size" ? "0" : "-100%"}
          // ... other styles
        >
          <IconButton
            aria-label="Close panel"
            icon={<CloseIcon />}
            position="absolute"
            top="2"
            right="6"
            onClick={() => setActivePanel(false)}
          />

          {/* Color editing content */}
        </Box>
        <Box
          top="0"
          position="fixed"
          width="600px" // Fixed width of the panel
          height="100vh" // Full viewport height
          bg="white"
          p="4"
          boxShadow="xl"
          transition="right 0.3s ease-in-out"
          zIndex="overlay" // Ensure it's above everything else
          right={activePanel === "other" ? "0" : "-100%"}
          // ... other styles
        >
          <IconButton
            aria-label="Close panel"
            icon={<CloseIcon />}
            position="absolute"
            top="2"
            right="6"
            onClick={() => setActivePanel(false)}
          />
          {/*  just add a heading */}

          {/* Color editing content */}
        </Box>
        <Flex direction="column" h="100%">
          <Box flex="1" overflowY="auto">
            {" "}
            {/* Chat messages would go here */}
          </Box>
          <Flex as="form">
            <Input
              focusBorderColor="orange.400"
              placeholder="Type a message..."
            />
            <Button colorScheme="orange" ml="2">
              Go
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default EditorPage;