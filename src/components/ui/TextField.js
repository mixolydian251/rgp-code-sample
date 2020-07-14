import React from "react";
import styled, { css } from "styled-components";
import { useField } from "formik";
import theme from "../../style/theme";
import { pxToRem } from "../../style/styleUtils";

const layout = css`
  flex-direction: row;
  align-items: center;
  min-height: 60px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ focus }) =>
    focus ? theme.indigo300 : theme.grey100};
  border-radius: 4px;
  position: relative;

  input {
    color: ${theme.grey700};
    font-size: 16px;
    background: ${({ focus }) => (focus ? theme.grey050 : "white")};
    width: 100%;
    padding: 32px 8px 4px;
    overflow: hidden;
  }

  label {
    position: absolute;
    font-size: 14px;
    top: 4px;
    left: 8px;
    z-index: 2;
    color: ${({ focus }) => (focus ? theme.primary300 : theme.neutral300)};
  }

  .error {
    padding: 0;
    margin: 4px 0 0;
    font-size: ${pxToRem(15)};
    color: ${theme.danger500};
  }
`;

const TextField = ({ className, label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div className={className}>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} id={props.name} />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </div>
  );
};

export default styled(TextField)`
  ${layout}
`;
