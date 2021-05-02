import React from 'react'
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import Image from "next/image"

interface NavBarProps {

}

const NavBar = (props: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let body = (
        <>
            <NextLink href="/">
                <Link color="white">Home</Link>
            </NextLink>
            <NextLink href="/blog">
                <Link color="white">Blog</Link>
            </NextLink>
            <NextLink href="/lebenslauf.pdf">
                <Link color="white">Resume</Link>
            </NextLink>
        </>
    )

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: !isOpen ? 'none' : 'inherit' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <NextLink href="/">
                            <Link>
                                <Box>
                                    <Image src="/avataaars.svg" height="58" width="58"></Image>
                                </Box>
                            </Link>
                        </NextLink>

                        <HStack
                            as={'nav'}
                            spacing={5}
                            display={{ base: 'none', md: 'flex' }}>
                            {body}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={5}>
                        <Stack as={'nav'} spacing={4}>
                            {body}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

export default NavBar