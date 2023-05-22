"use client";
import { Image, SimpleGrid } from "@chakra-ui/react";

import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { Flex, Spacer, Center, Square } from "@chakra-ui/react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import {
  Box,
  Text,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import kaba from "/public/images/Khana_Khaba.svg";
import exp from "constants";
import { Cinzel } from "next/font/google";

export default function Islam2() {
  return (
    <Center>
      <SimpleGrid columns={1} px={20} py={20}>
        <Box>
          <Image src={kaba.src} height={400} width={400}></Image>
        </Box>

        <Box
          backgroundColor="rgba(0.0)"
          pt={50}
          pl={5}
          ml={10}
          borderRadius="md"
          color="#525252"
          textAlign="center"
        >
          <Box>
            {" "}
            <Text
              paddingLeft={15}
              fontSize={30}
              fontFamily={"Cinzel"}
              font-weight={400}
              line-height={36}
              letter-spacing={0.07}
              textAlign={"left"}
            >
              WELCOME TO OUR ISLAMIC CENTRE
            </Text>
            <Text
              mb={30}
              textAlign={"left"}
              paddingLeft={15}
              paddingTop={30}
              fontSize={20}
            >
              Corem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Center>

    /* <Flex color='grey' height={300}>
 
 
             <Center w='800px' bg='green.500'>
                 <Text> <h2>WELCOME TO OUR ISLAMIC CENTRE</h2>
 
                     Corem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
             </Center>
 
 
             <Box flex='1' bg='white' >
 
                 <Image src="public/Khana_Kaaba.svg" alt='Dan Abramov' width={300} height={300} />
 
             </Box>
         </Flex>*/
  );
}
