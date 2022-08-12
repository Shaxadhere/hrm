//react imports
import React from "react";

//chakra ui imports
import {
  Box,
  Center,
  Stack,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

//main function
const TaskList = (props) => {
  //return from main function
  return (
    <>
      <Box>
        <Center py={6} px={1}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "272px" }}
            height={{ sm: "100%", md: "100%" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"none"}
            direction="column"
            padding={4}
          >
            <Heading
              as={"h3"}
              size="xs"
              color={useColorModeValue("gray.600")}
              bg={useColorModeValue("white", "gray.900")}
            >
              {props.title}
            </Heading>
            {props.children}
          </Stack>
        </Center>
      </Box>
    </>
  );
};

export default TaskList;
