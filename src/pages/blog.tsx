import React from 'react'
import { apolloCli } from "../utils/apolloConn"
import { gql } from "@apollo/client"
import {
    Box,
    Heading,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import BlogAuthor from "../components/BlogAuthor"
import NextLink from "next/link"
import SidePicBack from '../components/SidePicBack';
import { NextSeo } from 'next-seo';

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
            <NextSeo
                title="Halim's Blog"
                description="This is the place where I dumb all my ideas and thoughts with no filter"
                canonical="https://halim.tech/blog"
                openGraph={{
                    url: 'https://halim.tech/blog',
                    title: "Halim's blog",
                    description: 'This is the place where I dumb all my ideas and thoughts with no filter',
                    images: [
                        {
                            url: 'https://cdn.discordapp.com/attachments/715202493059039284/852137702560104458/unknown.png',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                        },
                    ],
                    site_name: 'Halimtech',
                }}
            />
            {
                posts.slice().reverse().map(post =>
                    <Box
                        key={post.id}
                        marginTop={{ base: '1', sm: '5' }}
                        pl={"2"}
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
                                {post.text.slice(0, 120)}<Link href={`/posts/${post.id}`}
                                    color={useColorModeValue('cyan.500', 'cyan.300')} _hover={{ textDecoration: 'none' }}> ...read more</Link>
                            </Text>

                            <BlogAuthor name={post.author} date={post.createdAt} />
                        </Box>
                    </Box>
                )}

        </ >
    )
}


export default blog

