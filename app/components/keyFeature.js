"use client";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function KeyFeature() {
  return (
    <Flex justifyContent={"center"} paddingX={"170px"} paddingY={"60px"}>
      <Flex gap={"24px"} direction={"column"}>
        <Text fontSize={"4xl"} fontWeight={"bold"} textAlign={"center"}>
          Key Features
        </Text>
        <Text>
          Discover the powerful features that make attendance management simple
        </Text>
        <Flex gap={"40px"}>
          <Card>
            <CardHeader>
              <Heading size={"lg"}>Attendance Record</Heading>
            </CardHeader>
            <CardBody>
              <Box>
                <Heading size={"xs"}>
                  View and manage attendance history
                </Heading>
              </Box>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size={"lg"}>Absence Report</Heading>
            </CardHeader>
            <CardBody>
              <Heading size={"xs"}>
                Review and approve absence documentation
              </Heading>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size={"lg"}>Notification</Heading>
            </CardHeader>
            <CardBody>
              <Heading size={"xs"}>
                Get instant alerts on important updates
              </Heading>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}
