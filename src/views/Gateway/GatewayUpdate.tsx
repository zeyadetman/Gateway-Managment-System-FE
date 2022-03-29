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
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";

interface Props {}

function GatewayUpdate(props: Props) {
  const {} = props;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);

  return (
    <VStack spacing={12}>
      <Heading>{id ? `Update ${id}` : "Create"}</Heading>
      <Formik
        initialValues={{ serialNumber: "", name: "", ipv4: "" }}
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
            <Field name="serialNumber">
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
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <VStack align={"start"} shouldWrapChildren>
                    <FormLabel htmlFor="name" m="0">
                      Name
                    </FormLabel>
                    <Input
                      {...field}
                      id="name"
                      placeholder="name"
                      w={["full", "sm"]}
                    />
                    <FormErrorMessage color={"red"} m="0">
                      {form.errors.name}
                    </FormErrorMessage>
                  </VStack>
                </FormControl>
              )}
            </Field>
            <Field name="ipv4">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.ipv4 && form.touched.ipv4}>
                  <VStack align={"start"} shouldWrapChildren>
                    <FormLabel htmlFor="ipv4" m="0">
                      IPV4
                    </FormLabel>
                    <Input
                      {...field}
                      id="ipv4"
                      placeholder="ipv4"
                      w={["full", "sm"]}
                    />
                    <FormErrorMessage color={"red"} m="0">
                      {form.errors.ipv4}
                    </FormErrorMessage>
                  </VStack>
                </FormControl>
              )}
            </Field>
            <HStack spacing={2} mt={12}>
              <Button isLoading={props.isSubmitting} type="submit">
                {id ? "Update" : "Create"}
              </Button>
              <ChakraLink as={Link} to="/gateways">
                List Gateways
              </ChakraLink>
            </HStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
}

export default GatewayUpdate;
