import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// const schema = yup
//   .object({
//     firstName: yup.number().required(),
//     age: yup.number().positive().integer().required(),
//   })
//   .required();

let schema = yup.object().shape({
  firstName: yup.string().required("First Name is need!"),
  age: yup
    .number()
    .typeError("Age is required and age must be number only")
    .required()
    .min(18, "Age must be at least 18 years old"),
});

const ReactHookform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name:</label>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <label>Age:</label>
      <input {...register("age")} type="number" />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default ReactHookform;
