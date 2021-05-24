import { Box, Button, Link } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router"
import NextLink from "next/link"

const deleteProject = gql`mutation deleteProject($id:Float!,$pass:String!){
    deleteproject(id:$id, pass:$pass)
  }`

const DeleteProject: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const [deleteproject, { data }] = useMutation(deleteProject);

    return (
        <>

            <Wrapper variant="small">
                <Formik initialValues={{ id: 0, pass: "" }}
                    onSubmit={async (values, { setErrors }) => {
                        try {
                            deleteproject({
                                variables: {

                                    id: values.id,
                                    pass: values.pass
                                }
                            })
                        } catch (e) {
                            console.log(e);
                            router.push("/")
                        }
                        router.push("/")
                    }}>
                    {({ isSubmitting }) => (
                        <Form>
                            <InputField
                                name="id"
                                label="ID"
                                required={true}
                                placeholder="Project ID"
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

                            <Button mr={223} mt={4} type="submit" isLoading={isSubmitting} colorScheme="messenger">
                                delete project
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

export default DeleteProject