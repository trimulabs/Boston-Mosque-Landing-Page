"use client";
import { Image } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Center,
  Flex,
  Text,
  Spacer,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import sujood from "/public/images/men_in_sujood_illustration.svg";
import fajar from "/public/images/fajar.svg";
import zohar from "/public/images/zohar.svg";
import asar from "/public/images/asar.svg";
import maghrib from "/public/images/maghrib.svg";
import isha from "/public/images/isha.svg";
import { Cinzel } from "next/font/google";
import { useMediaQuery } from "@chakra-ui/react";
import PrayerCards from "./prayer-cards";
import ResponsiveCardLayout from "./namaz-cards";

const PrayerTime = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  return (
    <Box bgColor={"#38A169"} color={"white"} id="prayer-times">
      <Box paddingTop={80}>
        <Heading fontFamily={"Cinzel"} paddingLeft={100} fontSize={30}>
          {" "}
          PRAYER TIME
        </Heading>
        <Text
          textAlign={"left"}
          paddingLeft={100}
          paddingRight={100}
          paddingTop={30}
          fontSize={20}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </Box>
      <Center>
        {" "}
        <Image
          src={sujood.src}
          align={"center"}
          width={450}
          height={300}
          marginTop={50}
          marginBottom={50}
        ></Image>
      </Center>
      <Box paddingBottom={30}>
        {isLargerThan1000 ? (
          <ResponsiveCardLayout />
        ) : (
          <Center>
            <ResponsiveCardLayout />
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default PrayerTime;
