"use client";

import { Image } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useState, useLayoutEffect } from "react";
import React from "react";
import { useRouter, Router } from "next/router";

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
import { stringify } from "querystring";
import { json } from "stream/consumers";
import { useEffect } from "react";

interface Response {
  code: number;
  data: Data;
}
interface Data {
  timings: Timings;
}
interface Timings {
  Asr: string;
  Dhuhr: string;
  Fajr: string;
  Firstthird: string;
  Imsak: string;
  Isha: string;
  Lastthird: string;
  Maghrib: string;
  Midnight: string;
  Sunrise: string;
  Sunset: string;
}
export default function PrayerCards() {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [data, setData] = useState<Response | null>(null);

  let currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = String(currentDate.getFullYear());
  const formattedDate = `${day}-${month}-${year}`;
  console.log("formattedDate", formattedDate);

  const storedDate = localStorage.getItem("currentDate");
  if (formattedDate && formattedDate !== storedDate) {
    localStorage.setItem("currentDate", formattedDate);
  }
  let url = `http://api.aladhan.com/v1/timingsByAddress/${sessionStorage.getItem(
    "currentDate"
  )}?address=451%20Short%20St,%20South%20Boston,%20VA%2024592,%20United%20States`;

  useEffect(() => {
    const checkDate = async () => {
      if (formattedDate && formattedDate !== storedDate) {
        localStorage.setItem("currentDate", formattedDate);
      }
      try {
        const response = await fetch(url);
        const jsondata = await response.json();
        console.log(jsondata);
        setData(jsondata);
      } catch (error) {
        console.error("error, fetching the data", error);
      }
    };
    checkDate();
    const interval = setInterval(checkDate, 86400000);
    return () => clearInterval(interval);

    /*const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsondata = await response.json();
        console.log(jsondata);
        setData(jsondata);
      } catch (error) {
        console.error("error, fetching the data", error);
      }
    };
    fetchData();*/
  }, [formattedDate]);
  return (
    <Box>
      <SimpleGrid
        spacing={3}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        marginRight={70}
        color={"black"}
        fontFamily={"Lato"}
        ml={85}
        paddingBottom={80}
      >
        <Box bg={"#E2E8F0"} height={230} width={170} mt={20}>
          <Card>
            <CardHeader>
              <Image
                src={fajar.src}
                width={50}
                height={50}
                marginTop={50}
                align={"center"}
                ml={60}
              />
            </CardHeader>
            <CardBody>
              <Heading
                size="md"
                fontFamily={"Cinzel"}
                alignItems={"center"}
                fontSize={25}
                lineHeight={1.5}
                fontWeight={20}
                textAlign={"center"}
              >
                {" "}
                FAJAR
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text
                  fontWeight={500}
                  fontSize={25}
                  lineHeight={1.5}
                  align={"center"}
                  ml={38}
                  mr={15}
                  textAlign={"center"}
                >
                  {data.data.timings.Fajr}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>

        <Box bg={"#E2E8F0"} height={230} width={170} mt={20}>
          <Card>
            <CardHeader>
              <Image
                src={zohar.src}
                width={50}
                height={50}
                marginTop={60}
                ml={60}
              />
            </CardHeader>
            <CardBody>
              <Heading
                size="md"
                fontFamily={"Cinzel"}
                alignItems={"center"}
                fontSize={25}
                lineHeight={1.5}
                fontWeight={20}
                textAlign={"center"}
              >
                {" "}
                ZOHAR
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text
                  fontWeight={500}
                  fontSize={25}
                  lineHeight={1.5}
                  align={"center"}
                  ml={38}
                  mr={15}
                  textAlign={"center"}
                >
                  {data.data.timings.Dhuhr}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>
        <Box bg={"#E2E8F0"} height={230} width={170} mt={20}>
          <Card>
            <CardHeader>
              <Image
                src={asar.src}
                width={50}
                height={50}
                marginTop={60}
                ml={60}
              />
            </CardHeader>
            <CardBody>
              <Heading
                size="md"
                fontFamily={"Cinzel"}
                alignItems={"center"}
                fontSize={25}
                lineHeight={1.5}
                fontWeight={20}
                textAlign={"center"}
              >
                {" "}
                ASAR
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text
                  fontWeight={500}
                  fontSize={25}
                  lineHeight={1.5}
                  align={"center"}
                  ml={38}
                  mr={15}
                  textAlign={"center"}
                >
                  {data.data.timings.Asr}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>

        <Box bg={"#E2E8F0"} height={230} width={170} mt={20}>
          <Card>
            <CardHeader>
              <Image
                src={maghrib.src}
                width={50}
                height={50}
                marginTop={60}
                ml={60}
              />
            </CardHeader>
            <CardBody>
              <Heading
                size="md"
                fontFamily={"Cinzel"}
                alignItems={"center"}
                fontSize={25}
                lineHeight={1.5}
                fontWeight={20}
                textAlign={"center"}
              >
                {" "}
                MAGHRIB
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text
                  fontWeight={500}
                  fontSize={25}
                  lineHeight={1.5}
                  align={"center"}
                  ml={38}
                  mr={15}
                  textAlign={"center"}
                >
                  {data.data.timings.Maghrib}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>
        <Box bg={"#E2E8F0"} height={230} width={170} mt={20}>
          <Card>
            <CardHeader>
              <Image
                src={isha.src}
                width={50}
                height={50}
                marginTop={60}
                ml={60}
              />
            </CardHeader>
            <CardBody>
              <Heading
                size="md"
                fontFamily={"Cinzel"}
                alignItems={"center"}
                fontSize={25}
                lineHeight={1.5}
                fontWeight={20}
                textAlign={"center"}
              >
                {" "}
                ISHA
              </Heading>
            </CardBody>
            <CardFooter alignItems={"center"}>
              {data ? (
                <Text
                  fontWeight={500}
                  fontSize={25}
                  lineHeight={1.5}
                  align={"center"}
                  ml={38}
                  mr={15}
                  textAlign={"center"}
                >
                  {data.data.timings.Isha}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
