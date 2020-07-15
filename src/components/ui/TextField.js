import React from "react";
import styled, { css } from "styled-components";
import { useField } from "formik";
import theme from "../../style/theme";
import { pxToRem } from "../../style/styleUtils";

const layout = css`
  position: relative;

  textarea {
    background: ${({ focus }) => (focus ? theme.neutral050 : "white")};
    color: ${theme.neutral700};
    width: 100vw;
    height: 28px;
    max-width: 500px;
    min-width: 300px;
    max-height: 80px;
    min-height: 28px;

    padding: 18px 12px 8px;
    font-size: ${pxToRem(16)};

    border: 2px solid ${theme.primary300};
    border-radius: 5px;
  }

  label {
    position: absolute;
    font-size: ${pxToRem(14)};
    top: -8px;
    left: 8px;
    background: white;
    z-index: 2;
    color: ${theme.primary500};
    padding: 0 4px;
  }

  .error {
    margin: 4px 0 0;
    font-size: ${pxToRem(15)};
    color: ${theme.danger500};
  }
`;

const TextField = ({ className, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={className}>
      <label htmlFor={props.name}>{label}</label>
      <textarea {...field} {...props} id={props.name} />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </div>
  );
};

export default styled(TextField)`
  ${layout}
`;
