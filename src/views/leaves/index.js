//react imports
import React, { useState } from "react";

//router imports
import { useNavigate } from "react-router";

//chakra ui imports
import {
  useColorModeValue,
  Flex,
  Heading,
  Box,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputLeftElement,
  InputGroup,
  Input,
  Grid,
  GridItem,
} from "@chakra-ui/react";

//icon improts
import {
  BiSearchAlt,
  BiPlus,
  BiDotsVerticalRounded,
  BiEditAlt,
  BiExit,
} from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//global components imports
import PaginationButton from "../../components/PaginationButton";

const Leaves = () => {
  //initialising variables and states
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Shehzad Ahmed",
      age: 21,
      team: "Dev Team",
      requests: 2,
      email: "shehzad.finesols@gmail.com",
      designation: "React JS Developer",
      phone: "03030255544",
      salary: 100000,
    },
    {
      id: 2,
      name: "Hafeez",
      age: 22,
      team: "Graphic Design Team",
      requests: 0,
      email: "hafeez@april.biz",
      designation: "UI UX Developer",
      phone: "03030255544",
      salary: 600000,
    },
    {
      id: 3,
      name: "Waqas Khan",
      age: 25,
      team: "Dev Team",
      requests: 1,
      email: "waqas@april.biz",
      designation: "React Native Developer",
      phone: "03030244844",
      salary: 800000,
    },
    {
      id: 4,
      name: "Umer Ali",
      age: 22,
      team: "Sales Team",
      requests: 1,
      email: "umer@april.biz",
      designation: "Node JS Developer",
      phone: "03030255544",
      salary: 500000,
    },
    {
      id: 5,
      name: "Ali Akbar",
      age: 22,
      team: "Dev Team",
      requests: 1,
      email: "ali@april.biz",
      designation: "Wordpress Developer",
      phone: "03030255544",
      salary: 500000,
    },
  ]);

  const [leaves, setLeaves] = useState([
    {
      id: "001",
      leaveType: "Sick",
      employee: {
        fullName: "Shehzad Ahmed",
        picture: "mm.jpg",
      },
      numOfDays: 2,
      fromDate: "2022-02-12",
      toDate: "2022-02-14",
      allowedLeaves: 14,
      remainingLeaves: 12,
      reason:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
      leaveStatus: "Approved By TL",
      isAcceptedByMe: false,
      createdAt: "2022-02-06",
    },
    {
      id: "002",
      leaveType: "Sick",
      employee: {
        fullName: "Shehzad Ahmed",
        picture: "mm.jpg",
      },
      numOfDays: 2,
      fromDate: "2022-02-12",
      toDate: "2022-02-14",
      allowedLeaves: 14,
      remainingLeaves: 12,
      reason:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
      leaveStatus: "Approved By TL",
      isAcceptedByMe: false,
      createdAt: "2022-02-01",
    },
    {
      id: "002",
      leaveType: "Sick",
      employee: {
        fullName: "Shehzad Ahmed",
        picture: "mm.jpg",
      },
      numOfDays: 2,
      fromDate: "2022-02-12",
      toDate: "2022-02-14",
      allowedLeaves: 14,
      remainingLeaves: 12,
      reason:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
      leaveStatus: "Approved By TL",
      isAcceptedByMe: false,
      createdAt: "2022-02-01",
    },
    {
      id: "002",
      leaveType: "Sick",
      employee: {
        fullName: "Shehzad Ahmed",
        picture: "mm.jpg",
      },
      numOfDays: 2,
      fromDate: "2022-02-12",
      toDate: "2022-02-14",
      allowedLeaves: 14,
      remainingLeaves: 12,
      reason:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
      leaveStatus: "Approved By TL",
      isAcceptedByMe: false,
      createdAt: "2022-02-01",
    },
  ]);
  return (
    <>
      {/* Table Controls */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        borderBottom={"1px solid"}
        borderColor={useColorModeValue("#e7e7e7", "#4e4d4d")}
        py={3}
      >
        <GridItem>
          <Heading
            color={useColorModeValue("gray.600", "white")}
            as="h4"
            size="sm"
          >
            All Leaves
          </Heading>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex float={"right"}>
            <Select
              w={"fit-content"}
              minW={"130px"}
              placeholder="Sort by"
              size={"sm"}
              mx={2}
              background={"transparent"}
              border={"1px solid"}
              borderRadius={12}
              borderColor={useColorModeValue("gray.200", "white")}
              _focus={{ borderColor: useColorModeValue("gray.200", "white") }}
              fontSize={14}
            >
              <option value="Jan">Leave Type</option>
              <option value="Jan">Applied Date</option>
            </Select>
          </Flex>
        </GridItem>
      </Grid>

      {/* Table Section */}
      <Box>
        <Table variant="striped">
          <Thead background={useColorModeValue("#edecec", "gray.900")}>
            <Tr>
              <Th>ID</Th>
              <Th>Leave Type</Th>
              <Th>Applied Date</Th>
              <Th>Leave From</Th>
              <Th>Leave To</Th>
              <Th>Num Of Days</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {leaves?.map((item, index) => (
              <Tr key={index} fontSize={14}>
                <Td>{item.id}</Td>
                <Td>{item.leaveType} Leave</Td>
                <Td>{item.createdAt}</Td>
                <Td>{item.fromDate}</Td>
                <Td>{item.toDate}</Td>
                <Td textAlign={"center"}>{item.numOfDays}</Td>
                <Td>{item.leaveStatus}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Leaves;
