"use client";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Spacer,
  Center,
} from "@chakra-ui/react";
import fajar from "/public/images/fajar.svg";
import zohar from "/public/images/zohar.svg";
import asar from "/public/images/asar.svg";
import maghrib from "/public/images/maghrib.svg";
import isha from "/public/images/isha.svg";

import mosque from "public/images/mosque-develop_icon.svg";
import quran from "/public/images/quran_teaching_icon.svg";
import islamic_classes from "/public/images/islamic_classes_icon.svg";
import islamic_awareness from "/public/images/islamic_awareness.svg";
import charity from "/public/images/charity_icon.svg";
const Tester5: React.FC = () => {
  return (
    <Center>
      <Flex direction="column" align="center" maxW="350px" mx="auto">
        <Card
          image={mosque.src}
          alt="Fajar"
          height="600"
          width="450"
          title="MOSQUE DEVELOPMENT"
          subtitle=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged."
        />
        <Spacer my={4} />
        <Card
          image={quran.src}
          alt="Fajar"
          height="600"
          width="450"
          title="QURAN TEACHINGS"
          subtitle=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged."
        />
        <Spacer my={4} />
        <Card
          image={islamic_classes.src}
          alt="Fajar"
          height="600"
          width="450"
          title="ISLAMIC CLASSES"
          subtitle=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged."
        />
        <Spacer my={4} />
        <Card
          image={islamic_awareness.src}
          alt="Fajar"
          height="600"
          width="450"
          title="ISLAMIC AWARENESS"
          subtitle=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged."
        />
        <Spacer my={4} />
        <Card
          image={charity.src}
          alt="Fajar"
          height="600"
          width="450"
          title={"CHARITY & DONATION"}
          subtitle=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged."
        />
      </Flex>
    </Center>
  );
};
interface CardProps {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  height: string;
  width: string;
}
const Card: React.FC<CardProps> = ({
  image,
  alt,
  title,
  subtitle,
  height,
  width,
}) => {
  return (
    <Box
      bg="#38A169"
      color="white"
      p={4}
      borderRadius="md"
      textAlign="center"
      m={2}
      height={height}
      width={width}
    >
      <Image
        src={image}
        alt={alt}
        boxSize="50px"
        mx="40%"
        mb={2}
        width={80}
        height={80}
        mt={30}
      />
      <Heading
        as="h3"
        size="lg"
        fontSize={25}
        textAlign="center"
        mb={2}
        mt={20}
      >
        {title}
      </Heading>
      <Text
        fontWeight={500}
        textAlign="center"
        mt={40}
        mx={30}
        letterSpacing={2}
      >
        {subtitle}
      </Text>
    </Box>
  );
};
export default Tester5;
