import React, { useRef, useEffect, useContext, useState } from "react";
import { Input, InputDiv, SubmitBtn } from "./style/style";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import StateContext from "./State";
import validation from "./validation";
import axios from "axios";
import TodosUpdate from "./TodosUpdate";

const InputBox = () => {
  useEffect(() => {
    ref.current.focus();
  }, []);

  const context = useContext(StateContext);

  const { dispatch } = context;

  const [click, setClick] = useState(false);

  const ref = useRef();

  const onSubmitBtn = async () => {
    setClick(true);
    ref.current.blur();
    if (!validation(ref.current.value)) {
      swal("빈 문자, 공백(space)는 안됩니다!");
      return;
    }

    await axios({
      method: "post",
      url: "https://skytodo-express.herokuapp.com/addTodos",
      data: {
        value: ref.current.value,
      },
    }).then((res) => {
      dispatch({ type: "updateTodos", todos: res.data });
    });

    ref.current.value = "";
    ref.current.focus();
    setClick(false);
  };

  return (
    <>
      <InputDiv>
        <Input
          placeholder="리액트 공부하기"
          ref={ref}
          onKeyPress={(e) => e.key === "Enter" && onSubmitBtn()}
        />
        <SubmitBtn onClick={onSubmitBtn} disabled={click}>
          <FontAwesomeIcon icon={faPlus} />
        </SubmitBtn>
      </InputDiv>
      <TodosUpdate />
    </>
  );
};

export default InputBox;
