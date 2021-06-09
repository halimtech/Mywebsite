import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import {
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';




const getPost = gql`query getPost($id: String!){
    post(id:$id){
      id
      title
      text
      picture
      createdAt
      author
    }
  }`





const showPost: any = ({ id }) => { //NextPage<{ id: string }> 


    const { loading, error, data } = useQuery(getPost, {
        variables: { id },

    });
    const orangeColor = useColorModeValue(
        'radial(orange.600 1px, transparent 1px)',
        'radial(orange.300 1px, transparent 1px)'
    )
    const blackColor = useColorModeValue('black.700', 'black.200')

    //console.log(data);

    if (loading) return <p>Loading........</p>;
    if (error) return `Error! ${error}`;
    if (!data.post) { return 404 }


    return (
        <>
            <NextSeo
                title={data.post.title}
                description={data.post.text.slice(0, 100)}
                canonical={`https://halim.tech/posts/${id}`}
                openGraph={{
                    url: 'https://halim.tech/blog',
                    title: "Halimtech post",
                    description: "",
                    images: [
                        {
                            url: 'https://cdn.discordapp.com/attachments/715202493059039284/851463778910076968/unknown.png',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                        },
                    ],
                    site_name: 'Halimtech',
                }}
            />
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
                    marginTop="2.5%">
                    <Heading marginBottom="2">
                        <Text align="center" fontSize="6xl" color="cyan.500" _hover={{ textDecoration: 'none' }}>
                            {data.post.title}

                        </Text>

                    </Heading>
                    <Image
                        borderRadius="lg"
                        src={
                            data.post.picture
                        }
                        alt={data.post.title}
                        objectFit="contain"
                        display="block"
                        ml="auto"
                        mr="auto"
                    />
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                    <Box
                        bgGradient={orangeColor}
                        backgroundSize="20px 20px"
                        opacity="0.4"
                        height="100%"
                    />
                </Box>
            </Box>

            <Box mt="5%" mb="45vh">
                <Text
                    as="p"
                    color={blackColor}
                    fontSize="2xl"
                    align="center"
                >
                    {data.post.text}
                </Text>
            </Box>


        </>
    )
}

showPost.getInitialProps = ({ query }) => {
    return {
        id: query.id as string
    }
}

/*export const getStaticPaths: GetStaticPaths<{ slug: {

    return {
            paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}*/

export default showPost