import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { gatewayAPIInstance } from "../api/gateway";
import ErrorMsg from "../components/ErrorMsg";

interface Props {}

function App(props: Props) {
  const navigate = useNavigate();
  const [error, setError] = React.useState<string | null>(null);

  function validateName(value: any) {
    let error;
    if (!value) {
      error = "Serial Number is required";
    }
    return error;
  }

  return (
    <VStack w={"full"}>
      <Formik
        initialValues={{ serialNumber: "" }}
        onSubmit={async (values, actions) => {
          try {
            const { data } = await gatewayAPIInstance.getGatewayBySerialNumber(
              values.serialNumber
            );
            navigate(`/gateway/${data.serialnumber}`);
          } catch (error: any) {
            console.log(error?.response);
            setError(error?.response?.data?.errors?.message);
          }
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
            <VStack align={"flex-start"}>
              <ErrorMsg error={error} onClose={() => setError(null)} />
              <HStack spacing={2}>
                <Button isLoading={props.isSubmitting} type="submit">
                  View
                </Button>
                <ChakraLink as={Link} to="/gateway/new">
                  Create new Gateway
                </ChakraLink>
              </HStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
}

export default App;
