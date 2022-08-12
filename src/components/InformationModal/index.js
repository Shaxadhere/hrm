//react imports
import React from "react";

//chakra ui imports
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  ModalFooter,
  ModalOverlay,
  ModalBody,
  SimpleGrid,
  Flex,
  Heading,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

//moment import
import moment from "moment";

//icons imports
import { AiOutlineDownload } from "react-icons/ai";

//main function
const TalentPool = (props) => {
  //initialising variables and states
  const { isOpen, onClose, size, modalData } = props;

  //return from main function
  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={onClose}
      size={size ? size : "xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Candidate Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid columns={2} spacing={2}>
            {Object.keys(modalData).map((key, index) => {
              if (
                key === "id" ||
                key === "createdAt" ||
                key === "updatedAt" ||
                key === "cv"
              ) {
                return null;
              }

              if (key === "date") {
                return (
                  <Flex>
                    <Heading
                      as={"h2"}
                      size={"sm"}
                      mr={2}
                      color={useColorModeValue("gray.600", "white")}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </Heading>
                    <Text fontSize={14}>
                      {moment(modalData[key]).format("dddd, DD-mm-YY")}
                    </Text>
                  </Flex>
                );
              }

              if (key === "skills") {
                return (
                  <Flex>
                    <Heading
                      as={"h2"}
                      size={"sm"}
                      mr={2}
                      color={useColorModeValue("gray.600", "white")}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </Heading>
                    <Text fontSize={14}>{modalData[key].join(", ")}</Text>
                  </Flex>
                );
              }

              return (
                <Flex>
                  <Heading
                    as={"h2"}
                    size={"sm"}
                    mr={2}
                    color={useColorModeValue("gray.600", "white")}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </Heading>
                  <Text fontSize={14}>{modalData[key]}</Text>
                </Flex>
              );
            })}
          </SimpleGrid>
        </ModalBody>
        <ModalFooter>
          {modalData.cv && (
            <Button
              size="sm"
              mr={2}
              bg={useColorModeValue("#ae0000")}
              color={"white"}
              onClick={() => window.open(modalData.cv[0], "_blank")}
            >
              <Box as={AiOutlineDownload} fontSize={20} mr={2} />
              Download CV
            </Button>
          )}
          <Button size="sm" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TalentPool;
