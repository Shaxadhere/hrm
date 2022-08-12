import React from "react";
//chakra ui imports
import {
  FormControl,
  FormLabel,
  chakra,
  FormHelperText,
  useColorModeValue,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";

//component css file import
import "./form-multiselect.css";

//main function
const FormMultiSelect = (props) => {
  //return from main function
  return (
    <FormControl py={props.py || 2} px={props.px}>
      <FormLabel fontSize={props.lableFontSize || 12} htmlFor={props.id}>
        {props.label}
        {props.required && <chakra.span color="red">*</chakra.span>}
      </FormLabel>
      <Select
        size={props.inputSize || "sm"}
        id={props.id}
        placeholder={props.placeholder}
        _focus={{
          boxShadow: "none",
          borderColor: useColorModeValue("inherit", "white"),
        }}
        isMulti
        colorScheme="#ae0000"
        selectedOptionColor="#ae0000"
        options={props.options}
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

export default FormMultiSelect;
