import { Box, Button, Link } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router"
import NavBar from '../components/NavBar'
import NextLink from "next/link"

const createproject = gql`mutation createproject($input:ProjectInput!, $pass:String!){
    createProject(input:$input, pass:$pass){
      id
      title
      text
      picture
      createdAt
    }
  }`

const CreateProject: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const [createProject, { data }] = useMutation(createproject);

    return (
        <>
            <Wrapper variant="small">
                <Formik initialValues={{ title: "", text: "", picture: "", pass: "" }}
                    onSubmit={async (values, { setErrors }) => {
                        await createProject({
                            variables: {
                                input: {
                                    title: values.title,
                                    text: values.text,
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
                                    name="pass"
                                    label="Password"
                                    type="password"
                                    required={true}
                                    placeholder="password..."
                                />
                            </Box>

                            <Button mr={223} mt={4} type="submit" isLoading={isSubmitting} colorScheme="messenger">
                                create project
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

export default CreateProject  //console.log(values);
