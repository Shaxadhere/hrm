//react imports
import React from "react";

//chakra ui imports
import {
  Flex,
  Input,
  useColorModeValue,
  IconButton,
  InputGroup,
  InputRightElement,
  Avatar,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
} from "@chakra-ui/react";

//icon imports
import {
  BiSearchAlt,
  BiExit,
  BiUser,
  BiSun,
  BiMoon,
  BiMenu,
} from "react-icons/bi";

//main function
const Header = (props) => {
  //initialising variables and states
  const { colorMode, toggleColorMode } = useColorMode();

  //return from main function
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      bg={useColorModeValue("white", "gray.800")}
      h="14"
      boxShadow={"md"}
    >
      <IconButton
        aria-label="Menu"
        display={{ base: "inline-flex", md: "none" }}
        onClick={props.onOpen}
        icon={<BiMenu />}
        size="sm"
      />
      <Heading as="h3" size="md" color={useColorModeValue("gray.600", "white")}>
        {props.title ? props.title : "Dashboard"}
      </Heading>

      <Flex align="center">
        <InputGroup
          w="96"
          display={{ base: "none", md: "flex" }}
          border={"transparent"}
        >
          <Input
            placeholder="Search"
            _focus={{ borderColor: "gray.300" }}
            fontSize={14}
          />
          <InputRightElement
            color="gray.400"
            size={"sm"}
            children={<BiSearchAlt size={20} />}
          />
        </InputGroup>

        <Button
          onClick={toggleColorMode}
          color={useColorModeValue("gray.400", "white")}
          bg="transparent"
          _hover={{ background: "transparent" }}
          _focus={{ background: "transparent" }}
          _active={{ background: "transparent" }}
        >
          {colorMode === "light" ? <BiMoon size={20} /> : <BiSun size={20} />}
        </Button>

        <Menu>
          <MenuButton>
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/38428144?v=4"
              cursor="pointer"
            />
          </MenuButton>
          <MenuList>
            <MenuItem
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize={14}
            >
              <BiUser style={{ marginRight: 8 }} />
              Profile
            </MenuItem>
            <MenuItem
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize={14}
            >
              <BiExit style={{ marginRight: 8 }} />
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
