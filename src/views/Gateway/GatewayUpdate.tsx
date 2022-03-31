import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  VStack,
  Link as ChakraLink,
  Heading,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { gatewayAPIInstance } from "../../api/gateway";
import { GatwayValidationSchema } from "../../validations/gateway";
import ErrorMsg from "../../components/ErrorMsg";

function GatewayUpdate() {
  const navigate = useNavigate();
  const [error, setError] = React.useState<string | null>(null);

  return (
    <VStack spacing={12}>
      <Heading>Create New Gateway</Heading>
      <Formik
        initialValues={{ serialnumber: "", name: "", ip4: "" }}
        validationSchema={GatwayValidationSchema}
        onSubmit={async (values, actions) => {
          try {
            setError(null);
            const { data } = await gatewayAPIInstance.createNewGateway(values);
            navigate(`/gateway/${data.serialnumber}`);
            return data;
          } catch (e: any) {
            setError(e?.response?.data?.errors?.message);
            return e;
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
            <Field name="serialnumber">
              {({ field, form }: any) => (
                <FormControl
                  w={["full", "sm"]}
                  isInvalid={
                    form.errors.serialnumber && form.touched.serialnumber
                  }
                >
                  <VStack align={"start"}>
                    <FormLabel htmlFor="serialnumber" m="0">
                      Gateway Serial number
                    </FormLabel>
                    <Input
                      {...field}
                      id="serialnumber"
                      placeholder="serialnumber"
                    />
                    <FormErrorMessage color={"red"} m="0">
                      {form.errors.serialnumber}
                    </FormErrorMessage>
                  </VStack>
                </FormControl>
              )}
            </Field>
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  w={["full", "sm"]}
                >
                  <VStack align={"start"}>
                    <FormLabel htmlFor="name" m="0">
                      Name
                    </FormLabel>
                    <Input {...field} id="name" placeholder="name" />
                    <FormErrorMessage color={"red"} m="0">
                      {form.errors.name}
                    </FormErrorMessage>
                  </VStack>
                </FormControl>
              )}
            </Field>
            <Field name="ip4">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.ip4 && form.touched.ip4}
                  w={["full", "sm"]}
                >
                  <VStack align={"start"}>
                    <FormLabel htmlFor="ip4" m="0">
                      IPV4
                    </FormLabel>
                    <Input {...field} id="ip4" placeholder="ip4" />
                    <FormErrorMessage color={"red"} m="0">
                      {form.errors.ip4}
                    </FormErrorMessage>
                  </VStack>
                </FormControl>
              )}
            </Field>
            <VStack align={"flex-start"}>
              <ErrorMsg error={error} onClose={() => setError(null)} />
              <HStack spacing={2}>
                <Button isLoading={props.isSubmitting} type="submit">
                  Create
                </Button>
                <ChakraLink as={Link} to="/gateways">
                  List Gateways
                </ChakraLink>
              </HStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
}

export default GatewayUpdate;
