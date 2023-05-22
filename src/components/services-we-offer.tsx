"use client";
import { Image } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

import {
  Box,
  Heading,
  Flex,
  Text,
  Spacer,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";

export default function Services() {
  const [islargerthan1000] = useMediaQuery("(min-width: 1000px)");
  return islargerthan1000 ? (
    <Box minHeight={400} id="services">
      <Heading
        fontFamily={"Cinzel"}
        paddingLeft={100}
        paddingTop={80}
        fontSize={30}
        color={"#4A5568"}
      >
        {" "}
        SERVICES WE OFFER
      </Heading>
      <Text
        textAlign={"left"}
        paddingLeft={100}
        paddingRight={100}
        paddingTop={30}
        fontSize={20}
        letterSpacing={1}
        color={"#4A5568"}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
    </Box>
  ) : (
    <Box minHeight={400}>
      <Heading
        fontFamily={"Cinzel"}
        paddingLeft={70}
        paddingTop={80}
        fontSize={30}
        color={"#4A5568"}
      >
        {" "}
        SERVICES WE OFFER
      </Heading>
      <Text
        textAlign={"left"}
        paddingLeft={70}
        paddingRight={60}
        paddingTop={30}
        fontSize={20}
        letterSpacing={1}
        color={"#4A5568"}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
    </Box>
  );
}
