"use client";

import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex gap={"60px"} padding={"60px"} justifyContent={"center"}>
      <Link href={"/aboutus"}>About Us</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/privacypolicy"}>Privacy Policy</Link>
      <Link href={"/termsofservice"}>Terms of Service</Link>
    </Flex>
  );
}
