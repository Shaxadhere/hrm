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
  RadioGroup,
  Radio,
  SimpleGrid,
} from "@chakra-ui/react";

const FormRadio = (props) => {
  return (
    <FormControl py={props.py || 2} px={props.px}>
      <FormLabel fontSize={props.lableFontSize || 12} htmlFor={props.id}>
        {props.label}
        {props.required && <chakra.span color="red">*</chakra.span>}
      </FormLabel>
      <RadioGroup
        mt={3}
        defaultValue={props.defaultValue}
        name={props.name ? props.name : ""}
        onChange={props.onChange}
      >
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }}>
          {props.options.map((item) => (
            <Radio size={"sm"} value={item.value}>
              {item.label}
            </Radio>
          ))}
        </SimpleGrid>
      </RadioGroup>
      <FormHelperText
        color={props.helpercolor || "gray.400"}
        fontSize={props.helperFontSize || 12}
      >
        {props.helpertext}
      </FormHelperText>
    </FormControl>
  );
};

export default FormRadio;
