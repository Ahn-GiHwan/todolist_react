import React, { useReducer } from "react";
import { Main } from "./style/style.js";
import Header from "./Header";
import InputBox from "./InputBox.jsx";
import DoList from "./DoList.jsx";
import StateContext, { initState, reducer } from "./State";

const MainComponent = React.memo(() => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Main fd="column" js="space-around">
      <Header />
      <StateContext.Provider value={{ state, dispatch }}>
        <InputBox />
        <DoList />
      </StateContext.Provider>
    </Main>
  );
});

export default MainComponent;
