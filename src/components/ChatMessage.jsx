import { Box,Avatar, Text,Wrap,WrapItem, Button, useColorModeValue } from "@chakra-ui/react";
import ReactECharts from "echarts-for-react";
function ChatMessage({ message, isAssistant, type = "text" }) {
  const bgColor = useColorModeValue("orange.400", "orange.900");
  const color = useColorModeValue("white", "white");

  const renderContent = () => {
    switch (type) {
      case "code":
        return <pre>{message}</pre>;
      case "chart":
        return (
          <ReactECharts
            option={message}
            style={{ height: "600px", width: "100%" }}
          />
        );
      case "button":
        return <Button onClick={() => alert(message)}>{message}</Button>;
      default:
        return <Text>{message}</Text>;
    }
  };

  return (
    <Box
      bg={isAssistant ? bgColor : "gray.200"}
      color={isAssistant ? color : "inherit"}
      borderRadius="md"
      p={2}
      mb={2}
      alignSelf={isAssistant ? "flex-end" : "flex-start"}
    >
      <Wrap>
        <WrapItem>

      {/* <Avatar name={isAssistant ? "Assistant" : "User"} size="sm" mr={2} /> */}
      {/* <span>&nbsp;</span> */}
      {renderContent()}
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default ChatMessage;
