import { Container } from "@chakra-ui/react";
import React from "react";

const ContainerBox = ({ children }) => {
  return (
    <Container
      maxW="container"
      borderRadius="5px"
      minH={"610px"}
      padding={"20px"}
      backgroundColor={"white"}
    >
      <>{children}</>
    </Container>
  );
};

export default ContainerBox;
