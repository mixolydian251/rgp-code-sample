import { css } from "styled-components";

export const whenProvided = (propName) => (...args) => (props) =>
  !!props[propName] ? css(...args) : "";

export const whenNotProvided = (propName) => (...args) => (props) =>
  !props[propName] ? css(...args) : "";

export const pxToRem = (px) => (px / 16).toFixed(4) + "rem";
