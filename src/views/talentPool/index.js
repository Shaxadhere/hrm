//react imports
import React, { useState } from "react";

//router imports
import { useNavigate } from "react-router";

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
  Tr,
  Th,
  Td,
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
import { MdPendingActions } from "react-icons/md";
import {
  GrDocumentPdf,
  GrDocumentWord,
  GrDocument,
  GrFormCheckmark,
  GrFormClose,
  GrDocumentExcel,
} from "react-icons/gr";
import { SiIndeed, SiLinkedin, SiFacebook } from "react-icons/si";

//global components imports
import InformationModal from "../../components/InformationModal";

//main function
const TalentPool = () => {
  //initialising variables and states
  const navigate = useNavigate();
  const modal = useDisclosure();
  const [candidates, setCandidates] = useState([
    {
      id: "1",
      name: "Shehzad Ahmed",
      cv: ["file.pdf", "file.docx"],
      source: "Facebook",
      email: "shehzad.finesols@gmail.com",
      contact: "03032804856",
      date: "2022-03-01T12:12:54.613Z",
    },
    {
      id: "2",
      name: "Uzair Ahmed",
      cv: ["file.doc", "file.docx"],
      source: "Indeed",
      email: "Uzair.finesols@gmail.com",
      contact: "03032804856",
      date: "2022-03-01T12:12:54.613Z",
    },
    {
      id: "3",
      name: "Waqas Ahmed",
      cv: ["file.pdf"],
      source: "LinkedIn",
      email: "Waqas.finesols@gmail.com",
      contact: "03032804856",
      date: "2022-03-01T12:12:54.613Z",
    },
    {
      id: "4",
      name: "Ali Ahmed",
      cv: ["fil.e.doc", "file.js"],
      source: "asd",
      email: "Ali.finesols@gmail.com",
      contact: "03032804856",
      date: "2022-03-01T12:12:54.613Z",
    },
  ]);
  const [filter, setFilter] = useState(candidates);
  const [positions, setPositions] = useState([
    "PHP Developer",
    "Wordpress Developer",
    "MERN Stack Developer",
    "React JS Developer",
    "React Native Developer",
    "Laravel Developer",
  ]);
  const [modalData, setModalData] = useState({});

  //handle filter function
  const handleFilter = (e) => {
    const { field, value } = e.target;
    if (field === "position") {
      setFilter(candidates.filter((candidate) => candidate.position === value));
    } else {
      setFilter(
        candidates.filter((candidate) =>
          candidate.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
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
            Candidates
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
              placeholder="Select Position"
              size={"sm"}
              mx={2}
              background={"transparent"}
              border={"1px solid"}
              borderRadius={12}
              borderColor={useColorModeValue("gray.200", "white")}
              _focus={{ borderColor: useColorModeValue("gray.200", "white") }}
              fontSize={14}
              onChange={(e) => {
                e.target.field = "position";
                handleFilter(e);
              }}
            >
              {positions?.map((item) => (
                <option value={item}>{item}</option>
              ))}
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

            <Button
              float={"right"}
              fontSize={14}
              bg={useColorModeValue("#ae0000", "gray.800")}
              color={"white"}
              size={"sm"}
              mx={2}
              w={"fit-content"}
              onClick={() => {
                navigate("/add-candidate");
              }}
            >
              <BiPlus style={{ marginRight: 3 }} />
              Add Candidate
            </Button>
          </Flex>
        </GridItem>
      </Grid>

      {/* Table Section */}
      <Box>
        <Table variant="striped">
          <Thead background={useColorModeValue("#edecec", "gray.900")}>
            <Tr>
              <Th>S.No</Th>
              <Th>Date</Th>
              <Th>Candidate Name</Th>
              <Th>CV(s)</Th>
              <Th>Source</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filter?.map((item, index) => (
              <Tr key={index} fontSize={14}>
                <Td>{index + 1}</Td>
                <Td>{moment(item.date).format("DD/mm/yyyy")}</Td>
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
                <Td>
                  <Flex>
                    {item.source == "Facebook" ? (
                      <SiFacebook fontSize={20} />
                    ) : item.source == "LinkedIn" ? (
                      <SiLinkedin fontSize={20} />
                    ) : item.source == "Indeed" ? (
                      <SiIndeed fontSize={20} />
                    ) : (
                      <AiOutlineFileUnknown fontSize={20} />
                    )}
                  </Flex>
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
                        <GrFormCheckmark
                          size={17}
                          style={{ paddingRight: "3px" }}
                        />
                        Shortlist
                      </MenuItem>
                      <MenuItem
                        color={useColorModeValue("gray.600", "gray.200")}
                        fontSize={12}
                      >
                        <GrFormClose
                          size={17}
                          style={{ paddingRight: "3px" }}
                        />
                        Reject
                      </MenuItem>
                      <MenuItem
                        color={useColorModeValue("gray.600", "gray.200")}
                        fontSize={12}
                      >
                        <MdPendingActions
                          size={17}
                          style={{ paddingRight: "3px" }}
                        />
                        Pending
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

export default TalentPool;
