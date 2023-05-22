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
import { Cinzel, Lateef, Lato } from "next/font/google";
import { useMediaQuery } from "@chakra-ui/react";
import PrayerCards from "./prayer-cards";

export default function DetailsButton() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  return (
    <Box mt={25}>
      {isLargerThan1000 ? (
        <Center>
          <Button
            bg={"white"}
            color={"#4A5568"}
            width={250}
            borderBottomEndRadius={"black"}
            height={70}
            fontFamily={"Lato"}
            border={"white"}
            fontSize={17}
          >
            See Details{" "}
          </Button>
        </Center>
      ) : (
        <Center>
          <Button
            bg={"#38A169"}
            color={"white"}
            fontSize={17}
            width={250}
            height={70}
            fontFamily={"Lato"}
            border={"#38A169"}
          >
            See Details{" "}
          </Button>
        </Center>
      )}
    </Box>
  );
}
