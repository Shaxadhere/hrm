//react imports
import React from "react";

//chakra ui imports
import { chakra, useColorModeValue } from "@chakra-ui/react";

//main function
const PaginationButton = (props) => {
  //initialising active button colors
  const activeStyle = {
    bg: useColorModeValue("#ae0000", "gray.900"),
    color: useColorModeValue("white", "gray.200"),
  };

  //return from main function
  return (
    <chakra.button
      mx={1}
      px={4}
      py={2}
      rounded="md"
      bg={"transparent"}
      border="1px"
      borderColor={useColorModeValue("#e7e7e7", "#4e4d4d")}
      color={useColorModeValue("gray.700", "gray.200")}
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      fontSize={12}
      {...(props.active && activeStyle)}
    >
      {props.children}
    </chakra.button>
  );
};

export default PaginationButton;
