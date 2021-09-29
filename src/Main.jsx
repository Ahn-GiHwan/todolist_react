import React, { useContext } from "react";

import { Main } from "./style/style.js";
import Header from "./Header";
import InputBox from "./InputBox.jsx";

import DoList from "./DoList.jsx";
import EmptyDoList from "./EmptyDoList.jsx";
import StateContext from "./State.jsx";

function MainComponent() {
  const context = useContext(StateContext);

  const { todos } = context.state;

  return (
    <Main fd="column" js="space-around">
      <Header />
      <InputBox />
      {todos.length === 0 ? <EmptyDoList /> : <DoList />}
    </Main>
  );
}

export default MainComponent;
