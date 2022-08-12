//react imports
import React, { useState } from "react";

//moment import
import moment from "moment";

//chakra ui imports
import {
  useColorModeValue,
  Flex,
  Box,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";

//icon improts
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdSchedule } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

//global components imports
import InformationModal from "../../components/InformationModal";

const ShortListed = () => {
  //initialising variables and states
  const modal = useDisclosure();
  const [modalData, setModalData] = useState({});
  const [shortListed, setShortListed] = useState([
    {
      id: "1",
      name: "Shehzad Ahmed",
      position: "React JS Developer",
      date: "2022-03-01T12:12:54.613Z",
      cv: ["file.pdf", "file.docx"],
      email: "shehzad.finesols@gmail.com",
      contact: "03032804856",
      skills: ["nodejs", "javascript", "jquery"],
    },
    {
      id: "2",
      name: "Waqas Ahmed",
      position: "React JS Developer",
      date: "2022-03-01T12:12:54.613Z",
      cv: ["file.pdf"],
      email: "Waqas.finesols@gmail.com",
      contact: "03032804856",
      skills: ["php", "javascript", "react"],
    },
    {
      id: "3",
      name: "Hafeez Ahmed",
      position: "React JS Developer",
      date: "2022-03-01T12:12:54.613Z",
      cv: ["file.doc"],
      email: "Hafeez.finesols@gmail.com",
      contact: "03032804856",
      skills: ["php", "nodejs", "html"],
    },
  ]);
  const [positions, setPositions] = useState([
    "PHP Developer",
    "Wordpress Developer",
    "MERN Stack Developer",
    "React JS Developer",
    "React Native Developer",
    "Laravel Developer",
  ]);
  const [filterd, setFiltered] = useState(shortListed);

  //handle position change function
  const handlePositionChange = (e) => {
    let filtered = shortListed.filter((candidate) => {
      if (e.target.value === "All") {
        return candidate;
      }
      return candidate.position === e.target.value;
    });
    setFiltered(filtered);
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
        <GridItem></GridItem>
        <GridItem colSpan={2}>
          <Flex float={"right"}>
            <Select
              w={"fit-content"}
              minW={"130px"}
              size={"sm"}
              mx={2}
              background={"transparent"}
              border={"1px solid"}
              borderRadius={12}
              borderColor={useColorModeValue("gray.200", "white")}
              _focus={{ borderColor: useColorModeValue("gray.200", "white") }}
              fontSize={14}
              onChange={(e) => handlePositionChange(e)}
            >
              <option value={"All"}>All</option>
              {positions?.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </Select>
          </Flex>
        </GridItem>
      </Grid>

      {/* Table Section */}
      <Box>
        <Table variant="striped">
          <Thead background={useColorModeValue("#edecec", "gray.900")}>
            <Tr>
              <Th>S.No</Th>
              <Th>Candidate Name</Th>
              <Th>Position</Th>
              <Th>Interview Date</Th>
              <Th>Interview Day</Th>
              <Th>Skills</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filterd?.map((item, index) => (
              <Tr key={index} fontSize={14}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.position}</Td>
                <Td>{moment(item.date).format("DD/mm/yyyy")}</Td>
                <Td>{moment(item.date).format("dddd")}</Td>
                <Td>
                  <Flex>{item.skills.join(", ")}</Flex>
                </Td>

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
                        <MdSchedule size={17} style={{ paddingRight: "3px" }} />
                        Schedule Interview
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

export default ShortListed;
