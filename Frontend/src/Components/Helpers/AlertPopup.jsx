import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const AlertPopup = ({
  isOpen,
  onOpen,
  onClose,
  onAction,
  action,
  heading,
  text,
}) => {
  let cancelRef = useRef();
  return (
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
            {heading}
          </AlertDialogHeader>

          <AlertDialogBody>{text}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                onAction();
                onClose();
              }}
              ml={3}
            >
              {action}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AlertPopup;
