//react imports
import React from "react";

//chakra ui imports
import { SimpleGrid, Box, Icon, Stack } from "@chakra-ui/react";

//icon imports
import { BsThermometerHigh } from "react-icons/bs";

//main function
const Attendance = () => {
  //return from main function
  return (
    <Box>
      <SimpleGrid columns={3} gap={20}>
        <Box>
          <Stack
            cursor={"pointer"}
            w={{ sm: "100%", md: "272px" }}
            height={{ sm: "100%", md: "100%" }}
            direction={{ base: "column", md: "row" }}
            padding={4}
            direction={"column"}
            w="100%"
          >
            <Icon as={BsThermometerHigh} size={40} />
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Attendance;
