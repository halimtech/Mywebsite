import React from 'react'
import {
    Box,
    Link,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import NextLink from "next/link"

interface SidePicBackProps {
    id: string
    picture: string
    title: string
}

const SidePicBack: React.FC<SidePicBackProps> = (props) => {
    return (<Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center">
        <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <NextLink href={`/posts/${props.id}`}>
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                        borderRadius="lg"
                        src={
                            props.picture
                        }
                        alt={props.title}
                        objectFit="contain"
                    />
                </Link>
            </NextLink>
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
                bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
            />
        </Box>
    </Box>
    )
}
export default SidePicBack