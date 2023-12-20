"use client";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function KeyFeature() {
  return (
    <Flex gap={"60px"} paddingX={"170px"} paddingY={"60px"}>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"4xl"} fontWeight={"bold"} textAlign={"center"}>
          Key Feautres
        </Text>
      </Flex>
    </Flex>
  );
}
