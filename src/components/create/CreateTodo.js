import React from "react";
import styled, { css } from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../ui/Button";
import TextField from "../ui/TextField";

const layout = css`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const initialValues = {
  title: "",
  description: "",
};

const CreateTodo = ({ className }) => (
  <div className={className}>
    <h1>Create a new Todo</h1>
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextField
            name="title"
            type="textarea"
            label="Title"
            placeholder="Enter a title.."
          />
          <Field name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Button disabled={isSubmitting}>Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default styled(CreateTodo)`
  ${layout}
`;
