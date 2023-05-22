"user client";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  AspectRatio,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { Lato } from "next/font/google";
import { Cinzel } from "next/font/google";

export default function FormWithMap() {
  return (
    <Box bgColor={"#38A169"} color={"white"} fontFamily={"Lato"}>
      <Stack direction={"row"}>
        <Box
          height="500px"
          marginTop={70}
          marginLeft={300}
          letterSpacing={"0.5"}
          w={"100%"}
        >
          {" "}
          <Heading
            fontSize={35}
            fontFamily={"Cinzel"}
            letterSpacing={1}
            fontWeight={6}
          >
            GET IN TOUCH
          </Heading>
          <FormControl id="email" paddingTop={35}>
            <FormLabel fontFamily={"Lato"}>Full Name</FormLabel>
            <Input
              type="name"
              bg={"transparent"}
              borderBottom={"white"}
              outline={"none"}
              flexGrow={"none"}
              border={"none"}
              borderBottomStyle={"solid"}
              borderBottomColor={"white"}
              width={320}
            />
          </FormControl>
          <FormControl id="email" paddingTop={35}>
            <FormLabel fontFamily={"Lato"}>E-mail</FormLabel>
            <Input
              type="email"
              bg={"transparent"}
              borderBottom={"white"}
              outline={"none"}
              flexGrow={"none"}
              border={"none"}
              borderBottomStyle={"solid"}
              borderBottomColor={"white"}
              width={320}
            />
          </FormControl>
          <FormControl id="number" paddingTop={35}>
            <FormLabel fontFamily={"Lato"}>Phone Number</FormLabel>
            <Input
              type="email"
              bg={"transparent"}
              borderBottom={"white"}
              outline={"none"}
              flexGrow={"none"}
              border={"none"}
              borderBottomStyle={"solid"}
              borderBottomColor={"white"}
              width={320}
            />
          </FormControl>
          <FormControl id="text" paddingTop={35}>
            <FormLabel fontFamily={"Lato"}>Message</FormLabel>
            <Input
              width={320}
              type="password"
              bg={"transparent"}
              borderBottom={"white"}
              outline={"none"}
              flexGrow={"none"}
              border={"none"}
              borderBottomStyle={"solid"}
              borderBottomColor={"white"}
            />
          </FormControl>
          <Button
            colorScheme={"blue"}
            variant={"solid"}
            marginTop={35}
            width={320}
            height={50}
            border={"white"}
            color={"#38A169"}
          >
            Send Message
          </Button>
        </Box>

        <Box float={"right"} paddingRight={300} width={600}>
          <AspectRatio ratio={16 / 9} height={450} width={350} marginTop={70}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
              height="600"
              width="700"
            />
          </AspectRatio>
        </Box>
      </Stack>
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
    </Stack>*/
  );
}
