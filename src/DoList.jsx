import React, { useContext } from "react";
import EmptyDoList from "./EmptyDoList";
import StateContext from "./State";
import { DoList } from "./style/style";
import Todo from "./Todo";

const DoListComponent = () => {
  const context = useContext(StateContext);

  const { todos } = context.state;

  return (
    <DoList>
      {todos.length === 0 ? (
        <EmptyDoList />
      ) : (
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              isCheck={todo.isCheck}
              value={todo.value}
            />
          ))}
        </ul>
      )}
    </DoList>
  );
};

export default DoListComponent;
