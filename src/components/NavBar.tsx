"use client";
import { useState } from "react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { Box, Flex, Text, Spacer, IconButton, Collapse, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Sansita } from "next/font/google";

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box minHeight={144}>
            <Flex
                as="header"
                align="center"
                justify="space-between"
                padding={4}
                bg="gray.800"
                color="green"
                fontSize={20}
                fontFamily="Cinzel">
                <Text fontSize="xl" fontWeight="bold" color="green.200" mt={50}>
                    South Boston Va Masjid and Islamic Center
                </Text>

                <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Menu"
                    display={{ base: "block", md: "none" }}
                    onClick={onToggle}
                />
                <Collapse in={isOpen} animateOpacity>
                    <Flex
                        as="nav"
                        direction={{ base: "column", md: "row" }}
                        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
                        mt={{ base: 4, md: 0 }}>
                        <Stack spacing={4} direction="row" align="center" fontSize={20}>
                            <Text px={2} py={1}>
                                Home
                            </Text>
                            <Text px={2} py={1}>
                                Prayer Times
                            </Text>
                            <Text px={2} py={1}>
                                Services
                            </Text>
                            <Text px={2} py={1}>
                                Contact Us
                            </Text>
                            <Text px={2} py={1}>
                                Location
                            </Text>
                            <Button as={"a"} href="tel:+1 (434) 222-2081" colorScheme="teal" variant="solid" size="xs">
                                Call Us
                            </Button>
                        </Stack>
                    </Flex>
                </Collapse>
            </Flex>
        </Box>
    );
}
