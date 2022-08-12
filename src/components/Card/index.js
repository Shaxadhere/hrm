import React from "react";
import {
  Stack,
  useColorModeValue,
  Heading,
  Flex,
  Box,
  Button,
  Select,
} from "@chakra-ui/react";

const Card = (props) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={
        props.boxShadow
          ? props.boxShadow
          : "0px 35px 160px 0px rgb(0 0 0 / 20%)"
      }
      rounded={"lg"}
      p={props.cardinnerspacing ? props.cardinnerspacing : 5}
      {...props}
    >
      {(props.cardtitle || props.cardactions) && (
        <Flex justifyContent={"space-between"}>
          {props.cardtitle && (
            <Heading
              color={useColorModeValue("gray.600")}
              as={"h2"}
              size={props.titlefontsize ? props.titlefontsize : "sm"}
              fontWeight={
                props.titlefontweight ? props.titlefontweight : "bolder"
              }
            >
              {props.cardtitle}
            </Heading>
          )}
          {props.cardactions}
        </Flex>
      )}
      {props.children}
    </Stack>
  );
};

export default Card;
