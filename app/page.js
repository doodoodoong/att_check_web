"use client";
import { Divider, Text } from "@chakra-ui/react";
import Topbar from "./components/topbar";
import MainSection from "./components/mainsection";
import KeyFeature from "./components/keyFeature";
import EffortlessMangement from "./components/effortlessMangement";
import SignUp from "./components/signUp";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <MainSection />
      <KeyFeature />
      <EffortlessMangement />
      <SignUp />
      <Divider />
      <Footer />
    </>
  );
}
