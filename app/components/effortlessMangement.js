"use client";

import {
  Badge,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function EffortlessMangement() {
  return (
    <Flex
      gap={"60px"}
      paddingX={"170px"}
      paddingY={"60px"}
      justifyContent={"center"}
    >
      <Flex direction={"column"} gap={"24px"} justifyContent={"center"}>
        <Heading size={"lg"}>Effortless Attendance Mangement</Heading>
        <Heading size={"xs"} fontWeight={"none"}>
          Enjoy a simple and intuitive interface to manage attendance
          effectively
        </Heading>
      </Flex>
      <Flex direction={"column"} gap={"40px"} paddingY={"20px"}>
        <Card
          direction={{ base: "100%" }}
          overflow={"hidden"}
          variant={"outline"}
          justifyContent={"center"}
        >
          <Image
            objectFit={"cover"}
            maxW={{ base: "100%", sm: "200px" }}
            width={"100px"}
            height={"100px"}
            src="#"
          />
          <CardBody>
            <Heading size={"md"}>Mark Attendacne</Heading>
            <Text>Easily mark attendance directily from the dashboard</Text>
          </CardBody>
        </Card>
        <Card
          direction={{ base: "100%" }}
          overflow={"hidden"}
          variant={"outline"}
          justifyContent={"center"}
        >
          <Image
            objectFit={"cover"}
            maxW={{ base: "100%", sm: "200px" }}
            width={"100px"}
            height={"100px"}
            src="#"
          />
          <CardBody>
            <Heading size={"md"}>Attendacne History</Heading>
            <Text>View and analyze attendance records for each class</Text>
          </CardBody>
        </Card>
        <Card
          direction={{ base: "100%" }}
          overflow={"hidden"}
          variant={"outline"}
          justifyContent={"center"}
        >
          <Image
            objectFit={"cover"}
            maxW={{ base: "100%", sm: "200px" }}
            width={"100px"}
            height={"100px"}
            src="#"
          />
          <CardBody>
            <Heading size={"md"}>Absence Documentation</Heading>
            <Text>Effortlessly manage and review absence documents</Text>
            <Stack direction={"row"}>
              <Badge>Pending</Badge>
              <Badge>Approved</Badge>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}
