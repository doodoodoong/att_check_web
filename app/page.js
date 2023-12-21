"use client";
import { Text } from "@chakra-ui/react";
import Topbar from "./components/topbar";
import MainSection from "./components/mainsection";
import KeyFeature from "./components/keyFeature";
import EffortlessMangement from "./components/effortlessMangement";

export default function Home() {
  return (
    <>
      <Topbar />
      <MainSection />
      <KeyFeature />
      <EffortlessMangement />
    </>
  );
}
