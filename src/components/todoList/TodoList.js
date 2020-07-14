import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import theme from "../../style/theme";
import { useAppState } from "../../stores/AppState";
import TodoItem from "./TodoItem";

const layout = css`
  padding: 0 20px;

  h1 {
    color: ${theme.primary500};
    font-weight: normal;
    margin-right: 12px;
  }

  .list-header {
    display: flex;
    align-items: baseline;
  }

  .todo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 12px;
  }
`;

function TodoList({ className }) {
  const { todos, loading, getTodos } = useAppState();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  if (!todos) {
    return <span>Loading...</span>;
  }

  return (
    <div className={className}>
      <div className="list-header">
        <h1>All Todos</h1>
        {loading && <span>loading..</span>}
      </div>
      <div className="todo-grid">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default styled(TodoList)`
  ${layout}
`;
