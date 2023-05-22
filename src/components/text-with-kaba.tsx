import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";

interface ImageWithParagraphProps {
  imagePath: string;
  imageAlt: string;
  paragraphText: string;
  headingText: string;
}

const ImageWithParagraph: React.FC<ImageWithParagraphProps> = ({
  imagePath,
  imageAlt,
  paragraphText,
  headingText,
}) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");

  const imageBoxSize = isSmallScreen ? "200px" : "300px";
  const paragraphFontSize = isSmallScreen ? "sm" : "md";
  const headingTextSize = isSmallScreen ? "md" : "lg";

  return (
    <Flex direction={isSmallScreen ? "column" : "row"} alignItems="center">
      {!isSmallScreen && (
        <Box
          flex="1"
          mx={30}
          backgroundColor="rgba(0.0)"
          color="#525252"
          textAlign="left"
        >
          <Heading>{headingText}</Heading>
          <Text fontSize={20}>{paragraphText}</Text>
        </Box>
      )}
      <Image
        src={imagePath}
        alt={imageAlt}
        boxSize={imageBoxSize}
        borderRadius="md"
        mx={30}
        mt={30}
        mb={30}
      />
      {isSmallScreen && (
        <Box
          mb={30}
          mt={30}
          mx={30}
          backgroundColor="rgba(0.0)"
          color="#525252"
          textAlign="left"
        >
          <Heading>{headingText}</Heading>
          <Text fontSize={18}>{paragraphText}</Text>
        </Box>
      )}
    </Flex>
  );
};

export default ImageWithParagraph;
