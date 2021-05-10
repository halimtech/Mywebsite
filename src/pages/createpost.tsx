import { Box, Button, Link } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router"
import NavBar from '../components/NavBar'
import NextLink from "next/link"

const createpost = gql`mutation createpost($input:PostInput!, $pass:String!){
    createPost(input:$input, pass:$pass){
      id
      title
      text
      picture
      createdAt
    }
  }`

const CreatePost: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const [createPost, { data }] = useMutation(createpost);

    return (
        <>
            <header><NavBar /></header>
            <Wrapper variant="small">
                <Formik initialValues={{ title: "", text: "", author: "Abdelhalim", picture: "", pass: "" }}
                    onSubmit={async (values, { setErrors }) => {
                        //console.log(values);
                        createPost({
                            variables: {
                                input: {
                                    title: values.title,
                                    text: values.text,
                                    author: values.author,
                                    picture: values.picture
                                }, pass: values.pass
                            }
                        })
                        router.push("/blog")
                    }}>
                    {({ isSubmitting }) => (
                        <Form>
                            <InputField
                                name="title"
                                label="Title"
                                required={true}
                                placeholder="title"
                            />
                            <Box mt={4}>
                                <InputField
                                    textarea
                                    name="text"
                                    label="Text"
                                    required={true}
                                    placeholder="text..."
                                />
                            </Box>

                            <Box mt={4}>
                                <InputField
                                    name="picture"
                                    label="Picture"
                                    required={true}
                                    placeholder="picture..."
                                />
                            </Box>
                            <Box mt={4}>
                                <InputField
                                    name="author"
                                    label="Author"

                                    required={true}
                                    placeholder="author..."
                                />
                            </Box>
                            <Box mt={4}>
                                <InputField
                                    name="pass"
                                    label="Password"
                                    type="password"
                                    required={true}
                                    placeholder="password..."
                                />
                            </Box>

                            <Button mr={225} mt={4} type="submit" isLoading={isSubmitting} colorScheme="messenger">
                                create post
                        </Button>
                            <NextLink href="/admin">
                                <Link color="messenger.900">admin</Link>
                            </NextLink>


                        </Form>
                    )}
                </Formik>
            </Wrapper>
        </>
    )
}

export default CreatePost