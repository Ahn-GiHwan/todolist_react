import React, { useRef, useEffect, useContext } from "react";

import { Input, InputDiv, SubmitBtn } from "./style/style";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import StateContext from "./State";
import validation from "./validation";

const InputBox = React.memo(() => {
  useEffect(() => {
    ref.current.focus();
  }, []);

  const context = useContext(StateContext);

  const { dispatch } = context;

  const ref = useRef();

  const onSubmitBtn = () => {
    if (!validation(ref.current.value)) {
      swal("빈 문자, 공백(space)는 안됩니다!");
      return;
    }

    const value = ref.current.value;

    dispatch({ type: "addTodo", value });

    ref.current.focus();
    ref.current.value = "";
  };

  return (
    <InputDiv>
      <Input
        placeholder="리액트 공부하기"
        ref={ref}
        onKeyPress={(e) => e.key === "Enter" && onSubmitBtn()}
      />
      <SubmitBtn onClick={onSubmitBtn}>
        <FontAwesomeIcon icon={faPlus} />
      </SubmitBtn>
    </InputDiv>
  );
});

export default InputBox;
