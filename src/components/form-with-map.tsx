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
                <Box height="500px" marginTop={70} marginLeft={300} letterSpacing={"0.5"} w={"100%"} mr={30}>
                    {" "}
                    <Heading fontSize={35} fontFamily={"Cinzel"} letterSpacing={1} fontWeight={6}>
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
                        color={"#38A169"}>
                        Send Message
                    </Button>
                </Box>

                <Box float={"right"} paddingRight={300} width={600} ml={30}>
                    <AspectRatio ratio={1 / 1} width={450} marginTop={70}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30203238.527822554!2d-84.69695568554705!3d22.46968678158716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ad638c21480723%3A0x61b386f6f31ba217!2sSouth%20Boston%20Masjid%20And%20Islamic%20Center!5e0!3m2!1sen!2s!4v1684841204687!5m2!1sen!2s"></iframe>
                    </AspectRatio>
                </Box>
            </Stack>
        </Box>
    );
}
