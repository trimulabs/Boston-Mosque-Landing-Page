import { Box, Image, Text, Heading, useMediaQuery } from "@chakra-ui/react";
import HeroImg from "/public/images/hero_img.jpeg";

interface ImageWithTextProps {
  imageAlt: string;
  text: string;
  headingText: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({
  imageAlt,
  text,
  headingText,
}) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");

  const textSize = isSmallScreen ? "sm" : "md";
  const imageWidth = isSmallScreen ? "100%" : "100%";

  return (
    <Box position="relative" width="100%">
      {!isSmallScreen && (
        <Box>
          <Image src={HeroImg.src} alt={imageAlt} width={imageWidth} />
          <Heading
            position="absolute"
            top="35%"
            left="5%"
            padding="1rem"
            fontSize={30}
            color="white"
            fontWeight="bold"
          >
            {headingText}
          </Heading>
          <Text
            position="absolute"
            top="45%"
            left="5%"
            padding="1rem"
            fontSize={25}
            color="white"
            mr="45%"
          >
            {text}
          </Text>
        </Box>
      )}

      {isSmallScreen && (
        <Box>
          <Image
            src={HeroImg.src}
            alt={imageAlt}
            width={imageWidth}
            height={300}
          />
          <Heading
            position="absolute"
            top="30%"
            left="3%"
            padding="1rem"
            fontSize={textSize}
            color="white"
            fontWeight="bold"
            mr="30%"
          >
            {headingText}
          </Heading>
          <Text
            position="absolute"
            top="58%"
            left="3%"
            padding="1rem"
            fontSize={14}
            color="white"
            fontWeight="bold"
            mr="30%"
          >
            {text}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ImageWithText;
