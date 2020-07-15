import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import theme from "../../style/theme";
import { useAppState } from "../../stores/AppState";
import TodoItem from "./TodoItem";
import { pxToRem } from "../../style/styleUtils";

const layout = css`
  padding: 0 20px;

  h2 {
    color: ${theme.primary500};
    font-weight: normal;
    margin-right: 12px;
    font-size: 28px;
  }

  .completed {
    margin-top: 60px;
  }

  .list-header {
    display: flex;
    align-items: center;
  }

  .todo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 32px;
  }

  .count {
    height: 30px;
    width: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bolder;
    font-size: ${pxToRem(16)};
    background: ${theme.secondary100};
    color: ${theme.secondary700};
    border-radius: 50%;

    margin: 0;
  }

  .loading {
    color: ${theme.primary300};
    margin-left: 16px;
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

  const activeTodos = todos.filter(({ completed }) => !completed);
  const completedTodos = todos.filter(({ completed }) => completed);

  return (
    <div className={className}>
      <div className="list-header">
        <h2>Active Todos</h2>
        <p className="count">{activeTodos.length}</p>
        {loading && <span className="loading">loading..</span>}
      </div>
      <div className="todo-grid">
        {activeTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>

      <div className="list-header completed">
        <h2>Completed</h2>
        <p className="count">{completedTodos.length}</p>
      </div>
      <div className="todo-grid">
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default styled(TodoList)`
  ${layout}
`;
