import {
  Flex,
  Image,
} from "@chakra-ui/react"
import { apolloCli } from "../utils/apolloConn"
import { gql } from "@apollo/client"

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

export default function Index({ posts }) {


  return (
    <Flex as="footer" py="8rem">
      {posts.map(x => <Image src={x.picture}></Image>)}

    </Flex>)

}


