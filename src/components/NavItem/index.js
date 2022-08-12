//react imports
import React from "react";

//router imports
import { Link } from "react-router-dom";

//chakra ui imports
import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";

//main function
const NavItem = (props) => {
  //deconstructing props
  const { icon, children, isActive, ...rest } = props;
  const hoverBg = useColorModeValue("#ae4343", "gray.900");
  const hoverColor = useColorModeValue("white", "gray.400");
  const bg = useColorModeValue("#ae0000", "gray.600");
  const activeColor = useColorModeValue("white", "white");
  const inActiveColor = useColorModeValue("gray.500", "gray.400");

  //return from main function
  return (
    <>
      {props.href ? (
        <Link to={props.href ? props.href : "/"}>
          <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            margin={"5px 20px"}
            borderRadius={12}
            _hover={{
              bg: hoverBg,
              color: hoverColor,
            }}
            role="group"
            fontWeight="normal"
            transition=".15s ease"
            {...rest}
            bg={isActive ? bg : "inherit"}
            color={isActive ? activeColor : inActiveColor}
          >
            {icon && (
              <Icon
                mx="2"
                color={isActive ? "white" : "#8891a1"}
                boxSize={props.iconsize ? props.iconsize : 4}
                _groupHover={{
                  color: "white",
                }}
                as={icon}
                {...props.iconProps}
              />
            )}
            {children}
          </Flex>
        </Link>
      ) : (
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          margin={"5px 20px"}
          borderRadius={12}
          _hover={{
            bg: hoverBg,
            color: hoverColor,
          }}
          role="group"
          fontWeight="normal"
          transition=".15s ease"
          {...rest}
          bg={isActive ? bg : "inherit"}
          color={isActive ? activeColor : inActiveColor}
        >
          {icon && (
            <Icon
              mx="2"
              color={isActive ? "white" : "#8891a1"}
              boxSize={props.iconsize ? props.iconsize : 4}
              _groupHover={{
                color: "white",
              }}
              as={icon}
              {...props.iconProps}
            />
          )}
          {children}
        </Flex>
      )}
    </>
  );
};

export default NavItem;
