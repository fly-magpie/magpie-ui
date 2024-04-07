import React from "react";
import {
  Box,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Avatar,
  Text,
  IconButton,
  Icon,
  useToken,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { ChatIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import ChatMessage from "../components/ChatMessage";

function Assiatant() {
  const location = useLocation();
  const inputValue = location.state?.inputValue;

  const [space] = useToken("space", [4]); // Fetch spacing value from theme, adjust the index for larger sizes
  const bgColor = useColorModeValue("gray.100", "gray.800");
  // const chatBg = useColorModeValue("white", "gray.700");
  const chatInputBg = useColorModeValue("gray.200", "gray.600");
  const [messages, setMessages] = useState([
    inputValue
      ? { text: inputValue, isAssistant: false }
      : {
          text: "Hello, I'm Magpie!",
          isAssistant: true,
        },
  ]); // State to hold chat messages
  const [newMessage, setNewMessage] = useState("");

  const inputRef = useRef();

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: newMessage, isAssistant: false }]);
    setNewMessage("");
    inputRef.current.focus();
  };

  return (
    <Flex direction="column" bg={bgColor} minH="100vh" pt={20}>
      {/* Add spacer to push everything to bottom */}
      {/* <Spacer /> */}
      <VStack spacing={2} align="stretch" flexGrow={1}>
        <Flex
          direction="column"
          // bg={chatBg}
          p={6}
          borderRadius="lg"
          boxShadow="base"
          flex="1"
          overflowY="auto"
          justifyContent="flex-start"
        >
          {/* <ChatMessage message="Hello, I'm Magpie!" isAssistant={true} /> */}
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isAssistant={message.isAssistant}
            />
          ))}
          {/* Other chat messages go here */}
        </Flex>
      </VStack>
      {/* Fixed Chat Input at the bottom */}
      <Flex as="form" p={4} boxShadow="base" align="center" bg={bgColor}>
        <InputGroup size="md" mt={6}>
          <Input
            pr="4.5rem"
            ref={inputRef}
            value={newMessage}
            onChange={handleNewMessageChange}
            type="text"
            placeholder="Send Message to Magpie..."
            bg={chatInputBg}
          />
          <InputRightElement width="4.5rem">
            <Icon
              as={ArrowForwardIcon}
              w={6}
              h={6}
              cursor="pointer"
              onClick={handleSendMessage}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
}

export default Assiatant;
