"use client";
import { Cinzel } from "next/font/google";
import { Lato } from "next/font/google";

import {
    AbsoluteCenter,
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    SimpleGrid,
    Heading,
    Text,
    Button,
    Image,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import mosque from "public/images/mosque-develop_icon.svg";
import quran from "/public/images/quran_teaching_icon.svg";
import islamic_classes from "/public/images/islamic_classes_icon.svg";
import islamic_awareness from "/public/images/islamic_awareness.svg";
import charity from "/public/images/charity_icon.svg";
import { useMediaQuery } from "@chakra-ui/react";

export default function ServiceCards() {
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
    return <Box></Box>;
}
