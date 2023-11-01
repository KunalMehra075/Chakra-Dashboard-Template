import React from "react";
import { Text } from "@chakra-ui/react";
import ContainerBox from "../Helpers/ContainerBox";

const AdminDash = () => {
  return (
    <ContainerBox>
      <Text
        mb="2"
        px={"10px"}
        fontWeight={"500"}
        fontSize={{ base: "1.3rem", md: "2rem" }}
      >
        Dashboard
      </Text>
    </ContainerBox>
  );
};

export default AdminDash;
