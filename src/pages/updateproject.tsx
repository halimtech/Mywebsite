import { Box, Button, Link } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router"
import NextLink from "next/link"

const updateproject = gql`mutation updateproject($picture:String!,
$title:String!,
$text:String!,
 $pass:String!,
 $link:String,
 $id:Float!){
    updateProject(title:$title,picture:$picture,text:$text,id:$id,link:$link pass:$pass){
      id
      title
      text
      picture
      link
      createdAt
    }
  }`

const UpdateProject: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const [updateProject, { data }] = useMutation(updateproject);

    return (<>
        <Wrapper variant="small">
            <Formik initialValues={{ title: "", text: "", link: "", picture: "", pass: "", id: "" }}
                onSubmit={async (values, { setErrors }) => {
                    //console.log(values);
                    try {
                        await updateProject({
                            variables: {
                                id: values.id,
                                title: values.title,
                                text: values.text,
                                picture: values.picture,
                                pass: values.pass
                            }
                        })
                    } catch (e) {
                        console.log(e);

                    }
                    router.push("/")
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
                                name="link"
                                label="Link"
                                placeholder="link..."
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

                        <Button mr={215} mt={4} type="submit" isLoading={isSubmitting} colorScheme="messenger">
                            Update project
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

export default UpdateProject