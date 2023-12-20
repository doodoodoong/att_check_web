"use client";

import { CheckIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function Topbar() {
  return (
    <Flex direction={"row"} padding={"20px"}>
      <Flex alignItems={"center"}>
        <CheckIcon />
        <Text paddingLeft={"20px"}>Attendance Check</Text>
      </Flex>
      <Spacer />
      <Flex gap={"40px"} alignItems={"center"}>
        <Link href={"/"} _hover={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link href={"/features"} _hover={{ textDecor: "none" }}>
          Features
        </Link>
        <Link href={"/support"} _hover={{ textDecor: "none" }}>
          Support
        </Link>
        <InputGroup>
          <Input placeholder="Search in site" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
}
