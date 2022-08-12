//react imports
import React from "react";

//chakra ui imports
import { Stack, useColorModeValue } from "@chakra-ui/react";

//main function
const TaskCard = ({ children }) => {
  //return from main function
  return (
    <Stack
      cursor={"pointer"}
      borderWidth="1px"
      borderRadius="lg"
      w={{ sm: "100%", md: "272px" }}
      height={{ sm: "100%", md: "100%" }}
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      padding={4}
      direction={"column"}
      w="100%"
    >
      {children}
    </Stack>
  );
};

export default TaskCard;
