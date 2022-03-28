import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  VStack,
  Link as ChakraLink,
  Center,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

interface Props {}

function App(props: Props) {
  const {} = props;

  function validateName(value: any) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Center h="100vh">
      <VStack>
        <Formik
          initialValues={{ name: "Sasuke" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">First name</FormLabel>
                    <Input {...field} id="name" placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <HStack>
                <Button isLoading={props.isSubmitting} type="submit">
                  View
                </Button>
                <ChakraLink as={Link} to="/gateway/new">
                  Create new Gateway
                </ChakraLink>
              </HStack>
            </Form>
          )}
        </Formik>
      </VStack>
    </Center>
  );
}

export default App;
