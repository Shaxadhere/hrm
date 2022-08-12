//react imports
import React, { useState } from "react";

//router imports
import { useNavigate } from "react-router";

//chakra ui imports
import {
  Box,
  SimpleGrid,
  GridItem,
  Heading,
  chakra,
  FormControl,
  FormLabel,
  useColorModeValue,
  FormHelperText,
  Input,
  Flex,
  Button,
  Grid,
} from "@chakra-ui/react";

//icon imports
import { BiLeftArrowAlt } from "react-icons/bi";

//global componets imports
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import Tab from "../../components/Tab";
import FormButton from "../../components/FormButton";

//validation imports
import {
  validatePersonalInformation,
  validateAddressInformation,
  validateTeamInformation,
  validateEducationalDetails,
  validateWorkExperience,
} from "../../validation/addEmployee";

//helpers imports
import {
  getStatesWithCities,
  getPrograms,
  getBloodGroups,
} from "../../helpers";

//main function
const AddEmployee = () => {
  //initialising variables and states
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(1);
  const [errors, setErrors] = useState({});
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
  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    fatherName: "",
    maritalStatus: "",
    cnic: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    emergencyContact: "",
    relation: "",
    homeContact: "",
    permanentAddress: "",
    currentAddress: "",
    city: "",
    state: "",
    country: "Pakistan",
    workExperience: [
      {
        designation: "",
        company: "",
        startDate: "",
        endDate: "",
        roleDescription: "",
      },
    ],
    // educationalDetails: [
    //   {
    //     institute: "",
    //     program: "",
    //     completionYear: "",
    //     grade: "",
    //   },
    // ],
    secondaryInstitute: "",
    secondaryProgram: "",
    secondaryCompletionDate: null,
    secondaryGrade: "",
    intermediateInstitute: "",
    intermediateProgram: "",
    intermediateCompletionDate: null,
    intermediateGrade: "",
    higherInstitute: "",
    higherProgram: "",
    higherCompletionDate: null,
    higherGrade: "",
    designation: "",
    team: "",
  });
  const statesWithCities = getStatesWithCities();
  const programs = getPrograms();
  const [cities, setCities] = useState([]);

  //handle submit personal information form
  const handleSubmitPersonalInfo = (e) => {
    let errors = validatePersonalInformation(employeeData);
    if (Object.keys(errors).length === 0) {
      setIsVisible(2);
    }
    setErrors(errors);
  };

  //handle submit address information form
  const handleSubmitAddressInfo = (e) => {
    let errors = validateAddressInformation(employeeData);
    if (Object.keys(errors).length === 0) {
      setIsVisible(3);
    }
    setErrors(errors);
  };

  //handle submit educational details form
  const handleSubmitEducationalDetails = (e) => {
    let errors = validateEducationalDetails(employeeData);
    if (Object.keys(errors).length === 0) {
      setIsVisible(4);
    }
    setErrors(errors);
  };

  //handle submit work experience form
  const handleSubmitWorkExperience = (e) => {
    let errors = validateWorkExperience(employeeData);
    if (errors.workExperience.length === 0) {
      setIsVisible(5);
    }
    setErrors(errors);
  };

  //handle submit team information form
  const handleSubmitTeamInfo = (e) => {
    let errors = validateTeamInformation(employeeData);
    if (Object.keys(errors).length === 0) {
      navigate("/employees");
    }
    setErrors(errors);
  };

  //handle change of input fields
  const handleChange = (e) => {
    let _employeeData = { ...employeeData, [e.target.name]: e.target.value };
    setEmployeeData(_employeeData);
  };

  //return from main function
  return (
    <>
      <Flex placeContent={"center"} display={{ base: "none", lg: "flex" }}>
        <Tab isactive={isVisible === 1 ? true : false}>
          Personal Information
        </Tab>
        <Tab isactive={isVisible === 2 ? true : false}>Address Details</Tab>
        <Tab isactive={isVisible === 3 ? true : false}>Educational Details</Tab>
        <Tab isactive={isVisible === 4 ? true : false}>Work Experience</Tab>
        <Tab isactive={isVisible === 5 ? true : false}>Team Details</Tab>
      </Flex>
      <Grid templateColumns="repeat(1, 1fr)" as={"form"} noValidate={true}>
        {/* General Information Form */}
        {isVisible === 1 && (
          <GridItem
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            py={6}
            px={8}
            mx={2}
            colSpan={2}
          >
            <Heading as={"h2"} size={"md"}>
              Personal Information
            </Heading>
            <SimpleGrid py={5} columns={1}>
              <Box>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}>
                  <FormInput
                    name={"employeeName"}
                    id={"employeeName"}
                    label="Employee Name"
                    placeholder="Employee Name"
                    helpertext={
                      errors.employeeName
                        ? errors.employeeName
                        : "Employee's legal name"
                    }
                    helpercolor={errors.employeeName ? "red" : "gray.400"}
                    required={true}
                    value={employeeData.employeeName}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"fatherName"}
                    id={"fatherName"}
                    label="Father Name"
                    placeholder="Father Name"
                    helpertext={
                      errors.fatherName
                        ? errors.fatherName
                        : "Employee's father name"
                    }
                    helpercolor={errors.fatherName ? "red" : "gray.400"}
                    required={true}
                    px={{ base: 0, sm: 4 }}
                    value={employeeData.fatherName}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormSelect
                    name={"maritalStatus"}
                    id={"maritalStatus"}
                    label={"Marital Status"}
                    placeholder={"Select Marital Status"}
                    helpertext={
                      errors.maritalStatus
                        ? errors.maritalStatus
                        : "Employee's marital status"
                    }
                    helpercolor={errors.maritalStatus ? "red" : "gray.400"}
                    px={{ base: 0, md: 4 }}
                    options={["Single", "Married", "Divorced", "Seperated"]}
                    defaultValue={employeeData.maritalStatus}
                    required={true}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"cnic"}
                    id={"cnic"}
                    label="CNIC"
                    placeholder="CNIC"
                    helpertext={
                      errors.cnic ? errors.cnic : "Employee's national ID"
                    }
                    helpercolor={errors.cnic ? "red" : "gray.400"}
                    required={true}
                    value={employeeData.cnic}
                    mask={"99999-9999999-9"}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"phone"}
                    id={"phone"}
                    label="Phone"
                    placeholder="Phone"
                    helpertext={
                      errors.phone ? errors.phone : "Employee's phone number"
                    }
                    helpercolor={errors.phone ? "red" : "gray.400"}
                    required={true}
                    px={{ base: 0, sm: 4 }}
                    value={employeeData.phone}
                    mask={"99999999999"}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"email"}
                    id={"email"}
                    label="Email"
                    placeholder="someone@example.com"
                    helpertext={
                      errors.email ? errors.email : "Employee's email"
                    }
                    helpercolor={errors.email ? "red" : "gray.400"}
                    type="email"
                    required={true}
                    px={{ base: 0, md: 4 }}
                    value={employeeData.email}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormControl py={2} px={{ base: 0, sm: 4, md: 0 }}>
                    <FormLabel fontSize={12} htmlFor="dateOfBirth">
                      Date of Birth<chakra.span color="red">*</chakra.span>
                    </FormLabel>
                    <Input
                      size={"sm"}
                      name="dateOfBirth"
                      id="dateOfBirth"
                      type="date"
                      _focus={{
                        boxShadow: "none",
                        borderColor: useColorModeValue("inherit", "white"),
                      }}
                      max="2004-12-31"
                      value={employeeData.dateOfBirth}
                      onChange={(e) => handleChange(e)}
                    />
                    <FormHelperText
                      color={errors.dateOfBirth ? "red" : "gray.400"}
                      fontSize={12}
                    >
                      {errors.dateOfBirth
                        ? errors.dateOfBirth
                        : "Employee's date of birth"}
                    </FormHelperText>
                  </FormControl>

                  <FormSelect
                    name={"gender"}
                    id={"gender"}
                    label={"Gender"}
                    placeholder={"Select Gender"}
                    helpertext={
                      errors.gender ? errors.gender : "Employee's gender"
                    }
                    helpercolor={errors.gender ? "red" : "gray.400"}
                    px={{ base: 0, md: 4 }}
                    options={["Male", "Female"]}
                    defaultValue={employeeData.gender}
                    required={true}
                    onChange={(e) => handleChange(e)}
                  />
                  <FormSelect
                    name={"bloodGroup"}
                    id={"bloodGroup"}
                    label={"Blood Group"}
                    placeholder={"Select Blood Group"}
                    helpertext={
                      errors.bloodGroup
                        ? errors.bloodGroup
                        : "Employee's blood group"
                    }
                    helpercolor={errors.bloodGroup ? "red" : "gray.400"}
                    px={{ base: 0, sm: 4 }}
                    options={getBloodGroups()}
                    defaultValue={employeeData.bloodGroup}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"emergencyContact"}
                    id={"emergencyContact"}
                    label="Emergency Contact"
                    placeholder="Emergency Contact"
                    helpertext={
                      errors.emergencyContact
                        ? errors.emergencyContact
                        : "Employee's emergency contact number"
                    }
                    helpercolor={errors.emergencyContact ? "red" : "gray.400"}
                    required={true}
                    value={employeeData.emergencyContact}
                    mask={"99999999999"}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"relation"}
                    id={"relation"}
                    label="Relation"
                    placeholder="Relation"
                    helpertext={
                      errors.relation
                        ? errors.relation
                        : "Employee's relation with emergency contact"
                    }
                    helpercolor={errors.relation ? "red" : "gray.400"}
                    required={true}
                    px={{ base: 0, sm: 4 }}
                    value={employeeData.relation}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"homeContact"}
                    id={"homeContact"}
                    label="Home Contact"
                    placeholder="Home Contact"
                    helpertext={
                      errors.homeContact
                        ? errors.homeContact
                        : "Employee's home contact number"
                    }
                    helpercolor={errors.homeContact ? "red" : "gray.400"}
                    required={true}
                    px={{ base: 0, md: 4 }}
                    value={employeeData.homeContact}
                    mask={"99999999999"}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormButton
                    onClick={handleSubmitPersonalInfo}
                    mt={3}
                    w={{ base: "full", md: "60%" }}
                  >
                    Next
                  </FormButton>

                  {/* <Button
                    _focus={{
                      background: useColorModeValue("#ae0000", "gray.600"),
                      boxShadow: "none",
                    }}
                    _hover={{ background: useColorModeValue("#ae0000") }}
                    onClick={handleSubmitPersonalInfo}
                    mt={3}
                    bg={useColorModeValue("#ae0000", "gray.600")}
                    color={"white"}
                  >
                    Next
                  </Button> */}
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </GridItem>
        )}

        {/* Address Form */}
        {isVisible === 2 && (
          <GridItem
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            py={6}
            px={8}
            mx={2}
            colSpan={2}
          >
            <Flex alignItems={"center"}>
              <Button onClick={() => setIsVisible(1)} size="sm">
                <BiLeftArrowAlt size={20} />
              </Button>
              <Heading as={"h2"} size={"md"} pl={4}>
                Address Information
              </Heading>
            </Flex>
            <SimpleGrid py={5} columns={1}>
              <Box>
                <SimpleGrid columns={1}>
                  <FormInput
                    name={"permanentAddress"}
                    id={"permanentAddress"}
                    label="Permanent Address"
                    placeholder="Enter permanent address"
                    helpertext={
                      errors.permanentAddress
                        ? errors.permanentAddress
                        : "Employee's employee's address"
                    }
                    helpercolor={errors.permanentAddress ? "red" : "gray.400"}
                    required={true}
                    value={employeeData.permanentAddress}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"currentAddress"}
                    id={"currentAddress"}
                    label="Current Address"
                    placeholder="Enter current address"
                    helpertext={
                      errors.currentAddress
                        ? errors.currentAddress
                        : "Employee's current address"
                    }
                    helpercolor={errors.currentAddress ? "red" : "gray.400"}
                    value={employeeData.currentAddress}
                    required={true}
                    onChange={(e) => handleChange(e)}
                  />
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}>
                  <FormSelect
                    name={"state"}
                    id={"state"}
                    label={"State"}
                    placeholder={"Select State"}
                    helpertext={
                      errors.state ? errors.state : "State name as per on ID"
                    }
                    helpercolor={errors.state ? "red" : "gray.400"}
                    searchEnabled={true}
                    options={statesWithCities.map((item) => {
                      return { label: item.stateName, value: item.stateName };
                    })}
                    defaultValue={employeeData.state}
                    required={true}
                    onChange={(e) => {
                      statesWithCities.filter((item) => {
                        if (item.stateName == e.value) {
                          setCities(item.cities);
                        }
                      });
                      let event = { target: { value: e.value, name: "state" } };
                      handleChange(event);
                    }}
                  />

                  <FormSelect
                    name={"city"}
                    id={"city"}
                    label="City"
                    placeholder="Select City"
                    helpertext={
                      errors.city ? errors.city : "City name as per on ID"
                    }
                    helpercolor={errors.city ? "red" : "gray.400"}
                    required={true}
                    onChange={(e) => {
                      let event = { target: { value: e.value, name: "city" } };
                      handleChange(event);
                    }}
                    searchEnabled={true}
                    options={cities?.map((item) => {
                      return { label: item, value: item };
                    })}
                    defaultValue={employeeData.city}
                    px={{ base: 0, sm: 4 }}
                  />

                  <FormSelect
                    name={"country"}
                    id={"country"}
                    label={"Country"}
                    placeholder={"Select Country"}
                    helpertext={
                      errors.country ? errors.country : "Country name"
                    }
                    helpercolor={errors.country ? "red" : "gray.400"}
                    options={["Pakistan"]}
                    defaultValue={employeeData.country}
                    required={true}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormButton
                    onClick={handleSubmitAddressInfo}
                    mt={3}
                    w={{ base: "full", md: "60%" }}
                  >
                    Next
                  </FormButton>
                </SimpleGrid>

                {/* <Button
                  _focus={{
                    background: useColorModeValue("#ae0000", "gray.600"),
                    boxShadow: "none",
                  }}
                  _hover={{ background: useColorModeValue("#ae0000") }}
                  onClick={handleSubmitAddressInfo}
                  mt={3}
                  bg={useColorModeValue("#ae0000", "gray.600")}
                  color={"white"}
                  w={{ base: "full", sm: "30%", md: "20%" }}
                >
                  Next
                </Button> */}
              </Box>
            </SimpleGrid>
          </GridItem>
        )}

        {/* Educational Details Form */}
        {isVisible === 3 && (
          <GridItem
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            py={6}
            px={8}
            mx={2}
            colSpan={2}
          >
            <Flex alignItems={"center"}>
              <Button onClick={() => setIsVisible(2)} size="sm">
                <BiLeftArrowAlt size={20} />
              </Button>
              <Heading as={"h2"} size={"md"} pl={4}>
                Educational Details
              </Heading>
            </Flex>
            <SimpleGrid py={5} columns={1}>
              <Box>
                <Heading as={"h2"} size={"sm"} pt={3}>
                  Secondary Education
                </Heading>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
                  <FormInput
                    name={"secondaryInstitute"}
                    id={"secondaryInstitute"}
                    label="Institute"
                    placeholder="Institute name"
                    helpertext={
                      errors.secondaryInstitute
                        ? errors.secondaryInstitute
                        : "Secondary education institute"
                    }
                    helpercolor={errors.secondaryInstitute ? "red" : "gray.400"}
                    value={employeeData.secondaryInstitute}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormSelect
                    name={"secondaryProgram"}
                    id={"secondaryProgram"}
                    label={"Program"}
                    searchEnabled={true}
                    placeholder={"Select Program"}
                    helpertext={
                      errors.secondaryProgram
                        ? errors.secondaryProgram
                        : "Select program"
                    }
                    helpercolor={errors.secondaryProgram ? "red" : "gray.400"}
                    px={4}
                    options={programs.map((item) => {
                      return { label: item, value: item };
                    })}
                    defaultValue={employeeData.secondaryProgram}
                    onChange={(e) => {
                      let event = {
                        target: { value: e.value, name: "secondaryProgram" },
                      };
                      handleChange(event);
                    }}
                  />

                  <FormInput
                    name={"secondaryCompletionDate"}
                    id={"secondaryCompletionDate"}
                    label={"Completion Date"}
                    placeholder={"Completion Date"}
                    helpertext={
                      errors.secondaryCompletionDate
                        ? errors.secondaryCompletionDate
                        : "Specify completion date"
                    }
                    type={"month"}
                    helpercolor={
                      errors.secondaryCompletionDate ? "red" : "gray.400"
                    }
                    px={4}
                    defaultValue={employeeData.secondaryCompletionDate}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"secondaryGrade"}
                    id={"secondaryGrade"}
                    label="Grade / CGPA"
                    placeholder="Grade / CGPA"
                    helpertext={
                      errors.secondaryGrade
                        ? errors.secondaryGrade
                        : "Total CGPA"
                    }
                    helpercolor={errors.secondaryGrade ? "red" : "gray.400"}
                    px={{ base: 0, md: 4 }}
                    value={employeeData.secondaryGrade}
                    onChange={(e) => handleChange(e)}
                  />
                </SimpleGrid>
              </Box>

              <Box>
                <Heading as={"h2"} size={"sm"} pt={3}>
                  Intermediate Education
                </Heading>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
                  <FormInput
                    name={"intermediateInstitute"}
                    id={"intermediateInstitute"}
                    label="Institute"
                    placeholder="Institute name"
                    helpertext={
                      errors.intermediateInstitute
                        ? errors.intermediateInstitute
                        : "Intermediate education institute"
                    }
                    helpercolor={
                      errors.intermediateInstitute ? "red" : "gray.400"
                    }
                    value={employeeData.intermediateInstitute}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormSelect
                    name={"intermediateProgram"}
                    id={"intermediateProgram"}
                    label={"Program"}
                    searchEnabled={true}
                    placeholder={"Select Program"}
                    helpertext={
                      errors.intermediateProgram
                        ? errors.intermediateProgram
                        : "Select program"
                    }
                    helpercolor={
                      errors.intermediateProgram ? "red" : "gray.400"
                    }
                    px={4}
                    options={programs.map((item) => {
                      return { label: item, value: item };
                    })}
                    defaultValue={employeeData.intermediateProgram}
                    onChange={(e) => {
                      let event = {
                        target: { value: e.value, name: "intermediateProgram" },
                      };
                      handleChange(event);
                    }}
                  />

                  <FormInput
                    name={"intermediateCompletionDate"}
                    id={"intermediateCompletionDate"}
                    label={"Completion Date"}
                    placeholder={"Completion Date"}
                    helpertext={
                      errors.intermediateCompletionDate
                        ? errors.intermediateCompletionDate
                        : "Specify completion date"
                    }
                    type={"month"}
                    helpercolor={
                      errors.intermediateCompletionDate ? "red" : "gray.400"
                    }
                    px={4}
                    defaultValue={employeeData.intermediateCompletionDate}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"intermediateGrade"}
                    id={"intermediateGrade"}
                    label="Grade / CGPA"
                    placeholder="Grade / CGPA"
                    helpertext={
                      errors.intermediateGrade
                        ? errors.intermediateGrade
                        : "Total CGPA"
                    }
                    helpercolor={errors.intermediateGrade ? "red" : "gray.400"}
                    px={{ base: 0, md: 4 }}
                    value={employeeData.intermediateGrade}
                    onChange={(e) => handleChange(e)}
                  />
                </SimpleGrid>
              </Box>

              <Box>
                <Heading as={"h2"} size={"sm"} pt={3}>
                  Higher Education
                </Heading>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
                  <FormInput
                    name={"higherInstitute"}
                    id={"higherInstitute"}
                    label="Institute"
                    placeholder="Institute name"
                    helpertext={
                      errors.higherInstitute
                        ? errors.higherInstitute
                        : "Higher education institute"
                    }
                    helpercolor={errors.higherInstitute ? "red" : "gray.400"}
                    value={employeeData.higherInstitute}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormSelect
                    name={"higherProgram"}
                    id={"higherProgram"}
                    label={"Program"}
                    searchEnabled={true}
                    placeholder={"Select Program"}
                    helpertext={
                      errors.higherProgram
                        ? errors.higherProgram
                        : "Select program"
                    }
                    helpercolor={errors.higherProgram ? "red" : "gray.400"}
                    px={4}
                    options={programs.map((item) => {
                      return { label: item, value: item };
                    })}
                    defaultValue={employeeData.higherProgram}
                    onChange={(e) => {
                      let event = {
                        target: { value: e.value, name: "higherProgram" },
                      };
                      handleChange(event);
                    }}
                  />

                  <FormInput
                    name={"higherCompletionDate"}
                    id={"higherCompletionDate"}
                    label={"Completion Date"}
                    placeholder={"Select Completion Date"}
                    helpertext={
                      errors.higherCompletionDate
                        ? errors.higherCompletionDate
                        : "Specify completion date"
                    }
                    type={"month"}
                    helpercolor={
                      errors.higherCompletionDate ? "red" : "gray.400"
                    }
                    px={4}
                    defaultValue={employeeData.higherCompletionDate}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormInput
                    name={"higherGrade"}
                    id={"higherGrade"}
                    label="Grade / CGPA"
                    placeholder="Grade / CGPA"
                    helpertext={
                      errors.higherGrade ? errors.higherGrade : "Total CGPA"
                    }
                    helpercolor={errors.higherGrade ? "red" : "gray.400"}
                    px={{ base: 0, md: 4 }}
                    value={employeeData.higherGrade}
                    onChange={(e) => handleChange(e)}
                  />
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 3 }}>
                  <FormButton
                    onClick={handleSubmitEducationalDetails}
                    mt={3}
                    w={{ base: "full", md: "60%" }}
                  >
                    Next
                  </FormButton>
                  {/* <FormControl py={2}>
                    <Button
                      _focus={{
                        background: useColorModeValue("#ae0000", "gray.600"),
                        boxShadow: "none",
                      }}
                      _hover={{ background: useColorModeValue("#ae0000") }}
                      w={{ base: "full", md: "40%" }}
                      onClick={handleSubmitEducationalDetails}
                      mt={3}
                      bg={useColorModeValue("#ae0000", "gray.600")}
                      color={"white"}
                    >
                      Next
                    </Button>
                  </FormControl> */}
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </GridItem>
        )}

        {/* Array Educational Form */}
        {isVisible === 898 && (
          <GridItem
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            py={6}
            px={8}
            mx={2}
            colSpan={2}
          >
            <SimpleGrid pt={3} columns={2}>
              <Flex>
                <Button onClick={() => setIsVisible(2)} size="sm">
                  <BiLeftArrowAlt size={20} />
                </Button>

                <Heading as={"h2"} size={"md"} pl={4}>
                  Educational Details
                </Heading>
              </Flex>
              <Box textAlign={"right"}>
                <Button
                  as={"h3"}
                  size={"xs"}
                  bg={useColorModeValue("#ae0000")}
                  color={"white"}
                  onClick={() => {
                    let _educationalDetails = employeeData.educationalDetails;
                    _educationalDetails = [
                      ..._educationalDetails,
                      {
                        institute: "",
                        program: "",
                        completionYear: "",
                        grade: "",
                      },
                    ];
                    setEmployeeData({
                      ...employeeData,
                      educationalDetails: _educationalDetails,
                    });
                  }}
                >
                  Add New
                </Button>
              </Box>
            </SimpleGrid>
            <SimpleGrid pt={4} columns={1}>
              {employeeData.educationalDetails?.map((item, index) => (
                <Box>
                  <Flex>
                    {employeeData.educationalDetails.length > 1 && (
                      <Button
                        mr={2}
                        bg={useColorModeValue("#ae0000")}
                        color={"white"}
                        onClick={() => {
                          let _educationalDetails = [
                            ...employeeData.educationalDetails,
                          ];
                          _educationalDetails.splice(index, 1);
                          setEmployeeData({
                            ...employeeData,
                            educationalDetails: _educationalDetails,
                          });
                        }}
                        size={"xs"}
                      >
                        &times;
                      </Button>
                    )}
                    <Heading as={"h2"} size={"sm"}>
                      Degree
                    </Heading>
                  </Flex>

                  <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
                    <FormInput
                      name={"institute"}
                      id={"institute"}
                      label="Institute"
                      placeholder="Institute"
                      helpertext={
                        errors.educationalDetails &&
                        errors.educationalDetails[index]?.institute
                          ? errors?.educationalDetails[index]?.institute
                          : "Institute name"
                      }
                      helpercolor={
                        errors.educationalDetails &&
                        errors.educationalDetails[index]?.institute
                          ? "red"
                          : "gray.400"
                      }
                      required={true}
                      value={employeeData.educationalDetails[index].institute}
                      onChange={(e) => {
                        let _educationalDetails =
                          employeeData.educationalDetails;
                        item.institute = e.target.value;
                        _educationalDetails[index] = item;
                        setEmployeeData({
                          ...employeeData,
                          educationalDetails: _educationalDetails,
                        });
                      }}
                    />

                    <FormInput
                      name={"program"}
                      id={"program"}
                      label="Program Name"
                      placeholder="Program Name"
                      helpertext={
                        errors.educationalDetails &&
                        errors.educationalDetails[index]?.program
                          ? errors.educationalDetails[index]?.program
                          : "program name of this degree"
                      }
                      helpercolor={
                        errors.educationalDetails &&
                        errors.educationalDetails[index]?.program
                          ? "red"
                          : "gray.400"
                      }
                      required={true}
                      px={{ base: 0, sm: 4 }}
                      value={employeeData.educationalDetails[index].program}
                      onChange={(e) => {
                        let _educationalDetails =
                          employeeData.educationalDetails;
                        item.program = e.target.value;
                        _educationalDetails[index] = item;
                        setEmployeeData({
                          ...employeeData,
                          educationalDetails: _educationalDetails,
                        });
                      }}
                    />

                    <FormInput
                      name={"completionYear"}
                      id={"completionYear"}
                      label="Completion Date"
                      helpertext={
                        errors.educationalDetails &&
                        errors.educationalDetails[index]?.completionYear
                          ? errors.educationalDetails[index]?.completionYear
                          : "Date of completion"
                      }
                      helpercolor={
                        errors.educationalDetails &&
                        errors.educationalDetails[index]?.completionYear
                          ? "red"
                          : "gray.400"
                      }
                      type={"month"}
                      required={true}
                      px={{ base: 0, md: 4 }}
                      value={
                        employeeData.educationalDetails[index].completionYear
                      }
                      onChange={(e) => {
                        let _educationalDetails =
                          employeeData.educationalDetails;
                        item.completionYear = e.target.value;
                        _educationalDetails[index] = item;
                        setEmployeeData({
                          ...employeeData,
                          educationalDetails: _educationalDetails,
                        });
                      }}
                    />

                    <FormInput
                      name={"grade"}
                      id={"grade"}
                      label="Grade / CGPA"
                      placeholder="Grade / CGPA"
                      helpertext={
                        errors.educationalDetails &&
                        errors.educationalDetails[index]?.grade
                          ? errors.educationalDetails[index]?.grade
                          : "Grade or CGPA "
                      }
                      helpercolor={
                        errors.educationalDetails &&
                        errors.educationalDetails[index]?.grade
                          ? "red"
                          : "gray.400"
                      }
                      required={true}
                      value={employeeData.educationalDetails[index].grade}
                      onChange={(e) => {
                        let _educationalDetails =
                          employeeData.educationalDetails;
                        item.grade = e.target.value;
                        _educationalDetails[index] = item;
                        setEmployeeData({
                          ...employeeData,
                          educationalDetails: _educationalDetails,
                        });
                      }}
                    />
                  </SimpleGrid>
                </Box>
              ))}
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 3 }}>
              <FormButton
                onClick={handleSubmitEducationalDetails}
                mt={3}
                w={{ base: "full", md: "60%" }}
              >
                Next
              </FormButton>
              {/* <FormControl>
                <Button
                  _focus={{
                    background: useColorModeValue("#ae0000", "gray.600"),
                    boxShadow: "none",
                  }}
                  _hover={{ background: useColorModeValue("#ae0000") }}
                  w={{ base: "full", md: "40%" }}
                  onClick={handleSubmitEducationalDetails}
                  mt={3}
                  bg={useColorModeValue("#ae0000", "gray.600")}
                  color={"white"}
                >
                  Next
                </Button>
              </FormControl> */}
            </SimpleGrid>
          </GridItem>
        )}

        {/* Work Experience Form */}
        {isVisible === 4 && (
          <GridItem
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            py={6}
            px={8}
            mx={2}
            colSpan={2}
          >
            <SimpleGrid pt={3} columns={2}>
              <Flex>
                <Button onClick={() => setIsVisible(3)} size="sm">
                  <BiLeftArrowAlt size={20} />
                </Button>

                <Heading as={"h2"} size={"md"} pl={4}>
                  Work Experience
                </Heading>
              </Flex>
              <Box textAlign={"right"}>
                <Button
                  as={"h3"}
                  size={"xs"}
                  bg={useColorModeValue("#ae0000")}
                  color={"white"}
                  onClick={() => {
                    let _workExperience = employeeData.workExperience;
                    _workExperience = [
                      ..._workExperience,
                      {
                        designation: "",
                        company: "",
                        startDate: "",
                        endDate: "",
                        roleDescription: "",
                      },
                    ];
                    setEmployeeData({
                      ...employeeData,
                      workExperience: _workExperience,
                    });
                  }}
                >
                  Add New
                </Button>
              </Box>
            </SimpleGrid>
            <SimpleGrid pt={4} columns={1}>
              {employeeData.workExperience?.map((item, index) => (
                <Box>
                  <Flex>
                    {employeeData.workExperience.length > 1 && (
                      <Button
                        mr={2}
                        bg={useColorModeValue("#ae0000")}
                        color={"white"}
                        onClick={() => {
                          let _workExperience = [
                            ...employeeData.workExperience,
                          ];
                          _workExperience.splice(index, 1);
                          setEmployeeData({
                            ...employeeData,
                            workExperience: _workExperience,
                          });
                        }}
                        size={"xs"}
                      >
                        &times;
                      </Button>
                    )}
                    <Heading as={"h2"} size={"sm"}>
                      Experience
                    </Heading>
                  </Flex>

                  <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
                    spacing={{ base: 2, sm: 4 }}
                  >
                    <FormInput
                      name={"workExpDesignation"}
                      id={"workExpDesignation"}
                      label="Designation"
                      placeholder="Designation name"
                      helpertext={
                        errors.workExperience &&
                        errors.workExperience[index]?.designation
                          ? errors?.workExperience[index]?.designation
                          : "Designation name"
                      }
                      helpercolor={
                        errors.workExperience &&
                        errors.workExperience[index]?.designation
                          ? "red"
                          : "gray.400"
                      }
                      required={true}
                      value={employeeData.workExperience[index].designation}
                      onChange={(e) => {
                        let _workExperience = employeeData.workExperience;
                        item.designation = e.target.value;
                        _workExperience[index] = item;
                        let event = {
                          target: {
                            name: "workExperience",
                            value: _workExperience,
                          },
                        };
                        handleChange(event);
                      }}
                    />

                    <FormInput
                      name={"company"}
                      id={"company"}
                      label="Company Name"
                      placeholder="Company Name"
                      helpertext={
                        errors.workExperience &&
                        errors.workExperience[index]?.company
                          ? errors.workExperience[index]?.company
                          : "Company name of this experience"
                      }
                      helpercolor={
                        errors.workExperience &&
                        errors.workExperience[index]?.company
                          ? "red"
                          : "gray.400"
                      }
                      required={true}
                      value={employeeData.workExperience[index].company}
                      onChange={(e) => {
                        let _workExperience = employeeData.workExperience;
                        item.company = e.target.value;
                        _workExperience[index] = item;
                        let event = {
                          target: {
                            name: "workExperience",
                            value: _workExperience,
                          },
                        };
                        handleChange(event);
                      }}
                    />

                    <FormInput
                      name={"startDate"}
                      id={"startDate"}
                      label="Start Date"
                      helpertext={
                        errors.workExperience &&
                        errors.workExperience[index]?.startDate
                          ? errors.workExperience[index]?.startDate
                          : "Start date"
                      }
                      type={"month"}
                      helpercolor={
                        errors.workExperience &&
                        errors.workExperience[index]?.startDate
                          ? "red"
                          : "gray.400"
                      }
                      required={true}
                      value={employeeData.workExperience[index].startDate}
                      onChange={(e) => {
                        let _workExperience = employeeData.workExperience;
                        item.startDate = e.target.value;
                        _workExperience[index] = item;
                        let event = {
                          target: {
                            name: "workExperience",
                            value: _workExperience,
                          },
                        };
                        handleChange(event);
                      }}
                    />

                    <FormInput
                      name={"endDate"}
                      id={"endDate"}
                      label="End Date"
                      helpertext={
                        errors.workExperience &&
                        errors.workExperience[index]?.endDate
                          ? errors.workExperience[index]?.endDate
                          : "End date"
                      }
                      type={"month"}
                      helpercolor={
                        errors.workExperience &&
                        errors.workExperience[index]?.endDate
                          ? "red"
                          : "gray.400"
                      }
                      required={true}
                      value={employeeData.workExperience[index].endDate}
                      onChange={(e) => {
                        let _workExperience = employeeData.workExperience;
                        item.endDate = e.target.value;
                        _workExperience[index] = item;
                        let event = {
                          target: {
                            name: "workExperience",
                            value: _workExperience,
                          },
                        };
                        handleChange(event);
                      }}
                    />
                  </SimpleGrid>

                  <SimpleGrid columns={1}>
                    <FormInput
                      name={"roleDescription"}
                      id={"roleDescription"}
                      label="Role Description"
                      placeholder="Role Description"
                      helpertext={
                        errors.workExperience &&
                        errors.workExperience[index]?.roleDescription
                          ? errors.workExperience[index]?.roleDescription
                          : "Role description of this experience"
                      }
                      helpercolor={
                        errors.workExperience &&
                        errors.workExperience[index]?.roleDescription
                          ? "red"
                          : "gray.400"
                      }
                      required={true}
                      value={employeeData.workExperience[index].roleDescription}
                      onChange={(e) => {
                        let _workExperience = employeeData.workExperience;
                        item.roleDescription = e.target.value;
                        _workExperience[index] = item;
                        let event = {
                          target: {
                            name: "workExperience",
                            value: _workExperience,
                          },
                        };
                        handleChange(event);
                      }}
                    />
                  </SimpleGrid>
                </Box>
              ))}
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 3 }}>
              <FormButton
                onClick={handleSubmitWorkExperience}
                mt={3}
                w={{ base: "full", md: "60%" }}
              >
                Next
              </FormButton>
              {/* <FormControl>
                <Button
                  _focus={{
                    background: useColorModeValue("#ae0000", "gray.600"),
                    boxShadow: "none",
                  }}
                  _hover={{ background: useColorModeValue("#ae0000") }}
                  w={{ base: "full", md: "40%" }}
                  onClick={handleSubmitWorkExperience}
                  mt={3}
                  bg={useColorModeValue("#ae0000", "gray.600")}
                  color={"white"}
                >
                  Next
                </Button>
              </FormControl> */}
            </SimpleGrid>
          </GridItem>
        )}

        {/* Team Information Form */}
        {isVisible === 5 && (
          <GridItem
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            py={6}
            px={8}
            mx={2}
            colSpan={2}
          >
            <Flex alignItems={"center"}>
              <Button onClick={() => setIsVisible(4)} size="sm">
                <BiLeftArrowAlt size={20} />
              </Button>
              <Heading as={"h2"} size={"md"} pl={4}>
                Team Information
              </Heading>
            </Flex>
            <SimpleGrid py={5} columns={1}>
              <Box>
                <SimpleGrid columns={2} spacing={5}>
                  <FormInput
                    name={"designation"}
                    id={"designation"}
                    label="Designation"
                    placeholder="Employee Designation"
                    helpertext={
                      errors.designation
                        ? errors.designation
                        : "Employee's current designation"
                    }
                    helpercolor={errors.designation ? "red" : "gray.400"}
                    required={true}
                    value={employeeData.designation}
                    onChange={(e) => handleChange(e)}
                  />

                  <FormSelect
                    name={"team"}
                    id={"team"}
                    label={"Team"}
                    placeholder={"Select Team"}
                    helpertext={
                      errors.team ? errors.team : "Assign team to employee"
                    }
                    helpercolor={errors.team ? "red" : "gray.400"}
                    options={teams?.map((item) => {
                      return { label: item.teamName, value: item.teamId };
                    })}
                    defaultValue={employeeData.team}
                    onChange={(e) => handleChange(e)}
                  />
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 3 }}>
                  <FormButton
                    onClick={handleSubmitTeamInfo}
                    w={{ base: "full", md: "60%" }}
                  >
                    Next
                  </FormButton>

                  {/* <FormControl py={2} px={4}>
                    <Button
                      _focus={{
                        background: useColorModeValue("#ae0000", "gray.600"),
                        boxShadow: "none",
                      }}
                      _hover={{ background: useColorModeValue("#ae0000") }}
                      w={{ base: "full", md: "40%" }}
                      onClick={handleSubmitTeamInfo}
                      mt={3}
                      bg={useColorModeValue("#ae0000", "gray.600")}
                      color={"white"}
                    >
                      Finish
                    </Button>
                  </FormControl> */}
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </GridItem>
        )}
      </Grid>
    </>
  );
};

export default AddEmployee;
