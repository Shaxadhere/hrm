//react imports
import React, { useState } from "react";

//chakra ui imports
import {
  Box,
  SimpleGrid,
  chakra,
  useColorModeValue,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";

//global componets imports
import FormInput from "../../components/FormInput";
import Card from "../../components/Card";
import FormMultiSelect from "../../components/FormMultiSelect";
import FormRadio from "../../components/FormRadio";

//validation imports
import { validateApplyLeave } from "../../validation/applyLeave";

//helpers imports
import FormTextArea from "../../components/FormTextArea";

//main function
const ApplyForLeave = () => {
  // initiating states and variables
  const [leaveData, setLeaveData] = useState({
    leaveType: "",
    dayType: "",
    fromDate: null,
    toDate: null,
    iWantToInform: [],
    reason: "",
  });
  const [teams, setTeams] = useState([
    {
      teamId: "team_1",
      teamLeadId: "emp_1",
      teamName: "Content Writing",
      members: [
        {
          _id: "emp_1",
          fullName: "Afeera Munawar",
        },
        {
          _id: "emp_2",
          fullName: "Asra Akhlaque",
        },
      ],
    },
    {
      teamId: "team_2",
      teamLeadId: "emp_4",
      teamName: "Design Team",
      members: [
        {
          _id: "emp_3",
          fullName: "Hafeez",
        },
        {
          _id: "emp_4",
          fullName: "Iqbal",
        },
        {
          _id: "emp_5",
          fullName: "Kamran",
        },
      ],
    },
    {
      teamId: "team_3",
      teamLeadId: "emp_19",
      teamName: "Dev Team",
      members: [
        {
          _id: "emp_6",
          fullName: "Ali Hussain",
        },
        {
          _id: "emp_7",
          fullName: "Muhammad Ubaid",
        },
        {
          _id: "emp_8",
          fullName: "Mustafa Saifuddin",
        },
        {
          _id: "emp_9",
          fullName: "Priya Khatri",
        },
        {
          _id: "emp_10",
          fullName: "Shehzad Ahmed",
        },
        {
          _id: "emp_11",
          fullName: "Uzair Khursheed",
        },
        {
          _id: "emp_19",
          fullName: "Misbah Nasir",
        },
      ],
    },
    {
      teamId: "team_4",
      teamLeadId: "emp_12",
      teamName: "HR Admin",
      members: [
        {
          _id: "emp_12",
          fullName: "Sufiyan",
        },
      ],
    },
    {
      teamId: "team_5",
      teamLeadId: "emp_13",
      teamName: "Sales",
      members: [
        {
          _id: "emp_13",
          fullName: "Durri Qureshi",
        },
      ],
    },
    {
      teamId: "team_6",
      teamLeadId: "emp_14",
      teamName: "SEO-Digital Marketing",
      members: [
        {
          _id: "emp_14",
          fullName: "Amjad Zafar",
        },
        {
          _id: "emp_15",
          fullName: "Fatima Ali",
        },
        {
          _id: "emp_16",
          fullName: "Imran Ali",
        },
        {
          _id: "emp_17",
          fullName: "Waheed",
        },
      ],
    },
  ]);
  const [errors, setErrors] = useState({});

  //handle submit
  const handleSubmit = () => {
    let errors = validateApplyLeave(leaveData);
    if (Object.keys(errors).length === 0) {
      console.log(leaveData);
    }
    setErrors(errors);
  };

  //handle change of input fields
  const handleChange = (e) => {
    let _leaveData = { ...leaveData, [e.target.name]: e.target.value };
    setLeaveData(_leaveData);
  };

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
      <Card cardtitle={"Apply for Leave"} mt={6} cardinnerspacing={10}>
        <Box as={"form"}>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={4} mt={3}>
            <FormRadio
              defaultValue={leaveData.leaveType}
              label={"Leave Type"}
              required={true}
              helpertext={
                errors.leaveType ? errors.leaveType : "Specify leave type"
              }
              helpercolor={errors.leaveType ? "red" : "gray.400"}
              options={[
                { value: "Short", label: "Short" },
                { value: "Scheduled", label: "Scheduled" },
                { value: "Annual", label: "Annual" },
                { value: "Casual", label: "Casual" },
              ]}
              name="leaveType"
              onChange={(value) =>
                handleChange({ target: { name: "leaveType", value: value } })
              }
            />

            <FormRadio
              defaultValue={leaveData.dayType}
              label={"Day Type"}
              required={true}
              helpertext={errors.dayType ? errors.dayType : "Specify day type"}
              helpercolor={errors.dayType ? "red" : "gray.400"}
              options={[
                { value: "Full", label: "Full" },
                { value: "First Half", label: "First Half" },
                { value: "Second Half", label: "Second Half" },
              ]}
              name="dayType"
              onChange={(value) =>
                handleChange({ target: { name: "dayType", value: value } })
              }
            />

            <FormInput
              maxWidth={{ base: "100%;", md: "70%" }}
              label={"From"}
              helpertext={
                errors.fromDate ? errors.fromDate : "Select from date"
              }
              helpercolor={errors.fromDate ? "red" : "gray.400"}
              type={"date"}
              required={true}
              defaultValue={leaveData.fromDate}
              name={"fromDate"}
              onChange={(e) => handleChange(e)}
            />

            <FormInput
              maxWidth={{ base: "100%;", md: "70%" }}
              label={"To"}
              helpertext={errors.toDate ? errors.toDate : "Select to date"}
              helpercolor={errors.toDate ? "red" : "gray.400"}
              type={"date"}
              required={true}
              defaultValue={leaveData.toDate}
              name={"toDate"}
              onChange={(e) => handleChange(e)}
            />
          </SimpleGrid>

          <FormMultiSelect
            label={"I want to inform"}
            required={true}
            helpertext={
              errors.iWantToInform ? errors.iWantToInform : "Team members"
            }
            helpercolor={errors.iWantToInform ? "red" : "gray.400"}
            placeholder={"Select..."}
            options={teams.map((item) => {
              return { value: item.teamId, label: item.teamName };
            })}
            name="iWantToInform"
            onChange={(e) => {
              handleChange({
                target: {
                  name: "iWantToInform",
                  value: e.map((item) => item.value),
                },
              });
            }}
          />

          <FormTextArea
            required={true}
            label={"Reason"}
            defaultValue={leaveData.reason}
            helpertext={
              errors.reason ? errors.reason : "Reason of leave application"
            }
            helpercolor={errors.reason ? "red" : "gray.400"}
            name={"reason"}
            onChange={(e) => handleChange(e)}
          />

          <SimpleGrid
            columns={2}
            spacing={3}
            w={{ base: "100%", lg: "40%" }}
            mt={2}
          >
            <Button
              bg={useColorModeValue("#ae0000")}
              color={"white"}
              _focus={{ background: "#ae0000" }}
              _hover={{ background: "#ae0000" }}
              onClick={handleSubmit}
            >
              Apply Now
            </Button>
            <Button bg={useColorModeValue("gray.400")} color={"white"}>
              Cancel
            </Button>
          </SimpleGrid>
        </Box>
      </Card>
    </>
  );
};

export default ApplyForLeave;
