import React, { useEffect, useState } from "react";
import {
  AbsoluteCenter,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Th,
  Tr,
  Spinner,
} from "@chakra-ui/react";

import Pie from "../Extra/ProfileCircle";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const UserDash = () => {
  const navigate = useNavigate();

  const MainUser = JSON.parse(localStorage.getItem("Userdata_tempapp"));
  const [Streaks, setStreaks] = useState([]);
  const [page, setpage] = useState(1);

  const getData = () => {
    let userID = MainUser._id;
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  return (
    <>
      <Text
        mb="2"
        px={"10px"}
        fontWeight={"500"}
        fontSize={{ base: "1.3rem", md: "2rem" }}
      >
        Dashboard
      </Text>

      <Flex
        width={{ md: "99%" }}
        my={5}
        flexWrap={"wrap"}
        gap={2}
        direction={{ base: "column", md: "row" }}
      >
        {/**<!--*------- <Welcome Card> ----------->*/}
        <Card width={{ base: "100%", md: "50%" }} p={5} textAlign={"center"}>
          <Text fontSize={"23px"} fontWeight={"600"} my={"auto"}>
            Welcome To Company!
          </Text>
          <Text fontSize={"18px"} fontWeight={"400"} my={"auto"}>
            Your Dashboard 🧑🏼‍🏫 is your hub.
            <br /> View ongoing streakes and personalize your profile here.
            <br /> Stay organized and engaged in your learning journey.
          </Text>
        </Card>
        {/**<!--*------- <Total Streaks Card> ----------->*/}
        <Card width={{ base: "100%", md: "24%" }}>
          <CardBody
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex
              border={"5px solid lightgreen"}
              borderRadius={"50%"}
              p={1}
              justifyContent={"center"}
              alignItems={"center"}
              pos={"relative"}
            >
              <Flex
                border={"5px solid pink"}
                borderRadius={"50%"}
                width={40}
                justifyContent={"center"}
                alignItems={"center"}
                height={40}
              >
                <Heading mx={"auto"} size={"3xl"}>
                  {Streaks?.length || 5 || <Spinner></Spinner>}
                </Heading>
                <AbsoluteCenter
                  left={4}
                  top={"78%"}
                  background={"white"}
                  borderRadius={"50%"}
                >
                  <BsFillCheckCircleFill fontSize={"40px"} color="lightgreen" />
                </AbsoluteCenter>
              </Flex>
            </Flex>
          </CardBody>

          <Heading fontSize={"1.2rem"} mx={"auto"} my={5}>
            Total Streaks
          </Heading>
        </Card>
        {/**<!--*------- <Profile complete Card> ----------->*/}

        <Card
          p={5}
          gap={2}
          width={{ base: "100%", md: "24%" }}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => navigate("/user/settings")}
        >
          <Pie percentage={90} colour="#2bb341" />
          <Text fontSize={"1.2rem"} fontWeight={"600"}>
            Your Profile Completeness
          </Text>
        </Card>
      </Flex>
    </>
  );
};

export default UserDash;

const cellStyle = {
  padding: "8px 4px",
  textAlign: "center",
};
const headCellStyle = {
  border: "1px solid #ddd",
  padding: "4px",
  textAlign: "center",
  color: "black",
};
