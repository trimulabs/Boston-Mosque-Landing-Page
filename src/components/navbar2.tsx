import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Collapse,
  Text,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";

import Cards from "../components/cards";
import Backpic from "@/components/bg-text";
import Islam from "@/components/islamicCenter";
import Islam2 from "@/components/IslamicCenterResponsive";
import Navbar from "@/components/NavBar";
import ExtraDetails from "@/components/extra-details";
import ServiceCards from "@/components/services-cards";
import DetailsButton from "@/components/detail-button";
import PrayerTime from "@/components/prayer-time";
import Services from "@/components/services-we-offer";
import Tomb from "@/components/tomb";
import FormWithMap from "@/components/form-with-map";
import Footer from "@/components/footer";
import ResponsiveFormMap from "@/components/responsive-form-map";

export default function NavBar2() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding={2}
      bg="gray.800"
      color="green"
      fontSize={20}
      fontFamily="Cinzel"
      height={144}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        color="#368a39"
        mt={15}
        paddingLeft={60}
        letterSpacing={1}
      >
        SOUTH BOSTON VA MASJID
        <br /> AND ISLAMIC CENTER
      </Text>

      {isLargerThan1000 ? (
        <Box
          display={{ base: "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
          as="header"
          alignContent="center"
          justifyContent="space-between"
          padding={4}
          bg="gray.800"
          color="green"
          fontSize={20}
          fontFamily="Cinzel"
          float={"right"}
        >
          <Stack
            spacing={14}
            direction="row"
            align="center"
            fontSize={18}
            color={"black"}
            mr={30}
          >
            <Link
              px={2}
              py={1}
              href="#"
              className="active"
              textDecorationLine={"underline"}
              color={"#4A5568"}
            >
              Home
            </Link>
            <Link px={2} py={1} href="#prayer-times" color={"#4A5568"}>
              Prayer Times
            </Link>
            <Link px={2} py={1} href="#services" color={"#4A5568"}>
              Services
            </Link>
            <Link px={2} py={1} href="#contact-us" color={"#4A5568"}>
              Contact Us
            </Link>
            <Link px={2} py={1} href="#form-with-map" color={"#4A5568"}>
              Location
            </Link>
            <Button
              colorScheme="teal"
              variant="solid"
              size="xs"
              height={50}
              width={130}
              borderRadius={"6"}
              color={"white"}
              bgColor={"#368a39"}
              border={"none"}
            >
              Donate Us
            </Button>
          </Stack>
        </Box>
      ) : (
        <HamburgerIcon
          aria-label="xhsbjx"
          height={35}
          width={35}
          color={"black"}
          mr={20}
        />
      )}
    </Flex>
  );
}
