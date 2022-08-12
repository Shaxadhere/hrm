import React from "react";
import { Button, useColorModeValue, Icon } from "@chakra-ui/react";

const FormButton = (props) => {
  return (
    <Button
      float={props.float ? props.float : "right"}
      fontSize={props.fontSize ? props.fontSize : 14}
      bg={props.bg ? props.bg : useColorModeValue("#ae0000", "gray.800")}
      color={props.color ? props.color : "white"}
      size={props.size ? props.size : "sm"}
      w={props.w ? props.w : "fit-content"}
      onClick={props.onClick}
      _hover={{
        bg: props.bg ? props.bg : useColorModeValue("#ae0000", "gray.800"),
      }}
      _focus={{
        bg: props.bg ? props.bg : useColorModeValue("#ae0000", "gray.800"),
      }}
      {...props}
    >
      {props.icon && (
        <Icon
          marginRight={1}
          boxSize={props.iconsize ? props.iconsize : 4}
          _groupHover={{
            color: "white",
          }}
          as={props.icon}
          {...props.iconProps}
        />
      )}
      {props.children}
    </Button>
  );
};

export default FormButton;
