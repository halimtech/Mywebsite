import React, { ReactNode } from 'react'
import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import Image from "next/image"

interface FooterProps {

}
const Logo = (props: any) => {
    return (
        <Image src="/avataaars.svg" height="58" width="58"></Image>
    )
};
const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Footer: React.FC<FooterProps> = ({ }) => {
    return (
        <Box
            mt="20vh"
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Logo />
                <Text>© 2021 Halimtech</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/halimtech1'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'Github'} href={'https://github.com/halimtech/'}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/halimtech/'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer




