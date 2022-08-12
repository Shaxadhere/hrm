//react imports
import React from "react";

//chakra ui imports
import { Box, useColorModeValue } from "@chakra-ui/react";

//main function
const Tab = (props) => {
  //return from main function
  return (
    <Box
      borderRadius={"7px 7px 0px 0px"}
      boxShadow={"-3px -3px 30px rgb(192 192 192 / 35%)"}
      mx={3}
      fontSize={14}
      fontWeight="semibold"
      padding={"10px 25px"}
      color={props.isactive ? "white" : "inherit"}
      bg={
        props.isactive
          ? useColorModeValue("#ae0000", "inherit")
          : useColorModeValue("white", "inherit")
      }
    >
      {props.children}
    </Box>
  );
};

export default Tab;
