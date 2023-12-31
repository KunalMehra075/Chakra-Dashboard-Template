import {
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/BaseURL";

const ChangePassword = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const oldPassInput = useRef();
  const newPassInput = useRef();
  const confirmPassInput = useRef();

  const changePassHandler = (event) => {
    event.preventDefault();
    const enteredOldPass = oldPassInput.current.value;
    const enteredNewPass = newPassInput.current.value;
    const enteredConfirmPass = confirmPassInput.current.value;
    if (enteredNewPass !== enteredConfirmPass) {
      return toast({
        status: "error",
        title: "Passwords do not Match",
      });
    } else if (enteredOldPass === enteredNewPass) {
      return toast({
        status: "error",
        title: "Old & New Password cannot be same.",
      });
    }

    let body = {
      providedPass: enteredOldPass,
      newPass: enteredConfirmPass,
      email: JSON.parse(localStorage.getItem("Userdata_tempapp"))?.email,
    };

    axios
      .patch(`${BASE_URL}/api/user/change-password`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast({
            status: "success",
            title: "Password Changed Successfully",
          });
          navigate("/user/dashboard", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          status: "error",
          title: err?.response?.data?.message || "Something Went Wrong",
        });
      });
  };

  return (
    <>
      <Center p="5" m={"auto"}>
        <Card width="400px" border="0.2px solid #ddd" p="5">
          <Text
            p={"10px"}
            fontWeight={"500"}
            fontSize={{ base: "1.3rem", md: "2rem" }}
          >
            Change Password
          </Text>
          <CardBody>
            <Text>Enter old Password</Text>
            <Input
              my="1"
              placeholder="Enter 8 digit password"
              width="300px"
              ref={oldPassInput}
            />
            <Text>Enter new Password</Text>
            <Input
              my="1"
              placeholder="Enter 8 digit password"
              width="300px"
              ref={newPassInput}
            />
            <Text>Confirm new Password</Text>
            <Input
              my="1"
              placeholder="Enter 8 digit password"
              width="300px"
              ref={confirmPassInput}
            />
          </CardBody>
          <Button colorScheme="green" onClick={changePassHandler}>
            Submit
          </Button>
        </Card>
      </Center>
    </>
  );
};

export default ChangePassword;
