//react imports
import React from "react";

//router imports
import { useNavigate } from "react-router";

//chakra ui imports
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  FormHelperText,
  useColorModeValue,
  Checkbox,
  InputLeftAddon,
  InputGroup,
  Button,
} from "@chakra-ui/react";

//icons imports
import { BiEnvelope, BiLockAlt } from "react-icons/bi";

//Hero image import
import HeroImage from "../../assets/images/login.jfif";

//signin css
import "./signin.css";

//main function
const Signin = () => {
  // initialising variables and states
  const navigate = useNavigate();

  //return from main function
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
      <Box px={4} py={32} mx={{ base: "auto", md: 20, lg: 20, xl: 40 }}>
        <Heading as={"h1"} size={"lg"} fontSize={25}>
          Login
        </Heading>
        <Text fontSize={12} color={useColorModeValue("gray.500")}>
          Enter your credentials to continue
        </Text>

        <FormControl pt={5}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon children={<BiEnvelope />} />
            <Input
              id="email"
              type="email"
              size={"sm"}
              placeholder="your-name@example.com"
            />
          </InputGroup>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl pt={3}>
          <FormLabel htmlFor="email">Password</FormLabel>
          <InputGroup size={"sm"}>
            <InputLeftAddon children={<BiLockAlt />} />
            <Input
              id="email"
              type="password"
              size={"sm"}
              placeholder="******"
            />
          </InputGroup>
          <FormHelperText>Enter your password.</FormHelperText>
        </FormControl>

        <FormControl pt={4} fontSize={12}>
          <Checkbox
            className="remember-me"
            style={{ fontSize: 12 }}
            defaultIsChecked
          >
            Remember me
          </Checkbox>
        </FormControl>

        <FormControl pt={6}>
          <Button
            w="full"
            bg={useColorModeValue("#ae0000")}
            color={"white"}
            _focus={{ boxShadow: "none" }}
            _hover={{ background: "#ae0000" }}
            type="submit"
            onClick={() => navigate("/dashboard", { replace: true })}
          >
            Continue
          </Button>
        </FormControl>
      </Box>
      <Box
        w="full"
        h="container.sm"
        backgroundImage={`linear-gradient(0deg, rgb(255 59 45 / 66%),rgb(255 71 58 / 66%)),url(${HeroImage})`}
        bgPos="center"
        bgSize="cover"
      ></Box>
    </SimpleGrid>
  );
};

export default Signin;
