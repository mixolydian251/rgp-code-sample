import React from "react";
import styled, { css } from "styled-components";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import Button from "../ui/Button";
import TextField from "../ui/TextField";
import { descriptionValidation, titleValidation } from "./todoValidators";
import { useAppState } from "../../stores/AppState";
import { PATH } from "../routes/path";
import theme from "../../style/theme";

const layout = css`
  margin: 0 20px;

  h1 {
    color: ${theme.primary500};
    font-weight: normal;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  ${TextField} {
    margin-bottom: 20px;
  }
`;

const initialValues = {
  title: "",
  description: "",
};

const CreateTodo = ({ className }) => {
  const { createTodo } = useAppState();
  const history = useHistory();

  return (
    <div className={className}>
      <h1>Create a new Todo</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          createTodo(values).then(() => history.push(PATH.LIST));
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form>
            <TextField
              name="title"
              label="Title"
              placeholder="Enter a title.."
              validate={titleValidation}
            />
            <TextField
              name="description"
              label="Description"
              placeholder="Enter a description.."
              validate={descriptionValidation}
            />
            <Button disabled={isSubmitting} onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default styled(CreateTodo)`
  ${layout}
`;
