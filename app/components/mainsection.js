"use client";
import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export default function MainSection() {
  return (
    <Box
      height={"336px"}
      width={"auto"}
      bgColor={"grey"}
      paddingX={"170px"}
      paddingY={"60px"}
    >
      <Flex direction={"column"} gap={"24px"}>
        <Flex direction={"column"} gap={"3px"} alignItems={"center"}>
          <Text color={"white"} fontSize={"4xl"} fontWeight={"bold"}>
            Streamline Attendance
          </Text>
          <Text color={"white"} fontSize={"4xl"} fontWeight={"bold"}>
            Mangement
          </Text>
        </Flex>
        <Flex justifyContent={"center"}>
          <Text color={"white"}>
            Effortlessly track and manage attendance records
          </Text>
        </Flex>
        <Flex justifyContent={"center"}>
          <ButtonGroup gap={"12px"}>
            <Button borderRadius={"8px"} width={"120px"}>
              Log in
            </Button>
            <Button
              bgColor={"black"}
              color={"white"}
              borderRadius={"8px"}
              width={"120px"}
            >
              Sign Up
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
}
