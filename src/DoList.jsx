import React, { useCallback, useContext, useEffect } from "react";
import StateContext from "./State";
import { DoList } from "./style/style";
import Todo from "./Todo";

const DoListComponent = () => {
  const context = useContext(StateContext);

  const { state } = context;

  return (
    <DoList>
      <ul>
        {state.todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isCheck={todo.isCheck}
            value={todo.value}
          />
        ))}
      </ul>
    </DoList>
  );
};

export default DoListComponent;
