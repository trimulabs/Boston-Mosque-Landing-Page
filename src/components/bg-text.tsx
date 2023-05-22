"use client";
import { Image } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import HeroImg from "/public/images/hero_img.jpeg";
import { useMediaQuery } from "@chakra-ui/react";

export default function Backpic() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      {isLargerThan1000 ? (
        <Box
          bgImg={HeroImg.src}
          bgSize="cover"
          bgRepeat={"no-repeat"}
          minHeight={500}
          width={"100%"}
          backgroundPosition={"center"}
        >
          <Box
            backgroundColor="rgba(0.0)"
            p={150}
            pl={5}
            mr={250}
            borderRadius="md"
            color="white"
            textAlign="center"
          >
            <h1
              font-size={28}
              font-weight={400}
              line-height={36}
              letter-spacing={0.07}
              text-align={0}
            >
              "Call upon me, I'll respond to you"
            </h1>
            <br />
            <br />
            <p>
              The mosque is the place where we feel the presence of Allah, and
              where we find peace.
            </p>
          </Box>
        </Box>
      ) : (
        <Box
          bgImg={HeroImg.src}
          bgSize="cover"
          bgRepeat={"no-repeat"}
          minHeight={250}
        >
          <Box
            backgroundColor="rgba(0.0)"
            p={10}
            pl={5}
            mr={50}
            borderRadius="md"
            color="white"
            textAlign="center"
          >
            <Text
              font-size={25}
              font-weight={250}
              line-height={30}
              letter-spacing={0.07}
              text-align={0}
            >
              "Call upon me, I'll respond to you"
            </Text>

            <br />
            <br />
            <p>
              The mosque is the place where we feel the presence of Allah, and
              where we find peace.
            </p>
          </Box>
        </Box>
      )}
    </Box>
  );
}
