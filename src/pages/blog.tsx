import React from 'react'
import { apolloCli } from "../utils/apolloConn"
import { gql } from "@apollo/client"
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogAuthor from "../components/BlogAuthor"
import NextLink from "next/link"

interface blogProps {

}

export async function getStaticProps() {
    const { data } =
        await apolloCli.query({
            query: gql`
    query GetPosts {
    posts{
      id
      title
      text
      picture
      createdAt
      author
    }
  }
    `
        })


    return {
        props: {
            posts: data.posts
        }
    }
}

const blog = ({ posts }) => {
    return (
        <>
            <header><NavBar /></header>
            <div >
                {
                    posts.map(post => <>

                        <Box
                            marginTop={{ base: '1', sm: '5' }}
                            display="flex"
                            flexDirection={{ base: 'column', sm: 'row' }}
                            justifyContent="space-between">
                            <Box
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
                                    <NextLink href={`/posts/${post.id}`}>
                                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                            <Image
                                                borderRadius="lg"
                                                src={
                                                    post.picture
                                                }
                                                alt={post.title}
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
                            <Box
                                display="flex"
                                flex="1"
                                flexDirection="column"
                                justifyContent="center"
                                marginTop={{ base: '3', sm: '0' }}>
                                <Heading marginTop="1">
                                    <NextLink href={`/posts/${post.id}`}>
                                        <Link textDecoration="none" color="cyan.500" _hover={{ textDecoration: 'none' }}>
                                            {post.title}
                                        </Link>
                                    </NextLink>
                                </Heading>
                                <Text
                                    as="p"
                                    marginTop="2"
                                    color={useColorModeValue('black.700', 'black.200')}
                                    fontSize="xl">
                                    {post.text}
                                </Text>
                                <BlogAuthor name={post.author} date={post.createdAt} />
                            </Box>
                        </Box>
                    </>
                    )}
            </div>

            <footer><Footer /></footer>
        </ >
    )
}


export default blog

