import { Box, SimpleGrid, useMediaQuery, Heading, Card, CardBody, CardFooter, Image, CardHeader, Text } from "@chakra-ui/react";
import fajar from "/public/images/fajar.svg";
import zohar from "/public/images/zohar.svg";
import asar from "/public/images/asar.svg";
import maghrib from "/public/images/maghrib.svg";
import isha from "/public/images/isha.svg";
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
  const [isSmallScreen] = useMediaQuery("(max-width: 1000px)");

  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [data, setData] = useState<Response | null>(null);

  let url = `https://api.aladhan.com/v1/timingsByAddress/${new Date().toISOString()}?address=451%20Short%20St,%20South%20Boston,%20VA%2024592,%20United%20States`;

  useEffect(() => {
    const checkDate = async () => {
      try {
        const response = await fetch(url);
        const jsondata = await response.json();
        setData(jsondata);
      } catch (error) {
        console.error("error, fetching the data", error);
      }
    };
    checkDate();
  }, []);
  const formatTo12Hour = (time: string) => {
    const [hour, minute] = time.split(":").map(Number);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
    return `${formattedHour}:${minute.toString().padStart(2, "0")} ${period}`;
  };
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <SimpleGrid columns={isSmallScreen ? 1 : 6} spacing={30}>
        {/* Render your card components here */}
        {/* Example card component */}
        <Box bg={"#E2E8F0"} height={230} padding="4" borderRadius="md" textAlign="center" color={"black"} width={isSmallScreen ? "100%" : "auto"}>
          <Card width={200}>
            <CardHeader>
              <Image src={fajar.src} width={50} height={50} marginTop={50} align={"center"} />
            </CardHeader>
            <CardBody>
              <Heading size="md" fontFamily={"Cinzel"} alignItems={"center"} fontSize={25} lineHeight={1.5} fontWeight={20} textAlign={"center"}>
                {" "}
                FAJAR
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text fontWeight={500} fontSize={25} lineHeight={1.5} align={"center"} ml={60} textAlign={"center"}>
                  {data.data.timings.Fajr}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>
        <Box bg={"#E2E8F0"} height={230} color={"black"} padding="4" borderRadius="md" textAlign="center" width={isSmallScreen ? "100%" : "auto"}>
          <Card>
            <CardHeader>
              <Image src={zohar.src} width={50} height={50} marginTop={50} align={"center"} />
            </CardHeader>
            <CardBody>
              <Heading size="md" fontFamily={"Cinzel"} alignItems={"center"} fontSize={25} lineHeight={1.5} fontWeight={20} textAlign={"center"}>
                {" "}
                ZOHAR
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text fontWeight={500} fontSize={25} lineHeight={1.5} align={"center"} ml={60} textAlign={"center"}>
                  {formatTo12Hour(data.data.timings.Dhuhr)}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>
        <Box bg={"#E2E8F0"} height={230} color={"black"} padding="4" borderRadius="md" textAlign="center" width={isSmallScreen ? "100%" : "auto"}>
          <Card>
            <CardHeader>
              <Image src={asar.src} width={50} height={50} marginTop={50} align={"center"} />
            </CardHeader>
            <CardBody>
              <Heading size="md" fontFamily={"Cinzel"} alignItems={"center"} fontSize={25} lineHeight={1.5} fontWeight={20} textAlign={"center"}>
                {" "}
                ASAR
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text fontWeight={500} fontSize={25} lineHeight={1.5} align={"center"} ml={60} textAlign={"center"}>
                  {formatTo12Hour(data.data.timings.Asr)}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>
        <Box bg={"#E2E8F0"} height={230} color={"black"} padding="4" borderRadius="md" textAlign="center" width={isSmallScreen ? "100%" : "auto"}>
          <Card>
            <CardHeader>
              <Image src={maghrib.src} width={50} height={50} marginTop={50} align={"center"} />
            </CardHeader>
            <CardBody>
              <Heading size="md" fontFamily={"Cinzel"} alignItems={"center"} fontSize={25} lineHeight={1.5} fontWeight={20} textAlign={"center"}>
                {" "}
                MAGHRIB
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text fontWeight={500} fontSize={25} lineHeight={1.5} align={"center"} ml={60} textAlign={"center"}>
                  {formatTo12Hour(data.data.timings.Maghrib)}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>
        <Box bg={"#E2E8F0"} height={230} color={"black"} padding="4" borderRadius="md" textAlign="center" width={isSmallScreen ? "100%" : "auto"}>
          <Card>
            <CardHeader>
              <Image src={isha.src} width={50} height={50} marginTop={50} align={"center"} />
            </CardHeader>
            <CardBody>
              <Heading size="md" fontFamily={"Cinzel"} alignItems={"center"} fontSize={25} lineHeight={1.5} fontWeight={20} textAlign={"center"}>
                {" "}
                ISHA
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text fontWeight={500} fontSize={25} lineHeight={1.5} align={"center"} ml={60} textAlign={"center"}>
                  {formatTo12Hour(data.data.timings.Isha)}
                </Text>
              ) : (
                <Text>loading</Text>
              )}
            </CardFooter>
          </Card>
        </Box>

        <Box bg={"#E2E8F0"} height={230} color={"black"} padding="4" borderRadius="md" textAlign="center" width={isSmallScreen ? "100%" : "auto"}>
          <Card>
            <CardHeader>
              <Image src={zohar.src} width={50} height={50} marginTop={40} align={"center"} />
            </CardHeader>
            <CardBody>
              <Heading size="md" fontFamily={"Cinzel"} alignItems={"center"} fontSize={25} lineHeight={1.5} fontWeight={20} textAlign={"center"}>
                {" "}
                JUMMAH
                <br />
                Friday Prayer
              </Heading>
            </CardBody>
            <CardFooter>
              {data ? (
                <Text fontWeight={500} fontSize={25} lineHeight={1.5} align={"center"} ml={60} textAlign={"center"}>
                  {"1:30 PM"}
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
