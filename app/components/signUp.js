"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

export default function SignUp() {
  return (
    <Flex
      gap={"60px"}
      paddingX={"170px"}
      paddingY={"60px"}
      justifyContent={"center"}
    >
      <Flex direction={"column"} gap={"24px"}>
        <Heading size={"lg"}>Sign Up Now</Heading>
        <Text>
          Join the Attendance Check community and simplify your attendance
          management
        </Text>
        <Flex direction={"column"} gap={"4px"}>
          <Text fontSize={"xs"} fontWeight={"bold"}>
            Name
          </Text>
          <Input placeholder="Enter your name"></Input>
        </Flex>
        <Flex direction={"column"} gap={"4px"}>
          <Text fontSize={"xs"} fontWeight={"bold"}>
            Email
          </Text>
          <Input placeholder="Enter your email"></Input>
        </Flex>
        <Flex direction={"column"} gap={"4px"}>
          <Text fontSize={"xs"} fontWeight={"bold"}>
            Password
          </Text>
          <Input placeholder="Enter a password" type="password"></Input>
        </Flex>
        <ButtonGroup gap={"12px"}>
          <Button bgColor={"white"} color={"black"}>
            Log In
          </Button>
          <Button bgColor={"black"} color={"white"}>
            Sign Up
          </Button>
        </ButtonGroup>
      </Flex>
      <Box paddingY={"20px"}>
        <Box width={"520px"} height={"380px"} bgColor={"grey"}></Box>
      </Box>
    </Flex>
  );
}
