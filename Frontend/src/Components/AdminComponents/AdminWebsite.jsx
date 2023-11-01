import {
  Button,
  Text,
  Flex,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  FormControl,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContainerBox from "../Helpers/ContainerBox";

const AdminWebsite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const cancelRef = React.useRef();

  const [OStatus, setOstatus] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const getData = () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <ContainerBox>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text
          mb="2"
          p={"10px"}
          fontWeight={"500"}
          fontSize={{ base: "1.3rem", md: "2rem" }}
        >
          Website Management
        </Text>
        <Flex gap={2}>
          <Button
            bg={"blue.400"}
            colorScheme={"blue"}
            variant={"solid"}
            rightIcon={<FiSettings />}
          >
            Settings
          </Button>
        </Flex>
      </Flex>

      {/**<!--*------- <Alerts> ----------->*/}
      <AlertDialog
        isCentered
        motionPreset="slideInBottom"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? This action will delete a User and cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      {/**<!--*------- <Update Status popup> ----------->*/}

      <AlertDialog
        isCentered
        motionPreset="slideInBottom"
        isOpen={isOpen1}
        leastDestructiveRef={cancelRef}
        onClose={onClose1}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {OStatus == "rejected"
                ? "Are you sure to you want to Disable this user?"
                : "Updating User"}
            </AlertDialogHeader>

            <AlertDialogBody>
              <FormControl color={"black"}>
                Changing User Status to {OStatus.toLocaleUpperCase()}
                <br />
              </FormControl>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose1}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  HandleUpdateUser(OStatus);
                  onClose1();
                }}
                ml={3}
              >
                Update
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ContainerBox>
  );
};

export default AdminWebsite;
