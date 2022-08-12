//react imports
import React, { useState } from "react";

//router imports
import { useNavigate } from "react-router";

//chakra ui imports
import {
  Box,
  SimpleGrid,
  chakra,
  Select,
  useColorModeValue,
  Flex,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Icon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

//icon imports
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//global componets imports
import Card from "../../components/Card";
import PaginationButton from "../../components/PaginationButton";

const MyLeaves = () => {
  //initiating states and variables
  const navigate = useNavigate();
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
  
  //return from main function
  return (
    <>
      <Card
        cardtitle={"Leave Balance"}
        titlefontsize={"xs"}
        titlefontweight={"600"}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <Box pr={{ base: 0, lg: "60px" }}>
            <Slider
              aria-label="slider-ex-2"
              defaultValue={40}
              isReadOnly={true}
            >
              <SliderTrack h={2} borderRadius={10}>
                <SliderFilledTrack
                  bg={useColorModeValue("#ae0000", "gray.500")}
                />
              </SliderTrack>
              <SliderThumb display={"none"} />
            </Slider>
            <SimpleGrid columns={2} mt={2}>
              <Box justifySelf={"left"}>
                <Text
                  width={"fit-content"}
                  textAlign={"center"}
                  fontSize={12}
                  fontWeight={"semibold"}
                >
                  7 Days <Text color={"#ae0000"}>Booked</Text>
                </Text>
              </Box>
              <Box justifySelf={"right"}>
                <Text
                  width={"fit-content"}
                  textAlign={"center"}
                  fontSize={12}
                  fontWeight={"semibold"}
                >
                  12 Days <Text color={"#ae0000"}>Remaining</Text>
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box>
            <SimpleGrid
              columns={{ base: 1, sm: 3, md: 3, lg: 3 }}
              spacing={8}
              fontWeight={"semibold"}
            >
              <Card alignItems={"center"}>
                <Text>
                  <chakra.span color={"#ae0000"}>4</chakra.span>/12
                </Text>
                <Text>Casual</Text>
              </Card>
              <Card alignItems={"center"}>
                <Text>
                  <chakra.span color={"#ae0000"}>4</chakra.span>/12
                </Text>
                <Text>Sick</Text>
              </Card>
              <Card alignItems={"center"}>
                <Text>
                  <chakra.span color={"#ae0000"}>4</chakra.span>/12
                </Text>
                <Text>Annual</Text>
              </Card>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Card>
      <Card
        mt={5}
        cardtitle={"My Leaves History"}
        cardactions={
          <Flex>
            <Select
              w={"fit-content"}
              minW={"130px"}
              placeholder="Sort & Filter"
              size={"sm"}
              mx={2}
              background={"transparent"}
              border={"1px solid"}
              borderRadius={12}
              borderColor={useColorModeValue("gray.200", "white")}
              _focus={{ borderColor: useColorModeValue("gray.200", "white") }}
              fontSize={14}
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
            <Button size="sm" bg={useColorModeValue("#ae0000")} color={"white"} onClick={(()=>navigate("/leaves/apply"))}>
              Apply for Leaves
            </Button>
          </Flex>
        }
      >
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
      </Card>
    </>
  );
};

export default MyLeaves;
