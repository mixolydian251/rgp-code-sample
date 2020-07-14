import { v4 as uuid } from "uuid";
import { fakeAPICall } from "./apiUtils";

let database = [
  {
    id: "h41l23k49hfp8",
    title: "Create a code snippet for RGP interview",
    description: "I guess i'll make a todo todoList really quick.",
    createdAt: new Date(2020, 6, 14, 12),
    completed: false,
  },
  {
    id: "asdf3k4sdf8",
    title: "Create",
    description: "I guess i'll make a todo todoList really quick.",
    createdAt: new Date(2020, 6, 14, 12),
    completed: false,
  },
];

const getAllTodos = () => {
  return fakeAPICall({ data: database, success: true });
};

const getTodoById = (id) => {
  const todo = database.find((todo) => todo.id === id);

  if (!todo) {
    return fakeAPICall({ success: false });
  }

  return fakeAPICall({ data: todo, success: true });
};

const deleteTodo = (id) => {
  database = database.filter((todo) => todo.id !== id);
  return fakeAPICall({ data: { id }, success: true });
};

const createTodo = ({ title, description }) => {
  database = [
    ...database,
    {
      id: uuid(),
      title,
      description,
      createdAt: Date.now(),
      completed: false,
    },
  ];

  return fakeAPICall({ data: database, success: true });
};

const editTodo = (id) => (edits) => {
  database = database.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        edits,
      };
    }

    return todo;
  });

  return fakeAPICall({ data: database, success: true });
};

export default {
  create: createTodo,
  getAll: getAllTodos,
  getById: getTodoById,
  delete: deleteTodo,
  edit: editTodo,
};
