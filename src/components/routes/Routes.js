import React from "react";
import { Route, Switch } from "react-router-dom";
import TodoList from "../todoList/TodoList";
import { PATH } from "./path";
import CreateTodo from "../create/CreateTodo";
import Todo from "../todo/Todo";
import PageNotFound from "../PageNotFound";

function Routes() {
  return (
    <Switch>
      <Route path={PATH.CREATE} component={CreateTodo} />
      <Route path={`${PATH.TODO}/:id`} component={Todo} />
      <Route path={PATH.LIST} exact component={TodoList} />
      <Route path={PATH.NOT_FOUND} component={PageNotFound} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
