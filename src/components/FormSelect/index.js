//react imports
import React from "react";

//chakra ui imports
import {
  FormControl,
  FormLabel,
  chakra,
  Select,
  useColorModeValue,
  FormHelperText,
} from "@chakra-ui/react";
import { Select as ReactSelect } from "chakra-react-select";

//main function
const FormSelect = (props) => {
  //return from main function
  return (
    <FormControl py={2} px={props.px}>
      <FormLabel fontSize={props.labelFontSize || 12} htmlFor={props.id}>
        {props.label}
        {props.required && <chakra.span color="red">*</chakra.span>}
      </FormLabel>
      {props.searchEnabled ? (
        <ReactSelect
          name={props.name ? props.name : ""}
          size={props.inputSize || "sm"}
          id={props.id}
          placeholder={props.placeholder}
          _focus={{
            boxShadow: "none",
            borderColor: useColorModeValue("inherit", "white"),
          }}
          colorScheme="#ae0000"
          options={props.options}
          {...props}
        />
      ) : (
        <Select
          name={props.name ? props.name : ""}
          placeholder={props.placeholder}
          size={props.size || "sm"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          _focus={{
            boxShadow: "none",
            borderColor: useColorModeValue("gray.200", "white"),
          }}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        >
          {props.options.map((item, i) => (
            <option key={i} value={item.value || item}>
              {item.label || item}
            </option>
          ))}
        </Select>
      )}
      <FormHelperText
        color={props.helpercolor || "gray.400"}
        fontSize={props.helpertextFontSize || 12}
      >
        {props.helpertext}
      </FormHelperText>
    </FormControl>
  );
};

export default FormSelect;
