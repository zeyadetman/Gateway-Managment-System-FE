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
      error = "Serial Number is required";
    }
    return error;
  }

  return (
    <Center h="100vh">
      <VStack w={"full"}>
        <Formik
          initialValues={{ serialNumber: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
              }}
            >
              <Field name="serialNumber" validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={
                      form.errors.serialNumber && form.touched.serialNumber
                    }
                  >
                    <VStack align={"start"} shouldWrapChildren>
                      <FormLabel htmlFor="serialNumber" m="0">
                        Gateway Serial number
                      </FormLabel>
                      <Input
                        {...field}
                        id="serialNumber"
                        placeholder="serialNumber"
                        w={["full", "sm"]}
                      />
                      <FormErrorMessage color={"red"} m="0">
                        {form.errors.serialNumber}
                      </FormErrorMessage>
                    </VStack>
                  </FormControl>
                )}
              </Field>
              <HStack spacing={2}>
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
