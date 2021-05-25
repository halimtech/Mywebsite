import React from 'react'
import { apolloCli } from "../utils/apolloConn"
import { gql, useQuery } from "@apollo/client"
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
import ClientOnly from '../components/ClientOnly';

interface blogProps {

}

// export async function getServerSideProps() {
//     const { data } =
//         await apolloCli.query({
//             query: gql`
//     query GetPosts {
//     posts{
//       id
//       title
//       text
//       picture
//       createdAt
//       author
//     }
//   }
//     `
//         })


//     return {
//         props: {
//             posts: data.posts
//         }
//     }
// }
const QUERY = gql`
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

const blog = () => {
    const { data, loading, error } = useQuery(QUERY)
    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        console.error(error)
        return null
    }
    const posts = data.posts

    return (
        <ClientOnly>
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

        </ClientOnly >
    )
}


export default blog

