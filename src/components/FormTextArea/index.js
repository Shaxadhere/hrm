//react imports
import React from "react";

//chakra ui imports
import {
  FormControl,
  FormLabel,
  chakra,
  Input,
  FormHelperText,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";

const FormTextArea = (props) => {
  return (
    <FormControl py={props.py || 2} px={props.px}>
      <FormLabel fontSize={props.lableFontSize || 12} htmlFor={props.id}>
        {props.label}
        {props.required && <chakra.span color="red">*</chakra.span>}
      </FormLabel>
      <Textarea
        size={props.inputSize || "sm"}
        id={props.id}
        placeholder={props.placeholder}
        _focus={{
          boxShadow: "none",
          borderColor: useColorModeValue("inherit", "white"),
        }}
        name={props.name ? props.name : ""}
        {...props}
      />
      <FormHelperText
        color={props.helpercolor || "gray.400"}
        fontSize={props.helperFontSize || 12}
      >
        {props.helpertext}
      </FormHelperText>
    </FormControl>
  );
};

export default FormTextArea;
