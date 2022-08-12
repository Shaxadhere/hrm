//react imports
import React, { useState } from "react";

//chakra ui imports
import { SimpleGrid, Grid, GridItem, Box } from "@chakra-ui/react";

//icon imports
import { AiOutlineFileUnknown } from "react-icons/ai";

//calender imports
import Calendar from "react-awesome-calendar";

//global components imports
import Card from "../../components/Card";

//main function
const Dashboard = () => {
  // initialising variables and states
  const [holidays, setHolidays] = useState([
    {
      id: 1,
      color: "#ae0000",
      from: "2022-02-02T18:00:00+00:00",
      to: "2022-02-05T19:00:00+00:00",
      title: "Develop frontend of HRM system",
    },
    {
      id: 2,
      color: "#ae0000",
      from: "2022-02-02T18:00:00+00:00",
      to: "2022-02-02T18:00:00+00:00",
      title: "Develop backend of HRM system",
    },
    {
      id: 3,
      color: "#ae0000",
      from: "2022-02-05T13:00:00+00:00",
      to: "2022-02-02T18:00:00+00:00",
      title: "Develop frontend of HRM system",
    },
  ]);
  //return from main function
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem>
          <Card py={6} px={8} mx={2} colSpan={2} cardtitle="Upcoming Projects">
            <Box alignSelf="center" padding="60px 0px" opacity="0.3">
              <AiOutlineFileUnknown size={100} />
            </Box>
          </Card>
          <Card
            py={6}
            px={8}
            mx={2}
            mt={3}
            colSpan={2}
            cardtitle="New Employees"
          >
            <Box alignSelf="center" padding="60px 0px" opacity="0.3">
              <AiOutlineFileUnknown size={100} />
            </Box>
          </Card>
          <Card py={6} px={8} mx={2} mt={3} colSpan={2} cardtitle="Activities">
            <Box alignSelf="center" padding="60px 0px" opacity="0.3">
              <AiOutlineFileUnknown size={100} />
            </Box>
          </Card>
        </GridItem>
        <GridItem colSpan={2}>
          <SimpleGrid columns={2}>
            <Card py={6} px={8} mx={2} colSpan={2} cardtitle="Announcements">
              <Box alignSelf="center" padding="60px 0px" opacity="0.3">
                <AiOutlineFileUnknown size={100} />
              </Box>
            </Card>
            <Card py={6} px={8} mx={2} colSpan={2} cardtitle="Events">
              <Box alignSelf="center" padding="60px 0px" opacity="0.3">
                <AiOutlineFileUnknown size={100} />
              </Box>
            </Card>
          </SimpleGrid>
          <Card
            py={6}
            px={8}
            mx={2}
            mt={3}
            colSpan={2}
            cardtitle="Upcoming Holidays"
          >
            <Box p={3}>
              <Calendar events={holidays} />
            </Box>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
