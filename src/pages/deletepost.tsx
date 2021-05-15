
import { Box, Button, Link } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router"
import NavBar from '../components/NavBar'
import NextLink from "next/link"

const deletePost = gql`mutation deletepost($id:Float!,$pass:String!){
    deletePost(id:$id, pass:$pass)
  }`

const CreatePost: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const [deletepost, { data }] = useMutation(deletePost);

    return (
        <>
            <header><NavBar /></header>
            <Wrapper variant="small">
                <Formik initialValues={{ id: 0, pass: "" }}
                    onSubmit={async (values, { setErrors }) => {
                        try {
                            deletepost({
                                variables: {

                                    id: values.id,
                                    pass: values.pass
                                }
                            })
                        } catch (e) {
                            console.log(e);
                            router.push("/blog")
                        }
                        router.push("/blog")
                    }}>
                    {({ isSubmitting }) => (
                        <Form>
                            <InputField
                                name="id"
                                label="ID"
                                required={true}
                                placeholder="Post ID"
                                type="number"
                            />
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
                                delete post
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

try {

} catch (error) {

}

export default CreatePost