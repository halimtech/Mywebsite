import {
  Stack,
  useColorModeValue,
  Text,
  Box,
  Flex,
  Image,
  Heading,
  Grid,
  GridItem,
  Link
} from '@chakra-ui/react';
import { apolloCli } from "../utils/apolloConn"
import { gql } from "@apollo/client"
import HomeBanner from '../components/HomeBanner';
import { NextSeo } from 'next-seo';

export async function getStaticProps() {
  const { data } =
    await apolloCli.query({
      query: gql`
  query GetProjects {
  projects{
    id
    title
    text
    link
    picture
    createdAt
  }
}
  `
    })


  return {
    props: {
      projects: data.projects
    }
  }
}


const Index = ({ projects }) => {
  return (
    <>
      <NextSeo
        title="Halimtech | webdev"
        description="I'm Abdelhalim, aspiring web developer and a friend. Catch the blog for my updates"
        canonical="https://halim.tech"
        openGraph={{
          url: 'https://halim.tech',
          title: "Halimtech | webdev",
          description: "I'm Abdelhalim, aspiring web developer and a friend. Catch the blog for my updates",
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
      <HomeBanner title1={"I'm Abdelhalim"}
        title2={"Full-stack Developer"}
        content={"Information systems engineering student and an aspiring fullstack developer"}
        picture={"/home.jpg"}
      />
      <section id="projects">
        <Flex padding={"1em"} marginTop={"2em"}>
          <Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
            {
              projects.map(project =>

                <GridItem
                  key={project.id}
                  colSpan={{ base: 3, md: 1 }}>
                  <Box
                    maxW={{ base: "445px", md: "100vw" }}
                    w={'100%'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    mr={"2em"}
                    p={6}
                    overflow={'hidden'}>
                    <Link href={project.link} _hover={{ textDecoration: 'none' }} isExternal>
                      <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'unset'}>
                        <Image
                          src={
                            project.picture
                          }
                          layout={'fill'}
                        />
                      </Box>

                      <Stack mt={'6em'}>
                        <Heading
                          color={useColorModeValue('gray.700', 'white')}
                          fontSize={'2xl'}
                          fontFamily={'body'}>
                          {project.title}
                        </Heading>
                        <Text color={'gray.500'}>
                          {project.text}
                        </Text>
                      </Stack>

                    </Link>
                  </Box>

                </GridItem>
              )}
          </Grid>
        </Flex>




      </section>
    </>

  )

}

export default Index
