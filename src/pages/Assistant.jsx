// Assistant.js

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Icon,
  useToken,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChatIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import ChatMessage from "../components/ChatMessage";

function Assistant() {
  const location = useLocation();
  const inputValue = location.state?.inputValue;
  const [isAssistantThinking, setIsAssistantThinking] = useState(false);
  const [space] = useToken("space", [4]); // Fetch spacing value from theme, adjust the index for larger sizes
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const [messages, setMessages] = useState([
    {
      message: "Hello I am Magpie!, how can I help you today?",
      isAssistant: true,
    },
  ]);
  const chatInputBg = useColorModeValue("gray.200", "gray.600");
  const [newMessage, setNewMessage] = useState("");

  const inputRef = useRef();


  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    setMessages([
      ...messages,
      { message: newMessage, type: "text", isAssistant: false },
    ]);
    setNewMessage("");
    inputRef.current.focus();

    // Simulate an API response
    setIsAssistantThinking(true);
    setTimeout(() => {
      setIsAssistantThinking(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: "This is a simulated API response.", isAssistant: true },
      ]);
    }, 2000); // delay of 2 seconds
  };
  return (
    <Flex
      direction="column"
      height="100vh"
      bg={bgColor}
      padding={space}
      justifyContent="space-between"
    >
      <VStack spacing={4} align="stretch" overflowY="auto">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            type={message.type}
            isAssistant={message.isAssistant}
          />
        ))}
        {isAssistantThinking && (
          <ChatMessage
            message={"Assistant is think ..."}
            type={"text"}
            isAssistant={true}
          />
        )}
      </VStack>
      <form onSubmit={handleSendMessage}>
        <InputGroup size="md">
          <Input
            ref={inputRef}
            pr="4.5rem"
            type="text"
            placeholder="Type your message..."
            bg={chatInputBg}
            value={newMessage}
            onChange={handleNewMessageChange}
          />
          <InputRightElement width="4.5rem">
            <Icon
              as={ArrowForwardIcon}
              color="blue.500"
              w={5}
              h={5}
              onClick={handleSendMessage}
            />
          </InputRightElement>
        </InputGroup>
      </form>
    </Flex>
  );
}

export default Assistant;
