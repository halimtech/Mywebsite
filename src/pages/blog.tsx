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
import SidePicBack from '../components/SidePicBack';

interface blogProps {

}

export async function getServerSideProps() {
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
            {
                posts.slice().reverse().map(post =>
                    <Box
                        key={post.id}
                        marginTop={{ base: '1', sm: '5' }}
                        display="flex"
                        flexDirection={{ base: 'column', sm: 'row' }}
                        justifyContent="space-between">
                        <SidePicBack id={post.id} picture={post.picture} title={post.title}></SidePicBack>
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
                )}

        </ >
    )
}


export default blog

