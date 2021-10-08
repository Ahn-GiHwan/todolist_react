import React, { useReducer } from "react";
import Main from "./Main";
import StateContext, { initState, reducer } from "./State";

import { Container } from "./style/style";

const ContainerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Container t="0" l="0" b="0" r="0">
        <Main />
      </Container>
    </StateContext.Provider>
  );
};

export default ContainerComponent;
