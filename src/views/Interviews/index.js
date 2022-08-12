//react imports
import React, { useState } from "react";

//moment import
import moment from "moment";

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
  useDisclosure,
} from "@chakra-ui/react";

//icon improts
import { BiSearchAlt, BiPlus, BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineFileUnknown, AiFillEye } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdPendingActions } from "react-icons/md";
import {
  GrDocumentPdf,
  GrDocumentWord,
  GrDocument,
  GrFormCheckmark,
  GrFormClose,
} from "react-icons/gr";
import { SiIndeed, SiLinkedin, SiFacebook } from "react-icons/si";

//global components imports
import PaginationButton from "../../components/PaginationButton";
import InformationModal from "../../components/InformationModal";

const Interviews = () => {
  //initialising variables and states
  const modal = useDisclosure();
  const [modalData, setModalData] = useState({});
  const [candidates, setCandidates] = useState([
    {
      id: "1",
      name: "Shehzad Ahmed",
      cv: ["file.pdf", "file.docx"],
      date: "2022-03-01T12:12:54.613Z",
    },
    {
      id: "2",
      name: "Uzair Ahmed",
      cv: ["file.doc", "file.docx"],
      date: "2022-03-01T12:12:54.613Z",
    },
    {
      id: "3",
      name: "Waqas Ahmed",
      cv: ["file.pdf"],
      date: "2022-03-01T12:12:54.613Z",
    },
    {
      id: "4",
      name: "Ali Ahmed",
      cv: ["file.doc", "file.js"],
      date: "2022-03-01T12:12:54.613Z",
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
            Candidates
          </Heading>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex float={"right"}>
            <Select
              w={"fit-content"}
              minW={"130px"}
              placeholder="Select Position"
              size={"sm"}
              mx={2}
              background={"transparent"}
              border={"1px solid"}
              borderRadius={12}
              borderColor={useColorModeValue("gray.200", "white")}
              _focus={{ borderColor: useColorModeValue("gray.200", "white") }}
              fontSize={14}
            >
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
              <Th>CV(s)</Th>
              <Th>Date of Interview</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {candidates?.map((item, index) => (
              <Tr key={index} fontSize={14}>
                <Td>{index + 1}</Td>
                <Td>{item.name}</Td>
                <Td>
                  <Flex>
                    {item.cv.map((cvItem) => {
                      let ext = cvItem.split(".").pop();
                      switch (ext) {
                        case "pdf":
                          return <GrDocumentPdf fontSize={20} />;
                        case "doc":
                          return <GrDocumentWord fontSize={20} />;
                        case "docx":
                          return <GrDocumentWord fontSize={20} />;
                        default:
                          return <GrDocument fontSize={20} />;
                      }
                    })}
                  </Flex>
                </Td>
                <Td>{moment(item.joiningDate).format("DD/mm/yyyy")}</Td>
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
                        <GrFormCheckmark
                          size={17}
                          style={{ paddingRight: "3px" }}
                        />
                        Schedule Interview
                      </MenuItem>
                      <MenuItem
                        color={useColorModeValue("gray.600", "gray.200")}
                        fontSize={12}
                      >
                        <GrFormClose
                          size={17}
                          style={{ paddingRight: "3px" }}
                        />
                        Remove
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

export default Interviews;
