import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Icons/company.jpg";
import { loginUser } from "../Redux/Auth/Auth.action";

import pattern from "../assets/pattern.jpg";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const { loading } = useSelector((store) => store.UserAuthManager);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(form, navigate, toast));
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack
          bg={"white"}
          spacing={4}
          w={"full"}
          maxW={"md"}
          p={6}
          border={"1px solid #ddd"}
          borderRadius={"5px"}
        >
          <NavLink to="/">
            <Image
              src={logo}
              width={"200px"}
              display={"block"}
              margin={"auto"}
            />
          </NavLink>
          <Heading>User</Heading>
          <Heading fontSize={"2xl"}>Sign in to your account </Heading>
          <form action="" onSubmit={handleSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="Enter Email"
                type="email"
                value={form?.email}
                name="email"
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Enter Password"
                type="password"
                value={form?.password}
                name="password"
                onChange={handleChange}
                required
              />
            </FormControl>
            <br />
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link
                  color={"blue.500"}
                  onClick={() => navigate("/user/forgot-password")}
                >
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg={"green.400"}
                color={"white"}
                variant={"solid"}
                type="submit"
                isLoading={loading}
              >
                Sign in
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          objectPosition="center"
          src={pattern}
          style={{
            boxShadow: "inset 67px - 76px 66px 10px rgba(255, 255, 255, 1)",
          }}
        />
      </Flex>
    </Stack>
  );
}
