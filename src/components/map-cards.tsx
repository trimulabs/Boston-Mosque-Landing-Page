import {
  Flex,
  Spacer,
  VStack,
  Text,
  Heading,
  Image,
  Box,
} from "@chakra-ui/react";
import mosque from "public/images/mosque-develop_icon.svg";
import quran from "/public/images/quran_teaching_icon.svg";
import islamic_classes from "/public/images/islamic_classes_icon.svg";
import islamic_awareness from "/public/images/islamic_awareness.svg";
import charity from "/public/images/charity_icon.svg";
import path from "path";
import { useMediaQuery } from "@chakra-ui/react";
// Define a type for the card data
type CardData = {
  title: string;
  description: string;
  image: string;
};
// Sample card data
const cardData: CardData[] = [
  {
    title: "MOSQUE DEVELOPMENT",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${mosque.src}`,
  },
  {
    title: "QURAN TEACHINGS",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${quran.src}`,
  },
  {
    title: "ISLAMIC CLASSES",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${islamic_classes.src}`,
  },
  {
    title: "ISLAMIC AWARENESS",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${islamic_awareness.src}`,
  },
  {
    title: " CHARITY & DONATION",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    image: `${charity.src}`,
  },
];
const MapCards = () => {
  const [isLargerThanMedium] = useMediaQuery("(min-width: 768px)");
  const [isLarger] = useMediaQuery("(min-width: 1200px)");
  return (
    <Box>
      {!isLarger && (
        <Flex align="center" justify="center" minHeight="100vh">
          <VStack spacing={25}>
            {cardData.map((card, index) => (
              <Flex
                key={index}
                bg="#38A169"
                width="350px"
                height="400px"
                backgroundColor="gray.200"
                borderRadius="md"
                textAlign={"center"}
                color={"white"}
              >
                <div>
                  <Image
                    src={card.image}
                    height={80}
                    width={80}
                    mt={30}
                  ></Image>
                  <Heading mt={20}>{card.title}</Heading>
                  <Text mt={20} mx={10} letterSpacing={1}>
                    {card.description}
                  </Text>
                </div>
              </Flex>
            ))}
            <Spacer />
          </VStack>
        </Flex>
      )}
      {isLarger && (
        <Flex align="center" justify="center" minHeight="100vh">
          <VStack spacing={25}>
            <Flex wrap="wrap" justifyContent="center">
              {cardData.map((card, index) => (
                <Flex
                  key={index}
                  width={isLargerThanMedium ? "25%" : "100%"}
                  bg="#38A169"
                  borderRadius="md"
                  alignItems="center"
                  justifyContent="center"
                  flexBasis={isLargerThanMedium ? "25%" : "100%"}
                  mx={30}
                  my={30}
                  height={450}
                  color={"white"}
                  textAlign={"center"}
                >
                  <div>
                    <Image
                      src={card.image}
                      alt={card.title}
                      boxSize="100px"
                      height={80}
                      width={80}
                      mt={30}
                    />
                    <Heading mt={20}>{card.title}</Heading>
                    <Text mt={20} mx={10} letterSpacing={1}>
                      {card.description}
                    </Text>
                  </div>
                </Flex>
              ))}
            </Flex>
            <Spacer />
          </VStack>
        </Flex>
      )}
    </Box>
  );
};
export default MapCards;
