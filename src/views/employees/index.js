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
  chakra,
  useDisclosure,
} from "@chakra-ui/react";

//icon improts
import {
  BiSearchAlt,
  BiPlus,
  BiDotsVerticalRounded,
  BiEditAlt,
  BiExit,
  BiExport,
} from "react-icons/bi";
import { GrDocumentExcel, GrDocumentPdf } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";

//global components imports
import FormButton from "../../components/FormButton";
import InformationModal from "../../components/InformationModal";

//main function
const Employees = () => {
  //initialising variables and states
  const modal = useDisclosure();
  const [modalData, setModalData] = useState({});
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
      contact: "03030255544",
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
      contact: "03030255544",
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
      contact: "03030244844",
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
      contact: "03030255544",
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
      contact: "03030255544",
      salary: 500000,
    },
  ]);
  const [filter, setFilter] = useState([...employees]);

  //handle filter function
  const handleFilter = (e) => {
    let search = e.target.value;
    setFilter(
      employees.filter((employee) => {
        return employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
    );
  };

  //handle sort function
  const handleSort = (e) => {
    let sort = e.target.value;
    let result = employees.sort((a, b) => {
      if (sort == "Name") {
        return a.name.localeCompare(b.name);
      } else if (sort == "Designation") {
        return a.designation.localeCompare(b.designation);
      }
    });
    setFilter(result);
  };

  //return from main function
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
            Company Employees List
          </Heading>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex float={"right"}>
            <InputGroup
              w="46"
              size={"sm"}
              display={{ base: "none", md: "flex" }}
            >
              <Input
                borderRadius={7}
                placeholder="Search"
                _focus={{ borderColor: "gray.300" }}
                fontSize={14}
                onChange={(e) => handleFilter(e)}
              />
              <InputLeftElement
                color="gray.400"
                size={"sm"}
                children={<BiSearchAlt size={20} />}
              />
            </InputGroup>
            <Select
              w={"fit-content"}
              minW={"130px"}
              placeholder="Sort By"
              size={"sm"}
              mx={2}
              background={"transparent"}
              border={"1px solid"}
              borderRadius={12}
              borderColor={useColorModeValue("gray.200", "white")}
              _focus={{ borderColor: useColorModeValue("gray.200", "white") }}
              fontSize={14}
              onChange={(e) => handleSort(e)}
            >
              <option value="Name">Name</option>
              <option value="Designation">Designation</option>
            </Select>
            <Menu>
              <MenuButton
                mx={2}
                background={"transparent"}
                border={"1px solid"}
                color={useColorModeValue("gray.600")}
                borderColor={useColorModeValue("gray.200")}
                borderRadius={12}
                size={"sm"}
                px={4}
                fontSize={14}
                as={Button}
              >
                Export
              </MenuButton>
              <MenuList>
                <MenuItem
                  color={useColorModeValue("gray.600", "gray.200")}
                  fontSize={14}
                >
                  <GrDocumentExcel size={16} />
                  <Box ml={2}>Export to Excel</Box>
                </MenuItem>
                <MenuItem
                  color={useColorModeValue("gray.600", "gray.200")}
                  fontSize={14}
                >
                  <GrDocumentPdf size={16} />
                  <Box ml={2}>Export to PDF</Box>
                </MenuItem>
              </MenuList>
            </Menu>
            <FormButton
              icon={BiPlus}
              onClick={() => {
                navigate("/add-employee");
              }}
            >
              Add Employee
            </FormButton>
          </Flex>
        </GridItem>
      </Grid>

      {/* Table Section */}
      <Box>
        <Table variant="striped">
          <Thead background={useColorModeValue("#edecec", "gray.900")}>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Designation</Th>
              <Th>contact</Th>
              <Th>Requests</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {filter?.map((item, index) => (
              <Tr key={index} fontSize={14}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.designation}</Td>
                <Td>{item.contact}</Td>
                <Td textAlign={"center"}>{item.requests}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={Button}
                      size={"sm"}
                      color={useColorModeValue("gray.600")}
                      fontSize={14}
                      _focus={{ boxShadow: "none" }}
                    >
                      <BiDotsVerticalRounded size={20} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        color={useColorModeValue("gray.600", "gray.200")}
                        fontSize={12}
                        onClick={() => {
                          modal.onOpen();
                          setModalData(item);
                        }}
                      >
                        <AiFillEye size={17} style={{ paddingRight: "3px" }} />
                        View
                      </MenuItem>
                      <MenuItem
                        color={useColorModeValue("gray.600", "gray.200")}
                        fontSize={12}
                      >
                        <BiEditAlt size={17} style={{ paddingRight: "3px" }} />
                        Edit
                      </MenuItem>
                      <MenuItem
                        color={useColorModeValue("gray.600", "gray.200")}
                        fontSize={12}
                      >
                        <BiExit size={17} style={{ paddingRight: "3px" }} />
                        Offboard
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <InformationModal
          onOpen={modal.onOpen}
          isOpen={modal.isOpen}
          onClose={modal.onClose}
          modalData={modalData}
        />
      </Box>
    </>
  );
};

export default Employees;
