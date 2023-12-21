"use client";

import { Flex, Heading } from "@chakra-ui/react";

export default function EffortlessMangement() {
  return (
    <Flex gap={"60px"} paddingX={"170px"} paddingY={"60px"}>
      <Flex direction={"column"} gap={"24px"}>
        <Heading size={"lg"}>Effortless Attendance Mangement</Heading>
        <Heading size={"xs"} fontWeight={"none"}>
          Enjoy a simple and intuitive interface to manage attendance
          effectively
        </Heading>
      </Flex>
    </Flex>
  );
}
