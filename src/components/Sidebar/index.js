//react imports
import React from "react";

//chakra ui imports
import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Image,
  useDisclosure,
  Collapse,
  chakra,
} from "@chakra-ui/react";

//icon imports
import {
  BiHome,
  BiFingerprint,
  BiLogIn,
  BiCaretRight,
  BiCaretDown,
  BiCalendarEvent,
  BiSitemap,
  BiCalendar,
  BiCalendarStar,
} from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { AiOutlineTeam, AiOutlineUnorderedList } from "react-icons/ai";
import { BsListCheck, BsListStars, BsListOl, BsListTask } from "react-icons/bs";

//global components import
import NavItem from "../NavItem";

//logo import
import Logo from "../../assets/images/logo.png";

//main function
const Sidebar = (props) => {
  //initiating variables and states
  const onBoardingToggle = useDisclosure();
  const teamsToggle = useDisclosure();
  const leavesToggle = useDisclosure();
  const attendanceToggle = useDisclosure();

  //return from main function
  return (
    <Box
      boxShadow={"lg"}
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("gray.600", "white")}
          fontWeight="semibold"
        >
          <Image w={"100px"} src={Logo} />
        </Text>
      </Flex>
      <Flex
        pt={3}
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem
          icon={BiHome}
          isActive={props.activetab == "Dashboard" ? true : false}
          href="/dashboard"
        >
          Dashboard
        </NavItem>
        <NavItem
          icon={BsPeople}
          isActive={props.activetab == "Employees" ? true : false}
          href="/employees"
        >
          Employees
        </NavItem>
        <NavItem
          icon={BiLogIn}
          iconsize={5}
          mx={"13px"}
          isActive={props.activetab == "Onboarding" ? true : false}
          onClick={onBoardingToggle.onToggle}
        >
          Onboarding
          <chakra.span w={"100%"} display={"flex"} justifyContent={"right"}>
            {onBoardingToggle.isOpen ? <BiCaretDown /> : <BiCaretRight />}
          </chakra.span>
        </NavItem>
        <Collapse in={onBoardingToggle.isOpen}>
          <NavItem
            pl="7"
            icon={AiOutlineUnorderedList}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "TalentPool" ? true : false}
            href="/onboarding/talent-pool"
          >
            Talent Pool
          </NavItem>
          <NavItem
            pl="7"
            icon={BsListOl}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "ShortListed" ? true : false}
            href="/onboarding/short-listed"
          >
            Short Listed
          </NavItem>
          <NavItem
            pl="7"
            icon={BsListTask}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "Interviews" ? true : false}
            href="/onboarding/interviews"
          >
            Interviews
          </NavItem>
          <NavItem
            pl="7"
            icon={BsListStars}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "Selected" ? true : false}
            href="/onboarding/selected"
          >
            Selected
          </NavItem>
        </Collapse>
        <NavItem
          icon={AiOutlineTeam}
          iconsize={5}
          mx={"13px"}
          isActive={props.activetab == "Onboarding" ? true : false}
          onClick={teamsToggle.onToggle}
        >
          Teams
          <chakra.span w={"100%"} display={"flex"} justifyContent={"right"}>
            {teamsToggle.isOpen ? <BiCaretDown /> : <BiCaretRight />}
          </chakra.span>
        </NavItem>
        <Collapse in={teamsToggle.isOpen}>
          <NavItem
            pl="7"
            icon={AiOutlineTeam}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "Teams" ? true : false}
            href="/teams"
          >
            All Teams
          </NavItem>
          <NavItem
            pl="7"
            icon={BiSitemap}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "Hierarchy" ? true : false}
            href="/teams/hierarchy"
          >
            Teams Hierarchy
          </NavItem>
          <NavItem
            pl="7"
            icon={BsListCheck}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "Permissions" ? true : false}
            href="/teams/permissions"
          >
            Permissions
          </NavItem>
        </Collapse>
        <NavItem
          icon={BiCalendarEvent}
          iconsize={5}
          mx={"13px"}
          isActive={props.activetab == "Onboarding" ? true : false}
          onClick={leavesToggle.onToggle}
        >
          Leaves
          <chakra.span w={"100%"} display={"flex"} justifyContent={"right"}>
            {leavesToggle.isOpen ? <BiCaretDown /> : <BiCaretRight />}
          </chakra.span>
        </NavItem>
        <Collapse in={leavesToggle.isOpen}>
          <NavItem
            pl="7"
            icon={BiCalendarEvent}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "AllLeaves" ? true : false}
            href="/leaves"
          >
            All Leaves
          </NavItem>
          <NavItem
            pl="7"
            icon={BiCalendarStar}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "MyLeaves" ? true : false}
            href="/leaves/my-leaves"
          >
            My Leaves
          </NavItem>
          <NavItem
            pl="7"
            icon={BiCalendar}
            iconsize={5}
            mx={"13px"}
            isActive={props.activetab == "LeaveRequests" ? true : false}
            href="/leaves/requests"
          >
            Leave Requests
          </NavItem>
        </Collapse>
        <NavItem
          icon={BiFingerprint}
          mx={"13px"}
          isActive={props.activetab == "Onboarding" ? true : false}
          onClick={attendanceToggle.onToggle}
        >
          Attendance
          <chakra.span w={"100%"} display={"flex"} justifyContent={"right"}>
            {attendanceToggle.isOpen ? <BiCaretDown /> : <BiCaretRight />}
          </chakra.span>
        </NavItem>
        <Collapse in={attendanceToggle.isOpen}>
          <NavItem
            pl="7"
            icon={BiFingerprint}
            mx={"13px"}
            isActive={props.activetab == "Attendance" ? true : false}
            href="/attendance"
          >
            All Attendance
          </NavItem>
          <NavItem
            pl="7"
            icon={BiCalendar}
            mx={"13px"}
            isActive={props.activetab == "ShiftManagement" ? true : false}
            href="/attendance/shift-management"
          >
            Shift Management
          </NavItem>
        </Collapse>
      </Flex>
    </Box>
  );
};

export default Sidebar;
