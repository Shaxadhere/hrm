//react imports
import React, { useState } from "react";

//chakra ui imports
import {
  useColorModeValue,
  Flex,
  Heading,
  Text,
  Box,
  Button,
  SimpleGrid,
  Avatar,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

//icon imports
import { BiSliderAlt } from "react-icons/bi";

//global components imports
import Badge from "../../components/Badge";

//default avatar import
import DefaultAvatar from "../../assets/images/default.jpg";

const LeaveRequests = () => {
  //initialising variables and states
  const [leaves, setLeaves] = useState([
    {
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
    },
    {
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
    },
  ]);

  //filter leaves function
  const filterLeaves = (leaves, filter) => {
    switch (filter) {
      case "pending":
        return leaves.filter((leave) => leave.status === "pending");
      case "approved":
        return leaves.filter((leave) => leave.status === "approved");
      case "rejected":
        return leaves.filter((leave) => leave.status === "rejected");
      default:
        return leaves;
    }
  };

  //return from main function
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box textAlign={{ base: "center", sm: "left" }}>
          <Heading as={"h1"} size={"md"} color={useColorModeValue("gray.600")}>
            Requests
          </Heading>
        </Box>
        <Box textAlign={{ base: "center", sm: "right" }}>
          <ButtonGroup size="xs" isAttached variant="outline">
            <Button
              mr="-px"
              _focus={{ boxShadow: "none" }}
              color={useColorModeValue("white")}
              bg={useColorModeValue("#ae0000", "gray.900")}
            >
              Approved
            </Button>
            <Button
              onClick={filterLeaves(leaves, "approved")}
              mr="-px"
              _focus={{ boxShadow: "none" }}
            >
              Pending
            </Button>
            <Button mr="-px" _focus={{ boxShadow: "none" }}>
              Rejected
            </Button>
          </ButtonGroup>
          <Menu>
            <MenuButton
              as={Button}
              _focus={{ boxShadow: "none" }}
              leftIcon={<BiSliderAlt />}
              variant="outline"
              size={"xs"}
              ml={3}
            >
              Filter Leaves
            </MenuButton>
            <MenuList>
              <MenuItem fontSize={12}>Sick Leaves</MenuItem>
              <MenuItem fontSize={12}>Casual Leaves</MenuItem>
              <MenuItem fontSize={12}>Scheduled Leave</MenuItem>
              <MenuItem fontSize={12}>Short Leave</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        mt={4}
        placeItems={"center"}
        spacing={5}
      >
        {leaves?.map((leaveItem) => (
          <Box
            maxW={"320px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"xl"}
            rounded={"lg"}
            p={6}
          >
            <Box>
              <Text
                ml={2}
                fontSize={12}
                color={useColorModeValue("gray.600", "gray.300")}
              >
                {leaveItem.leaveType} leave request
              </Text>
              <Flex mt={2}>
                <Avatar
                  size="xs"
                  name="anubra266"
                  src={DefaultAvatar}
                  cursor="pointer"
                />
                <Text
                  ml={1}
                  alignSelf={"center"}
                  fontSize={10}
                  color={useColorModeValue("gray.400", "gray.300")}
                >
                  by {leaveItem.employee.fullName} 3 days ago
                </Text>
              </Flex>
            </Box>
            <Box textAlign={"center"} mt={2}>
              <Heading
                as={"h3"}
                size={"lg"}
                color={useColorModeValue("#ae0000", "white")}
                fontSize={17}
              >
                2 Days
              </Heading>
              <Text fontSize={12} color={"gray.400"} fontWeight={"semibold"}>
                March 27 - March 28 2022
              </Text>

              <Slider
                aria-label="slider-ex-2"
                defaultValue={30}
                isReadOnly={true}
                my={5}
              >
                <SliderTrack h={2} borderRadius={10}>
                  <SliderFilledTrack
                    bg={useColorModeValue("#ae0000", "gray.500")}
                  />
                </SliderTrack>
                <SliderThumb display={"none"} />
              </Slider>
              <Text fontSize={12} color={"gray.400"} fontWeight={"semibold"}>
                12 sick leaves remaining
              </Text>
            </Box>
            <Heading as={"h5"} fontSize={12} mt={8} color={"gray.400"}>
              Reason:
            </Heading>
            <Text fontSize={12} color={"gray.500"} fontWeight={"semibold"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi
            </Text>
            <Heading as={"h5"} fontSize={12} mt={8} color={"gray.400"}>
              Approval Process:
            </Heading>
            <Flex mt={2}>
              <Badge textAlign={"center"} w={"full"} ml={1} isdone={true}>
                TL Approval
              </Badge>
              <Badge textAlign={"center"} w={"full"} ml={1}>
                HR Approval
              </Badge>
              <Badge textAlign={"center"} w={"full"} ml={1}>
                Final Approval
              </Badge>
            </Flex>

            <Flex mt={5}>
              <Avatar
                ml="4"
                size="sm"
                name="anubra266"
                src={DefaultAvatar}
                cursor="pointer"
              />
              <Button
                w={"full"}
                _focus={{
                  background: useColorModeValue("#ae0000", "gray.600"),
                  boxShadow: "none",
                }}
                _hover={{ background: useColorModeValue("#ae0000") }}
                color={"white"}
                ml={2}
                bg={useColorModeValue("#ae0000")}
                size={"sm"}
              >
                Accept
              </Button>
              <Button
                w={"full"}
                _focus={{ background: "gray.500", boxShadow: "none" }}
                _hover={{ background: "gray.500" }}
                color={"white"}
                ml={2}
                bg={"gray.500"}
                size={"sm"}
              >
                Reject
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default LeaveRequests;
