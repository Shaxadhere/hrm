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
} from "@chakra-ui/react";

//input mask imports
import InputMask from "react-input-mask";

//main function
const FormInput = (props) => {
  //return from main function
  return (
    <FormControl py={props.py || 2} px={props.px}>
      <FormLabel fontSize={props.lableFontSize || 12} htmlFor={props.id}>
        {props.label}
        {props.required && <chakra.span color="red">*</chakra.span>}
      </FormLabel>
      <Input
        size={props.inputSize || "sm"}
        id={props.id}
        type={props.type || "text"}
        placeholder={props.placeholder}
        _focus={{
          boxShadow: "none",
          borderColor: useColorModeValue("inherit", "white"),
        }}
        as={props.mask ? InputMask : Input}
        mask={props.mask ? props.mask : null}
        maskChar={null}
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

export default FormInput;
