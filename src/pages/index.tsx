import {
  Stack,
  useColorModeValue,
  Text,
  Box,
  Center,
  Flex,
  Image,
  Heading,
  Avatar,
  Grid,
  GridItem,
  Link
} from '@chakra-ui/react';
import { apolloCli } from "../utils/apolloConn"
import { gql } from "@apollo/client"
import HomeBanner from '../components/HomeBanner';

export async function getServerSideProps() {
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
      <HomeBanner title1={"I'm Abdelhalim"}
        title2={"Full-stack Developer"}
        content={"Information systems engineering student and an aspiring fullstack developer"}
        picture={"/home.jpg"}
      />
      <section id="projects">
        <Flex padding={"1em"} marginTop={"2em"}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {
              projects.map(project =>


                <Box
                  key={project.id}
                  maxW={'445px'}
                  w={'100%'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  mr={"2em"}
                  p={6}
                  overflow={'hidden'}>
                  <Link href={project.link} isExternal>
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


              )}
          </Grid>
        </Flex>




      </section>
    </>

  )

}

export default Index
