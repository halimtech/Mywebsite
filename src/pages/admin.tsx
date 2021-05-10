import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router"


const CreatePost: React.FC<{}> = ({ }) => {
    const router = useRouter();

    return (

        <Wrapper variant="small">
            <Formik
                initialValues={{}}
                onSubmit={async () => {

                    router.push("/createpost")
                }}>

                {({ isSubmitting }) => (
                    <Form>

                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="messenger">
                            Go to create post
                        </Button>


                    </Form>
                )}
            </Formik>
            <Formik
                initialValues={{}}
                onSubmit={async () => {

                    router.push("/updatepost")
                }}>

                {({ isSubmitting }) => (
                    <Form>

                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="messenger">
                            Go to update post
                        </Button>


                    </Form>
                )}
            </Formik>
        </Wrapper>

    )
}

export default CreatePost