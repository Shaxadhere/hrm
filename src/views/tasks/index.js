//react imports
import React, { useState } from "react";

//chakra ui imports
import {
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Box,
  SimpleGrid,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";

//smart scroller imports
import { ReactSmartScroller } from "react-smart-scroller";

//global component imports
import TaskList from "../../components/TaskList";
import TaskCard from "../../components/TaskCard";

//tasks css
import "./tasks.css";

const Tasks = () => {
  //initialising variables and states
  const scroller = useBreakpointValue({ base: true, sm: false });
  const [lists, setLists] = useState([
    {
      id: "1",
      listName: "Project Resources",
      cards: [
        {
          id: "list1_card1",
          heading: "Trello Tip:",
          text: "Card labels! What do they mean? (Click for more info)",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list1_card2",
          heading: "",
          text: 'Project "Teamwork Dream Work" Launch Timeline',
          createdAt: "",
          updatedAt: "",
        },
      ],
    },
    {
      id: "2",
      listName: "Todo",
      cards: [
        {
          id: "list2_card2",
          heading: "",
          text: 'Project "Teamwork Dream Work" Launch Timeline',
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card3",
          heading: "",
          text: "Edit email drafts",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card1",
          heading: "Curate customer list",
          text: "",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
      ],
    },
    {
      id: "2",
      listName: "Todo",
      cards: [
        {
          id: "list2_card2",
          heading: "",
          text: 'Project "Teamwork Dream Work" Launch Timeline',
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card3",
          heading: "",
          text: "Edit email drafts",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card1",
          heading: "Curate customer list",
          text: "",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
      ],
    },
    {
      id: "2",
      listName: "Todo",
      cards: [
        {
          id: "list2_card2",
          heading: "",
          text: 'Project "Teamwork Dream Work" Launch Timeline',
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card3",
          heading: "",
          text: "Edit email drafts",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card1",
          heading: "Curate customer list",
          text: "",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "list2_card4",
          heading: "",
          text: "Sketch site banner",
          createdAt: "",
          updatedAt: "",
        },
      ],
    },
  ])

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
            UrAudit
          </Heading>
          <Text color={"gray.400"} fontSize={12} py={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
        <Box>
          <Select
            size={"md"}
            w={"max-content"}
            placeholder={"Switch Project"}
            borderRadius={8}
            borderColor={useColorModeValue("gray.200", "white")}
            _focus={{ borderColor: useColorModeValue("gray.200", "white") }}
            float={"right"}
            fontSize={14}
          >
            <option value="10">HRM App</option>
            <option value="20">Ur Audit</option>
            <option value="30">Opulent</option>
          </Select>
        </Box>
      </SimpleGrid>
      <Flex>
        <ReactSmartScroller
          pagination={scroller}
          paginationConfig={{
            draggable: scroller,
            unactiveDotsColor: "rgb(189, 195, 199)",
            activeDotColor: "#999999",
            transitionTime: 0.1,
          }}
        >
          {lists?.map((listItem) => (
            <TaskList title={listItem.listName}>
              {listItem.cards.map((cardItem) => (
                <TaskCard>
                  {cardItem.heading && (
                    <Heading
                      as="h4"
                      size={"xs"}
                      color={useColorModeValue("gray.600")}
                    >
                      {cardItem.heading}
                    </Heading>
                  )}
                  {cardItem.text && <Text fontSize={12}>{cardItem.text}</Text>}
                </TaskCard>
              ))}
            </TaskList>
          ))}
        </ReactSmartScroller>
      </Flex>
    </>
  );
};

export default Tasks;
