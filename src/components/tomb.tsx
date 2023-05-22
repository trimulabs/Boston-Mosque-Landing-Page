"use client";

import { Box, Image, useMediaQuery } from "@chakra-ui/react";
interface TombProps {
  imageUrl: string;
  imageAlt: string;
}
const Tomb: React.FC<TombProps> = ({ imageUrl, imageAlt }) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");
  const imageWidth = isSmallScreen ? "100%" : "100vw";
  return (
    <Box width={imageWidth} mt={10}>
      <Image src={imageUrl} alt={imageAlt} width="100%" height="700" />
    </Box>
  );
};
export default Tomb;
