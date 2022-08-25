import * as Yup from "yup";

const validationSchema = Yup.object({
  pizzeria_name: Yup.string()
    .max(200, "Must be less than 200 characters")
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  street: Yup.string()
    .max(400, "Must be less than 400 characters")
    .min(3, "Must be at least 3 characters")
    .required("Required"),
});
export default validationSchema;
