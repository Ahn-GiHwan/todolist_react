import React from "react";

export const initState = {
  idx: 0,
  todos: [],
  isModal: false,
  selectId: 0,
};

export const reducer = (state, action) => {
  const { id, value } = action;
  const { idx, todos, isModal, selectId } = state;

  if (action.type === "addTodo") {
    const addTodos = todos.concat({
      id: idx,
      value,
      isCheck: false,
    });
    return {
      ...state,
      idx: idx + 1,
      todos: addTodos,
    };
  }

  if (action.type === "isCheck") {
    const checkTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCheck = todo.isCheck ? false : true;
      }
      return todo;
    });
    return {
      ...state,
      todos: checkTodos,
    };
  }

  if (action.type === "onDelete") {
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    return {
      ...state,
      todos: deleteTodos,
    };
  }

  if (action.type === "isModal") {
    return {
      ...state,
      isModal: isModal ? false : true,
    };
  }

  if (action.type === "onSelectId") {
    return {
      ...state,
      selectId: id,
    };
  }

  if (action.type === "modifyTodo") {
    const modifyTodos = todos.map((todo) => {
      if (todo.id === selectId) {
        todo.value = value;
      }
      return todo;
    });
    return {
      ...state,
      todos: modifyTodos,
    };
  }

  return state;
};

const StateContext = React.createContext();

export default StateContext;
