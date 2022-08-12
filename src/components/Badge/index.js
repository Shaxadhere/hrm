//react imports
import React from "react";

//chakra ui imports
import { chakra, useColorModeValue } from "@chakra-ui/react";

//main function
const Badge = (props) => {
  //return from main function
  return (
    <chakra.span
      fontSize={9}
      background={
        props.isdone ? useColorModeValue("#ae0000", "gray.700") : "gray.500"
      }
      color={"white"}
      padding={"2px 5px"}
      borderRadius={2}
      {...props}
    >
      {props.children}
    </chakra.span>
  );
};

export default Badge;
