import axios from "axios";
import React, { useContext, useEffect } from "react";
import EmptyDoList from "./EmptyDoList";
import StateContext from "./State";
import { DoList, Input } from "./style/style";
import Todo from "./Todo";
import Portal from "./Portal";
import ModalComponent from "./Modal";
import Skeleton from "./Skeleton";

const DoListComponent = () => {
  useEffect(() => {
    init();
  }, [todos]);

  const init = async () => {
    await axios
      .get("https://skytodo-express.herokuapp.com/todos")
      .then((res) => {
        dispatch({ type: "updateTodos", todos: res.data });
        dispatch({ type: "isLoading" });
      });
  };

  const context = useContext(StateContext);

  const { dispatch } = context;
  const { todos, isModal, isLoading } = context.state;

  if (isLoading) {
    return <Skeleton />;
  } else {
    return (
      <DoList>
        {todos.length === 0 ? (
          <EmptyDoList />
        ) : (
          <ul>
            {todos.map((todo) => (
              <Todo
                key={todo._id}
                id={todo._id}
                isCheck={todo.isCheck}
                value={todo.value}
                dispatch={dispatch}
              />
            ))}
          </ul>
        )}
        {isModal && (
          <Portal>
            <ModalComponent />
          </Portal>
        )}
      </DoList>
    );
  }
};

export default DoListComponent;
