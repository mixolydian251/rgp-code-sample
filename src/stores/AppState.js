import React, { Component, createContext, useContext } from "react";
import API from "../api/api";
import { alertError } from "../components/ui/alerts";

const AppContext = createContext(null);

class AppState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: null,
      loading: false,
      getTodos: this.getTodos,
      deleteTodoById: this.deleteTodoById,
      createTodo: this.createTodo,
      markAsDoneById: this.markAsDoneById,
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    this.setState({ loading: true });

    return API.getAll()
      .then(({ data }) => this.setState({ todos: data, loading: false }))
      .catch(alertError);
  };

  deleteTodoById = (id) => {
    return API.delete(id)
      .then(({ data }) =>
        this.setState((prevState) => ({
          todos: prevState.todos.filter((todo) => todo.id !== data.id),
        }))
      )
      .catch(alertError);
  };

  createTodo = (values) => {
    return API.create(values).catch(alertError);
  };

  markAsDoneById = (id) => {
    API.edit(id)({ completed: true }).then(this.getTodos).catch(alertError);
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const useAppState = () => useContext(AppContext);

export default AppState;
