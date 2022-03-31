import * as Yup from "yup";

export const DeviceValidationSchema = Yup.object().shape({
  uid: Yup.number().required("Required"),
  vendor: Yup.string().required("Required"),
  status: Yup.boolean(),
  gatewaySerialNumber: Yup.string().required("Required"),
});
