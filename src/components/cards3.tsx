import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Spacer,
  Center,
} from "@chakra-ui/react";
import mosque from "public/images/mosque-develop_icon.svg";
import quran from "/public/images/quran_teaching_icon.svg";
import islamic_classes from "/public/images/islamic_classes_icon.svg";
import islamic_awareness from "/public/images/islamic_awareness.svg";
import charity from "/public/images/charity_icon.svg";
const Tester3: React.FC = () => {
  return (
    <Center>
      <Flex
        direction={["column", "column", "row", "row", "row"]}
        justify="center"
        align="center"
        maxW="1200px"
        mx="auto"
      >
        <Box bg="green">
          <Card
            image={mosque.src}
            alt="Fajar"
            height="500"
            width="400"
            title="MOSQUE DEVELOPMENT"
            subtitle=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining"
          />
        </Box>
        <Spacer mx={60} />
        <Card
          height="500"
          width="400"
          image={quran.src}
          alt="Zohar"
          title="QURAN       TEACHINGS"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged."
        />
        <Spacer mx={60} />
        <Card
          height="500"
          width="400"
          image={islamic_classes.src}
          alt="Zohar"
          title="ISLAMIC CLASSES"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
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
        mt={18}
      >
        {title}
      </Heading>
      <Text
        fontWeight={500}
        textAlign="center"
        mt={20}
        mx={15}
        letterSpacing={1.5}
      >
        {subtitle}
      </Text>
    </Box>
  );
};
export default Tester3;
