"use client";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./page.module.css";

import Backpic from "@/components/bg-text";
import Islam from "@/components/islamicCenter";
import Islam2 from "@/components/IslamicCenterResponsive";
import Navbar from "@/components/NavBar";
import NavBar2 from "@/components/navbar2";
import PrayerTime from "@/components/prayer-time";
import Services from "@/components/services-we-offer";
import Tomb from "@/components/tomb";
import FormWithMap from "@/components/form-with-map";
import Footer from "@/components/footer";
import ResponsiveFormMap from "@/components/responsive-form-map";
import Prayer from "@/components/text-with-kaba";
import tomb from "../../public/images/light_background.png";

import Tester5 from "@/components/responsive-cards";

import { Box, Card, Center, Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import icons from "@chakra-ui/icons";
import ExtraDetails from "@/components/extra-details";
import ServiceCards from "@/components/services-cards";
import DetailsButton from "@/components/detail-button";
import { useMediaQuery } from "@chakra-ui/react";
import ImageWithParagraph from "@/components/text-with-kaba";
import ImageWithText from "@/components/bg-with-text";
import ResponsiveCardLayout from "@/components/namaz-cards";

import MapCards from "@/components/map-cards";

import kabbaimg from "../../public/images/Khana_Khaba.svg";
export default function Home() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan1378] = useMediaQuery("(min-width: 1378px)");
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  return (
    <div>
      <NavBar2 />
      <ImageWithText
        text="The mosque is the place where we feel the presence of Allah, and where we find peace."
        imageAlt="background image"
        headingText="CALL UPON ME, I'LL RESPOND TO YOU"
      />
      <ImageWithParagraph
        imagePath={kabbaimg.src}
        imageAlt="Description of the image"
        headingText=" WELCOME TO OUR ISLAMIC CENTRE"
        paragraphText="Corem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged."
      />
      <PrayerTime />
      <Services />

      <MapCards />

      <Tomb imageUrl={tomb.src} imageAlt="tomb" />
      <ResponsiveFormMap />
      {isLargerThan1000 ? (
        <ExtraDetails />
      ) : (
        <Center>
          <ExtraDetails />
        </Center>
      )}
    </div>
  );
}
