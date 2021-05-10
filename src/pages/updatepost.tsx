import { Box, Button, Link } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router"
import NavBar from '../components/NavBar'
import NextLink from "next/link"

const updatepost = gql`mutation updatepost($picture:String!,
$title:String!,
$text:String!,
 $pass:String!,
 $id:Float!){
    updatePost(title:$title,picture:$picture,text:$text,id:$id, pass:$pass){
      id
      title
      text
      picture
      createdAt
    }
  }`

const CreatePost: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const [updatePost, { data }] = useMutation(updatepost);

    return (<>
        <header><NavBar /></header>
        <Wrapper variant="small">
            <Formik initialValues={{ title: "", text: "", picture: "", pass: "", id: "" }}
                onSubmit={async (values, { setErrors }) => {
                    //console.log(values);
                    updatePost({
                        variables: {
                            id: values.id,
                            title: values.title,
                            text: values.text,
                            picture: values.picture,
                            pass: values.pass
                        }
                    })
                    router.push("/blog")
                }}>

                {({ isSubmitting }) => (
                    <Form>
                        <InputField
                            name="title"
                            label="Title"
                            placeholder="title"
                        />
                        <Box mt={4}>
                            <InputField
                                textarea
                                name="text"
                                label="Text"
                                placeholder="text..."
                            />
                        </Box>

                        <Box mt={4}>
                            <InputField
                                name="picture"
                                label="Picture"
                                placeholder="picture..."
                            />
                        </Box>
                        <Box mt={4}>
                            <InputField
                                name="id"
                                label="Post ID"
                                placeholder="Post ID..."
                                required={true}
                                type="number"
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
                            Update post
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