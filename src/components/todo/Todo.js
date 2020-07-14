import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import API from "../../api/api";
import { PATH } from "../routes/path";
import Button from "../ui/Button";
import theme from "../../style/theme";
import { useAppState } from "../../stores/AppState";

const layout = css`
  margin: 0 20px;

  ${Button} {
    margin-right: 16px;
  }
`;

function Todo({ className }) {
  const history = useHistory();
  const { id } = useParams();
  const { deleteTodoById } = useAppState();
  const [result, setResult] = useState(null);

  useEffect(() => {
    API.getById(id).then(({ success, data }) => {
      if (!success) return history.push(PATH.NOT_FOUND);
      setResult(data);
    });
  }, [id, history]);

  if (!result) {
    return <span>Loading....</span>;
  }

  return (
    <div className={className}>
      <p>{formatDistanceToNow(result.createdAt, { addSuffix: true })}</p>
      <h2>{result.title}</h2>
      <p>{result.description}</p>
      <Button color={theme.secondary700} outline>
        Edit
      </Button>
      <Button
        color={theme.danger500}
        onClick={() => {
          deleteTodoById(id).then(() => {
            history.push(PATH.LIST);
          });
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default styled(Todo)`
  ${layout}
`;
