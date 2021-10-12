import React from "react";

export const initState = {
  todos: [],
  isModal: false,
  selectId: 0,
  isLoading: true,
};

export const reducer = (state, action) => {
  const { id } = action;
  const { isModal } = state;

  if (action.type == "updateTodos") {
    return {
      ...state,
      todos: action.todos,
    };
  }

  if (action.type === "isModal") {
    return {
      ...state,
      isModal: isModal ? false : true,
      selectId: id,
    };
  }

  if (action.type === "isLoading") {
    return {
      ...state,
      isLoading: false,
    };
  }

  return state;
};

const StateContext = React.createContext();

export default StateContext;
