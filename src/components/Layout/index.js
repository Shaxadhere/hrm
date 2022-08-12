//react imports
import React from "react";

//chakra ui imports
import {
  Box,
  useColorModeValue,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  Drawer,
} from "@chakra-ui/react";

//global component imports
import Sidebar from "../Sidebar";
import Header from "../Header";

//main function
const Layout = (props) => {
  //initialising variables and states
  const sidebar = useDisclosure();

  //setting page title
  document.title = props.title;

  //return from main function
  return (
    <Box>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <Sidebar
          title={props.title}
          activetab={props.activetab}
          display={{ base: "none", md: "unset" }}
        />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <Sidebar w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Header onOpen={sidebar.onOpen} title={props.title} />
          <Box as="main" p={props.p || 30}>
            {props.children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
