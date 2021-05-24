import { Box, Button } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router"
import Link from 'next/link'


const CreatePost: React.FC<{}> = ({ }) => {
    const router = useRouter();

    return (

        <Wrapper variant="small">

            <Link href={"/createpost"}>
                <Button mt={4} mr={"5em"} colorScheme="messenger">
                    Go to create post
                        </Button>
            </Link>
            <Link href={"/updatepost"}>
                <Button mt={4} mr={"5em"} colorScheme="messenger">
                    Go to update post
                        </Button>
            </Link>

            <Link href={"/deletepost"}>
                <Button mt={4} mr={"5em"} colorScheme="messenger">
                    Go to Delete post
                        </Button>
            </Link>



            <Link href={"/createproject"}>
                <Button mt={4} mr={"5em"} colorScheme="messenger">
                    Go to Create project
            </Button>
            </Link>
            <Link href={"/updateproject"}>
                <Button mt={4} mr={"5em"} colorScheme="messenger">
                    Go to Update project
            </Button>
            </Link>
            <Link href={"/deleteproject"}>
                <Button mt={4} mr={"5em"} colorScheme="messenger">
                    Go to Delete project
                </Button>
            </Link>
        </Wrapper>

    )
}

export default CreatePost