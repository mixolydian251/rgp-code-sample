import React from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import theme from "../../style/theme";
import { formatDistanceToNow } from "date-fns";
import { PATH } from "../routes/path";

const layout = css`
  width: 100%;
  background: ${theme.primary050};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 12px;

  :focus {
    outline: none;
    background: ${theme.primary100};
  }

  .todo-title {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  h2 {
    margin: auto 0;
  }

  .todo-header {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

function TodoItem({ className, id, title, createdAt }) {
  const history = useHistory();

  return (
    <button
      className={className}
      onClick={() => history.push(`${PATH.TODO}/${id}`)}
    >
      <div className="todo-header">
        <span className="time-stamp">{formatDistanceToNow(createdAt)}</span>
      </div>
      <div className="todo-title">
        <h2>{title}</h2>
      </div>
    </button>
  );
}

export default styled(TodoItem)`
  ${layout}
`;
