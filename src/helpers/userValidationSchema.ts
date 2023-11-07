import * as yup from "yup";

export const userSchemaPartOne = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be more than 2 chars")
    .max(10, "Name must be less than 10 chars"),
  age: yup
    .number()
    .min(1, "You must be above 1 to use this wizard :)")
    .required("Age is required")
    .positive("Age must be positive"),
});

export const userSchemaPartTwo = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  newsletter: yup
    .string()
    .required("Newsletter is required")
    .oneOf(["daily", "weekly", "monthly"], "Invalid newsletter value"),
});

export const userSchame = userSchemaPartOne.concat(userSchemaPartTwo);