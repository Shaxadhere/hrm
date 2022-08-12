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
} from "@chakra-ui/react";

//icon improts
import { BiSearchAlt, BiPlus, BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineFileUnknown } from "react-icons/ai";
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

const Selected = () => {
  //initialising variables and states
  const [candidates, setCandidates] = useState([
    {
      id: "1",
      name: "Shehzad Ahmed",
      cv: ["file.pdf", "file.docx"],
      source: "Facebook",
      information:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
      joiningDate: "2022-03-01T12:12:54.613Z",
    },
    {
      id: "2",
      name: "Uzair Ahmed",
      cv: ["file.doc", "file.docx"],
      source: "Indeed",
      information:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
      joiningDate: "2022-03-01T12:12:54.613Z",
    },
    {
      id: "3",
      name: "Waqas Ahmed",
      cv: ["file.pdf"],
      source: "LinkedIn",
      information:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
      joiningDate: "2022-03-01T12:12:54.613Z",
    },
    {
      id: "4",
      name: "Ali Ahmed",
      cv: ["file.doc", "file.js"],
      source: "asd",
      information:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
      joiningDate: "2022-03-01T12:12:54.613Z",
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
              <Th>Date</Th>
              <Th>information</Th>
            </Tr>
          </Thead>
          <Tbody>
            {candidates?.map((item, index) => (
              <Tr key={index} fontSize={14}>
                <Td>{index + 1}</Td>
                <Td>{item.name}</Td>
                <Td>{moment(item.joiningDate).format("DD/mm/yyyy")}</Td>
                <Td>{item.information}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Selected;
