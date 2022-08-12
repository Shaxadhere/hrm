//react imports
import { Box } from "@chakra-ui/react";
import React from "react";

//calender imports
import Calendar from "react-awesome-calendar";

//main function
const Calender = () => {
  // events array
  const events = [
    {
      id: 1,
      color: "#fd3153",
      from: "2022-02-02T18:00:00+00:00",
      to: "2022-02-05T19:00:00+00:00",
      title: "Develop frontend of HRM system",
    },
    {
      id: 2,
      color: "#1ccb9e",
      from: "2022-02-02T18:00:00+00:00",
      to: "2022-02-02T18:00:00+00:00",
      title: "Develop backend of HRM system",
    },
    {
      id: 3,
      color: "#3694DF",
      from: "2022-02-05T13:00:00+00:00",
      to: "2022-02-02T18:00:00+00:00",
      title: "Develop frontend of HRM system",
    },
  ];

  //return from main function
  return (
    <>
      <Box p={3}>
        <Calendar events={events} />
      </Box>
    </>
  );
};

export default Calender;
