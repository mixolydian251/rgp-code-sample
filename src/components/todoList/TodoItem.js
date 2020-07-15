import React from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import theme from "../../style/theme";
import { formatDistanceToNowStrict } from "date-fns";
import { PATH } from "../routes/path";
import Button from "../ui/Button";
import { useAppState } from "../../stores/AppState";
import { pxToRem } from "../../style/styleUtils";

const layout = css`
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;

  .title-button {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.white};
    color: ${theme.primary700};
    font-size: ${pxToRem(24)};

    border: none;
    cursor: pointer;

    padding: 12px;

    :hover,
    :focus {
      outline: none;
      background: ${theme.neutral050};
    }
  }

  ${Button} {
    background: ${theme.primary050};
    color: ${theme.primary500};
    font-weight: bold;
  }

  .todo-header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${theme.primary500};
    padding: 0 12px;

    span {
      color: ${theme.white};
      margin-left: auto;
    }
  }
`;

function TodoItem({ className, id, title, createdAt, completed }) {
  const history = useHistory();
  const { markAsDoneById } = useAppState();

  return (
    <div className={className}>
      <div className="todo-header">
        {!completed && (
          <Button onClick={() => markAsDoneById(id)}>Mark as done</Button>
        )}
        <span className="time-stamp">
          {formatDistanceToNowStrict(createdAt, { addSuffix: true })}
        </span>
      </div>
      <button
        className="title-button"
        onClick={() => history.push(`${PATH.TODO}/${id}`)}
      >
        {title}
      </button>
    </div>
  );
}

export default styled(TodoItem)`
  ${layout}
`;
