import {
  Box,
  SimpleGrid,
  useMediaQuery,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Image,
  CardHeader,
  Text,
} from "@chakra-ui/react";
import fajar from "/public/images/fajar.svg";
import zohar from "/public/images/zohar.svg";
import asar from "/public/images/asar.svg";
import maghrib from "/public/images/maghrib.svg";
import isha from "/public/images/isha.svg";
import { Asar } from "next/font/google";

import mosque from "public/images/mosque-develop_icon.svg";
import quran from "/public/images/quran_teaching_icon.svg";
import islamic_classes from "/public/images/islamic_classes_icon.svg";
import islamic_awareness from "/public/images/islamic_awareness.svg";
import charity from "/public/images/charity_icon.svg";
import { useEffect, useState } from "react";

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

const ResponsiveCardLayout: React.FC = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 1300px)");

  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [data, setData] = useState<Response | null>(null);

  return (
    <Box width="100%" display="flex" justifyContent="center">
      <SimpleGrid
        columns={isSmallScreen ? 1 : 3}
        spacing={80}
        position={"absolute"}
      >
        {/* Render your card components here */}
        {/* Example card component */}
        <Box
          bg={"#E2E8F0"}
          padding="4"
          borderRadius="md"
          textAlign="center"
          color={"black"}
          width={isSmallScreen ? "100%" : "550"}
          height={630}
        >
          <Card width={530}>
            <CardHeader>
              <Image
                src={mosque.src}
                width={150}
                height={150}
                marginTop={50}
                align={"center"}
              />
            </CardHeader>
            <CardBody>
              <Heading
                size="lg"
                fontFamily={"Cinzel"}
                alignItems={"center"}
                fontSize={30}
                lineHeight={1.5}
                fontWeight={20}
                textAlign={"center"}
                mt={20}
              >
                {" "}
                MOSQUE <br />
                DEVELOPMENT
              </Heading>
            </CardBody>
            <CardFooter>
              <Text
                display={"inline-block"}
                fontWeight={500}
                fontSize={16}
                lineHeight={1.7}
                textAlign={"center"}
                mt={20}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Text>
            </CardFooter>
          </Card>
        </Box>
        <Box
          bg={"#E2E8F0"}
          height={230}
          color={"black"}
          padding="4"
          borderRadius="md"
          textAlign="center"
          width={isSmallScreen ? "100%" : "auto"}
        >
          <Card>
            <CardHeader>
              <Image
                src={zohar.src}
                width={50}
                height={50}
                marginTop={50}
                align={"center"}
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
              <Text
                fontWeight={500}
                fontSize={25}
                lineHeight={1.5}
                align={"center"}
                ml={60}
                textAlign={"center"}
              >
                jdgek
              </Text>
            </CardFooter>
          </Card>
        </Box>
        <Box
          bg={"#E2E8F0"}
          height={230}
          color={"black"}
          padding="4"
          borderRadius="md"
          textAlign="center"
          width={isSmallScreen ? "100%" : "auto"}
        >
          <Card>
            <CardHeader>
              <Image
                src={asar.src}
                width={50}
                height={50}
                marginTop={50}
                align={"center"}
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
              <Text
                fontWeight={500}
                fontSize={25}
                lineHeight={1.5}
                align={"center"}
                ml={60}
                textAlign={"center"}
              >
                jdgek
              </Text>
            </CardFooter>
          </Card>
        </Box>

        {/* Add more card components here */}
      </SimpleGrid>
    </Box>
  );
};

export default ResponsiveCardLayout;
