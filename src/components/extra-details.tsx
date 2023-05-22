"user client";
import {
  Button,
  Checkbox,
  Flex,
  VStack,
  StackDivider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  AspectRatio,
  Box,
  Text,
  SimpleGrid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { PhoneIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import { Lato } from "next/font/google";

export default function ExtraDetails() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  return (
    <Box id="contact-us">
      {isLargerThan1000 ? (
        <Flex
          align="center"
          justify="space-between"
          padding={1}
          fontFamily="Cinzel"
        >
          <Box height="320px" marginTop={30} marginLeft={100}>
            {" "}
            <Heading
              fontSize={"23"}
              letterSpacing={1}
              fontWeight={"4"}
              color={"#38A169"}
            >
              SOUTH BOSTON VA MASJID <br />
              AND ISLAMIC CENTER
            </Heading>
            <Text
              fontSize={22}
              mt={30}
              color={"#4A5568"}
              fontFamily={"Lato"}
              fontStyle={"normal"}
              letterSpacing={1}
            >
              Subscribe to our Newsletter
            </Text>
            <Stack direction={"row"} spacing={-8} mt={12}>
              <FormControl id="email" fontSize={20} mt={10}>
                <Input
                  type="email"
                  fontSize={16}
                  border={"#38A169"}
                  textDecor={"mintcream"}
                  textColor={"white"}
                  placeholder={"Enter your Email"}
                  bgColor={"#38A169"}
                  height={45}
                  borderRadius={5}
                  width={200}
                />
              </FormControl>
              <Button
                marginTop={90}
                border={"none"}
                variant={"solid"}
                color="#4A5568"
                bgColor={"#EDF2F7"}
                fontSize={18}
                borderRadius={6}
                width={120}
                height={50}
              >
                Subscribe
              </Button>
            </Stack>
            <Stack direction={"row"} spacing={25} mt={40}>
              <FaFacebook color={"#38A169"} size={"28"} />
              <FaTwitter color={"#38A169"} size={"28"} />
              <FaInstagram color={"#38A169"} size={"28"} />
            </Stack>
          </Box>

          <Box height="320" width="700" marginTop={30} marginLeft={20}>
            <Stack align={"flex-start"} spacing={18}>
              <Heading
                fontSize={"23"}
                letterSpacing={1}
                fontWeight={"4"}
                color={"#38A169"}
              >
                PAGES
              </Heading>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                textUnderlineOffset={5}
                fontSize={20}
                color="#4A5568"
              >
                Home
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={20}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                About Us
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={20}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Prayer Time
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={20}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Services
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={20}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Contact Us
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={20}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Location
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={20}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Donate Us
              </Link>
            </Stack>
          </Box>

          <Box
            height="320"
            width="300"
            marginTop={30}
            marginLeft={100}
            letterSpacing={0.5}
          >
            <Heading
              fontSize={"23"}
              letterSpacing={1}
              fontWeight={"4"}
              color={"#38A169"}
            >
              CONTACT
            </Heading>
            <Stack direction={"row"} spacing={6} mt={15}>
              <FaPhone color="#38A169" />
              <Text
                fontSize={20}
                color={"#4A5568"}
                fontFamily={"Lato"}
                fontStyle={"normal"}
                letterSpacing={1}
              >
                (111)111-1111
              </Text>
            </Stack>
            <Stack direction={"row"} spacing={1} mt={25} mr={50}>
              <IoLocationSharp color={"#38A169"} size={"30"} />
              <Text
                fontSize={20}
                color={"#4A5568"}
                fontFamily={"Lato"}
                fontStyle={"normal"}
                letterSpacing={1}
              >
                451 Short St, South Boston, VA <br /> 24592, USA
              </Text>
            </Stack>
          </Box>
        </Flex>
      ) : (
        <Stack direction={"column"} spacing={6}>
          <Box height="200px" marginTop={50} marginLeft={40}>
            {" "}
            <Heading
              letterSpacing={1}
              color={"#38A169"}
              fontSize={"23"}
              fontWeight={"bold"}
            >
              SOUTH BOSTON VA MASJID AND ISLAMIC CENTER
            </Heading>
            <Text
              fontSize={20}
              mt={20}
              color={"#4A5568"}
              fontFamily={"Lato"}
              fontStyle={"normal"}
              letterSpacing={1}
            >
              Subscribe to our Newsletter
            </Text>
            <Stack direction={"row"} spacing={-8}>
              <FormControl id="email" fontSize={20} mt={10}>
                <Input
                  type="email"
                  placeholder={"eneter your email"}
                  color={"white"}
                  textColor={"white"}
                  bgColor={"#38A169"}
                  height={45}
                  borderRadius={5}
                  fontSize={16}
                  border={"#38A169"}
                  textDecor={"mintcream"}
                  width={200}
                />
              </FormControl>
              <Button
                border={"none"}
                variant={"solid"}
                fontSize={18}
                marginTop={90}
                color="#4A5568"
                bgColor={"#EDF2F7"}
                borderRadius={6}
                width={120}
                height={50}
              >
                Subscribe
              </Button>
            </Stack>
            <Stack direction={"row"} spacing={25} mt={20}>
              <FaFacebook color={"#38A169"} size={"28"} />
              <FaTwitter color={"#38A169"} size={"28"} />
              <FaInstagram color={"#38A169"} size={"28"} />
            </Stack>
          </Box>

          <Box width="700" marginTop={100} marginLeft={50}>
            <Stack align={"flex-start"} ml={30}>
              <Heading
                fontSize={"2xl"}
                mt={60}
                textUnderlineOffset={5}
                color="#38A169"
              >
                PAGES
              </Heading>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={18}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Home
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={18}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                About Us
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={18}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Prayer Time
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={18}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Services
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={18}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Contact Us
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={18}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Location
              </Link>
              <Link
                href={"#"}
                textDecorationLine={"underline"}
                fontSize={18}
                textUnderlineOffset={5}
                color="#4A5568"
              >
                Donate Us
              </Link>
            </Stack>
          </Box>

          <Box
            height="200"
            width="300"
            marginTop={80}
            mt={80}
            marginLeft={50}
            letterSpacing={0.5}
          >
            <Heading
              fontSize={"2xl"}
              mt={60}
              textUnderlineOffset={5}
              color="#38A169"
              ml={30}
            >
              Contact
            </Heading>
            <Stack direction={"row"} spacing={6} mt={15} ml={30}>
              <FaPhone color="#38A169" size={20} />
              <Text
                fontSize={20}
                color={"#4A5568"}
                fontFamily={"Lato"}
                fontStyle={"normal"}
                letterSpacing={1}
              >
                {" "}
                (111)111-1111
              </Text>
            </Stack>
            <Stack direction={"row"} spacing={6} mt={10} ml={30}>
              <IoLocationSharp color={"#38A169"} size={"30"} />
              <Text
                fontSize={20}
                color={"#4A5568"}
                fontFamily={"Lato"}
                fontStyle={"normal"}
                letterSpacing={1}
              >
                451 Short St, South Boston, VA <br />
                24592, USA
              </Text>
            </Stack>
          </Box>
        </Stack>
      )}
    </Box>

    /* <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"} width={900}>
        <Stack spacing={7} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={"blue"} variant={"solid"}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
    
    
    
    
    <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
    
    
    
    */
  );
}
