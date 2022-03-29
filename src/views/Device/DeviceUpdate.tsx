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
  Checkbox,
  Select,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";

interface Props {}

function DeviceUpdate(props: Props) {
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
        initialValues={{ serialNumber: "", vendor: "", uid: "", status: true }}
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
            <Field name="uid">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.uid && form.touched.uid}>
                  <VStack align={"start"} shouldWrapChildren>
                    <FormLabel htmlFor="uid" m="0">
                      Uid
                    </FormLabel>
                    <Input
                      {...field}
                      id="uid"
                      placeholder="uid"
                      w={["full", "sm"]}
                    />
                    <FormErrorMessage color={"red"} m="0">
                      {form.errors.uid}
                    </FormErrorMessage>
                  </VStack>
                </FormControl>
              )}
            </Field>
            <Field name="vendor">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.vendor && form.touched.vendor}
                >
                  <VStack align={"start"} shouldWrapChildren>
                    <FormLabel htmlFor="vendor" m="0">
                      Vendor
                    </FormLabel>
                    <Input
                      {...field}
                      id="vendor"
                      placeholder="vendor"
                      w={["full", "sm"]}
                    />
                    <FormErrorMessage color={"red"} m="0">
                      {form.errors.vendor}
                    </FormErrorMessage>
                  </VStack>
                </FormControl>
              )}
            </Field>
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
                    <Select
                      {...field}
                      id="serialNumber"
                      placeholder="Select Gateway"
                      w={["full", "sm"]}
                    >
                      <option value="option1">Gateway 1</option>
                      <option value="option2">Gateway 2</option>
                      <option value="option3">Gateway 3</option>
                    </Select>
                    <FormErrorMessage color={"red"} m="0">
                      {form.errors.serialNumber}
                    </FormErrorMessage>
                  </VStack>
                </FormControl>
              )}
            </Field>
            <Field name="status">
              {({ field, form }: any) => (
                <Checkbox {...field} id="status" w={["full", "sm"]}>
                  Is Device ON?
                </Checkbox>
              )}
            </Field>
            <HStack spacing={2} mt={12}>
              <Button isLoading={props.isSubmitting} type="submit">
                {id ? "Update" : "Create"}
              </Button>
              <ChakraLink as={Link} to="/gateways">
                List Devices
              </ChakraLink>
            </HStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
}

export default DeviceUpdate;
