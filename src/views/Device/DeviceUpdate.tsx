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
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { gatewayAPIInstance } from "../../api/gateway";
import { DeviceValidationSchema } from "../../validations/device";
import { deviceAPIInstance } from "../../api/device";
import ErrorMsg from "../../components/ErrorMsg";

function DeviceUpdate() {
  const { id } = useParams();
  const { state } = useLocation() as any;
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [gateways, setGateways] = React.useState<any>(null);
  const [device, setDevice] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  const fetchGateways = async () => {
    try {
      const { data } = await gatewayAPIInstance.getGateways(1, 10000);
      console.log(data);
      setGateways(data.data);
    } catch (error) {
      setGateways([]);
    }
  };

  const fetchDeviceData = async (id: number) => {
    try {
      setLoading(true);
      await fetchGateways();
      const { data } = await deviceAPIInstance.getDeviceByUid(id);
      console.log(data);
      setDevice(data);
    } catch (error: any) {
      setError(error?.response?.data?.errors?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchDeviceData(Number(id));
    } else {
      fetchGateways();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const renderGatewaysList = (gateways: any[]) => {
    return gateways?.map((gateway: any) => (
      <option key={gateway.serialnumber} value={gateway.serialnumber}>
        {gateway.serialnumber}
      </option>
    ));
  };

  return (
    <VStack spacing={12}>
      <Heading>{id ? `Update Device ${id}` : "Create Device"}</Heading>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Formik
          initialValues={{
            gatewaySerialNumber:
              state?.gateway || device?.gatewaySerialNumber || "",
            vendor: device?.vendor || "",
            uid: Number(device?.uid) || undefined,
            status: device?.status === "online" ? true : false,
          }}
          validationSchema={DeviceValidationSchema}
          onSubmit={async (values, actions) => {
            console.log({ values });
            try {
              setError(null);
              const updatedValues = {
                ...values,
                uid: Number(values.uid),
                status: values.status ? "online" : "offline",
              };
              if (!id) {
                // @ts-ignore
                const { data } = await deviceAPIInstance.createNewDevice({
                  ...updatedValues,
                });
                navigate(`/device/${data.uid}`);
                return data;
              } else {
                const { data } = await deviceAPIInstance.updateDeviceByUid(
                  Number(id),
                  // @ts-ignore
                  {
                    ...updatedValues,
                  }
                );
                // navigate(`/device/${data.uid}`);
                return data;
              }
            } catch (e: any) {
              setError(e?.response?.data?.errors?.message);
              return e;
            }
          }}
        >
          {(props) =>
            // @ts-ignore
            console.log(props) || (
              <Form
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: "column",
                }}
              >
                <Field name="uid">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.uid && form.touched.uid}
                      w={["full", "sm"]}
                    >
                      <VStack align={"start"}>
                        <FormLabel htmlFor="uid" m="0">
                          Uid
                        </FormLabel>
                        <Input
                          {...field}
                          isDisabled={!!id}
                          id="uid"
                          type="number"
                          placeholder="uid"
                        />
                        <FormHelperText>Must be a number.</FormHelperText>
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
                      w={["full", "sm"]}
                    >
                      <VStack align={"start"}>
                        <FormLabel htmlFor="vendor" m="0">
                          Vendor
                        </FormLabel>
                        <Input {...field} id="vendor" placeholder="vendor" />
                        <FormErrorMessage color={"red"} m="0">
                          {form.errors.vendor}
                        </FormErrorMessage>
                      </VStack>
                    </FormControl>
                  )}
                </Field>
                <Field name="gatewaySerialNumber">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={
                        form.errors.gatewaySerialNumber &&
                        form.touched.gatewaySerialNumber
                      }
                      w={["full", "sm"]}
                    >
                      <VStack align={"start"}>
                        <FormLabel htmlFor="gatewaySerialNumber" m="0">
                          Gateway Serial number
                        </FormLabel>
                        <Select
                          {...field}
                          id="gatewaySerialNumber"
                          placeholder="Select Gateway"
                          w={["full", "sm"]}
                        >
                          {renderGatewaysList(gateways || [])}
                        </Select>
                        <FormErrorMessage color={"red"} m="0">
                          {form.errors.gatewaySerialNumber}
                        </FormErrorMessage>
                      </VStack>
                    </FormControl>
                  )}
                </Field>
                <Field name="status">
                  {({ field, form }: any) => (
                    <Checkbox
                      {...field}
                      isChecked={field.value}
                      id="status"
                      w={["full", "sm"]}
                    >
                      Is Device ON?
                    </Checkbox>
                  )}
                </Field>
                <VStack align={"flex-start"}>
                  <ErrorMsg error={error} onClose={() => setError(null)} />
                  <HStack spacing={2}>
                    <Button isLoading={props.isSubmitting} type="submit">
                      {id ? "Update" : "Create"}
                    </Button>
                    <ChakraLink as={Link} to="/gateways">
                      List Gateways
                    </ChakraLink>
                  </HStack>
                </VStack>
              </Form>
            )
          }
        </Formik>
      )}
    </VStack>
  );
}

export default DeviceUpdate;
