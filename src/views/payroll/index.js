//react imports
import React, { useEffect } from "react";

//chakra ui imports
import {
  useColorModeValue,
  Flex,
  Heading,
  Text,
  Box,
  Button,
  SimpleGrid,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Avatar,
  chakra,
  Icon,
} from "@chakra-ui/react";

//icons imports
import {
  BiPlus,
  BiDownload,
  BiSlider,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//global imports
import PaginationButton from "../../components/PaginationButton";

//main function
const Payroll = () => {
  const data = [
    {
      id: 1,
      name: "Shehzad Ahmed",
      age: 21,
      email: "shehzad.finesols@gmail.com",
      designation: "React JS Developer",
      phone: "03030255544",
      salary: "100000",
    },
    {
      id: 2,
      name: "Hafeez",
      age: 22,
      email: "hafeez@april.biz",
      designation: "UI UX Developer",
      phone: "03030255544",
      salary: "600000",
    },
    {
      id: 3,
      name: "Waqas Khan",
      age: "25",
      email: "waqas@april.biz",
      designation: "React Native Developer",
      phone: "03030244844",
      salary: "800000",
    },
    {
      id: 4,
      name: "Umer Ali",
      age: 22,
      email: "umer@april.biz",
      designation: "Node JS Developer",
      phone: "03030255544",
      salary: "500000",
    },
    {
      id: 5,
      name: "Ali Akbar",
      age: 22,
      email: "ali@april.biz",
      designation: "Wordpress Developer",
      phone: "03030255544",
      salary: "500000",
    },
  ];

  //return from main function
  return (
    <>
      <SimpleGrid
        columns={2}
        borderBottom={"1px solid"}
        borderColor={useColorModeValue("#e7e7e7", "#4e4d4d")}
      >
        <Box>
          <Heading
            color={useColorModeValue("gray.600", "white")}
            as="h4"
            size="sm"
          >
            Payroll Summary
          </Heading>
          <Text color={"gray.400"} fontSize={12} py={2}>
            Here's your report for Jan,2022
          </Text>
        </Box>
        <Box>
          <Button
            float={"right"}
            fontSize={14}
            bg={useColorModeValue("#ae0000", "gray.800")}
            color={"white"}
          >
            <BiPlus style={{ marginRight: 3 }} />
            Add Employee
          </Button>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={2} py={4}>
        <Box w={"fit-content"}>
          <Flex>
            <Text
              fontSize={12}
              color={useColorModeValue("gray.500", "white")}
              placeSelf={"center"}
              paddingRight={2}
            >
              Show
            </Text>
            <Select
              placeholder="Select"
              size={"md"}
              w={"max-content"}
              defaultValue={10}
              borderRadius={8}
              borderColor={useColorModeValue("gray.200", "white")}
              _focus={{ borderColor: useColorModeValue("gray.200", "white") }}
            >
              <option value="All">All</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </Select>
            <Text
              fontSize={12}
              color={useColorModeValue("gray.500", "white")}
              placeSelf={"center"}
              paddingLeft={2}
            >
              Entries
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex justifyContent={"right"}>
            <Button
              mx={2}
              background={"transparent"}
              border={"1px solid"}
              borderColor={useColorModeValue("gray.200")}
              borderRadius={12}
              color={useColorModeValue("gray.600")}
              fontSize={14}
            >
              <BiSlider size={20} style={{ paddingRight: 4 }} />
              Sort & Filter
            </Button>
            <Button
              mx={2}
              background={"transparent"}
              border={"1px solid"}
              color={useColorModeValue("gray.600")}
              borderColor={useColorModeValue("gray.200")}
              borderRadius={12}
              fontSize={14}
            >
              <BiDownload size={20} style={{ paddingRight: 4 }} />
              Export
            </Button>
            <Select
              w={"auto"}
              placeholder="Select"
              size={"md"}
              mx={2}
              background={"transparent"}
              border={"1px solid"}
              borderRadius={12}
              borderColor={useColorModeValue("gray.200", "white")}
              _focus={{ borderColor: useColorModeValue("gray.200", "white") }}
              fontSize={14}
              defaultValue={"Jan"}
            >
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </Select>
          </Flex>
        </Box>
      </SimpleGrid>
      <Box>
        <Table variant="striped">
          <Thead background={useColorModeValue("#edecec", "gray.900")}>
            <Tr>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Email</Th>
              <Th>Designation</Th>
              <Th>Phone</Th>
              <Th>Salary</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index} fontSize={14}>
                <Td>
                  <Flex alignItems={"center"}>
                    <Avatar
                      ml="4"
                      size="sm"
                      name="anubra266"
                      src="https://avatars.githubusercontent.com/u/38428144?v=4"
                      cursor="pointer"
                    />
                    <div>{item.name}</div>
                  </Flex>
                </Td>
                <Td>{item.age}</Td>
                <Td>{item.email}</Td>
                <Td>{item.designation}</Td>
                <Td>{item.phone}</Td>
                <Td>{item.salary}</Td>
                <Td>
                  <Button
                    background={"transparent"}
                    borderColor={"transparent"}
                    color={useColorModeValue("gray.600")}
                    fontSize={14}
                  >
                    <BiDotsVerticalRounded
                      size={20}
                      style={{ paddingRight: 4 }}
                    />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Payroll;
