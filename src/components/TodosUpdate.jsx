import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import StateContext from "../State";
import { Check, UpdateBox, UpdateContent } from "../style/style";

const TodosUpdate = React.memo(() => {
  const context = useContext(StateContext);

  const { dispatch } = context;

  const [check, setCheck] = useState(true);

  useEffect(() => {
    if (check) interval = setInterval(loopFunction, 10000);
    else clearInterval(interval);
    return () => {
      clearInterval(interval);
    };
  }, [check]);

  let interval;

  const loopFunction = () => {
    axios({
      method: "get",
      url: "https://skytodo-express.herokuapp.com/todos",
    }).then((res) => dispatch({ type: "updateTodos", todos: res.data }));
  };

  const onCheckInput = () => {
    setCheck((state) => !state);
  };

  return (
    <UpdateBox>
      <Check checked={check} onChange={onCheckInput} />
      <UpdateContent>10초마다 자동 업데이트</UpdateContent>
    </UpdateBox>
  );
});

export default TodosUpdate;
