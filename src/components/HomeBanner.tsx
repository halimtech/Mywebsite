import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Image,
    Heading,
} from '@chakra-ui/react';
import Link from 'next/link';

interface HomeBannerProps {
    title1: string,
    title2: string,
    content: string,
    picture: string
}

const HomeBanner = (props: any) => {
    return (
        <Stack minH={'90vh'}

            direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'} >
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            {props.title1}
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            {props.title2}
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        {props.content}
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>

                        <Link href="mailto:haleem_ah1998@yahoo.com">
                            <Button
                                rounded={'full'}
                                bg={'blue.400'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Email me
                        </Button>
                        </Link>
                        <Link href={"#projects"}>
                            <Button bg={'blue.800'}
                                _hover={{
                                    bg: 'gray.700',
                                }} rounded={'full'}
                                color={'white'}>

                                Projects
                        </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1} display={{ base: "none", sm: "flex" }}>
                <Image

                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        `${props.picture}`
                    }
                />
            </Flex>
        </Stack>
    )
}

export default HomeBanner