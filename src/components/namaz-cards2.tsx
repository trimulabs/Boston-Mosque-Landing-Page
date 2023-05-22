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

type CardData = {
  title: string;
  description: string;
  image: string;
};
// Sample card data
const cardData: CardData[] = [
  {
    title: "FAJAR",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${fajar.src}`,
  },
  {
    title: "ZOHAR",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${zohar.src}`,
  },
  {
    title: "ASAR",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${asar.src}`,
  },
  {
    title: "MAGHRIB",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${maghrib.src}`,
  },
  {
    title: " ISHA",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${isha.src}`,
  },
];

const ResponsiveCardLayout: React.FC = () => {
  const [isLargerThanMedium] = useMediaQuery("(min-width: 768px)");
  const [isLarger] = useMediaQuery("(min-width: 1200px)");

  const [isSmallScreen] = useMediaQuery("(max-width: 1000px)");

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
    <Box width="100%" display="flex" justifyContent="center">
      <SimpleGrid columns={isSmallScreen ? 1 : 5} spacing={30}>
        {/* Render your card components here */}
        {/* Example card component */}
        <Box
          bg={"#E2E8F0"}
          height={230}
          padding="4"
          borderRadius="md"
          textAlign="center"
          color={"black"}
          width={isSmallScreen ? "100%" : "auto"}
        >
          <Card width={200}>
            <CardHeader>
              <Image
                src={fajar.src}
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
                  ml={60}
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
              {data ? (
                <Text
                  fontWeight={500}
                  fontSize={25}
                  lineHeight={1.5}
                  align={"center"}
                  ml={60}
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
              {data ? (
                <Text
                  fontWeight={500}
                  fontSize={25}
                  lineHeight={1.5}
                  align={"center"}
                  ml={60}
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
                src={maghrib.src}
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
                  ml={60}
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
                src={isha.src}
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
                ISHA
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text
                  fontWeight={500}
                  fontSize={25}
                  lineHeight={1.5}
                  align={"center"}
                  ml={60}
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

        {/* Add more card components here */}
      </SimpleGrid>
    </Box>
  );
};

export default ResponsiveCardLayout;
