import React from "react";

import { Main } from "./style/style.js";
import Header from "./Header";
import InputBox from "./InputBox.jsx";

import DoList from "./DoList.jsx";

const MainComponent = React.memo(() => {
  return (
    <Main fd="column" js="space-around">
      <Header />
      <InputBox />
      <DoList />
    </Main>
  );
});

export default MainComponent;
