import * as Yup from "yup";

export const GatwayValidationSchema = Yup.object().shape({
  ip4: Yup.string()
    .matches(
      /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/
    )
    .required("Required"),
  serialnumber: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
});
