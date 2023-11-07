import * as yup from "yup";

// fisrt step wizard form validation
export const userSchemaPartOne = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be more than 2 chars")
    .max(10, "Name must be less than 10 chars"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Age must be positive"),
});

// second step wizard form validation
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

// combine two schemas for final validation and creating user
export const userSchame = userSchemaPartOne.concat(userSchemaPartTwo);
