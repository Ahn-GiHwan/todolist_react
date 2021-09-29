import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  ExitBtn,
  Modal,
  ModalMain,
  ModalTitle,
  ModifyInput,
  ModifySubmitBtn,
} from "./style/style";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StateContext from "./State";
import validation from "./validation";

const ModalCompnent = () => {
  useEffect(() => {
    ref.current.focus();
  }, []);

  const ref = useRef();

  const context = useContext(StateContext);

  const { state, dispatch } = context;

  const clickTodoValue = state.todos.filter(
    (todo) => todo.id === state.selectId
  )[0].value;

  const [value, setValue] = useState(clickTodoValue);

  const onModifyBtn = () => {
    if (!validation(value)) {
      swal("빈 문자, 공백(space)는 안됩니다!");
      return;
    }
    dispatch({ type: "modifyTodo", value });
    dispatch({ type: "isModal" });
  };

  const onExitBtn = () => {
    dispatch({ type: "isModal" });
  };

  return (
    <Modal t="0" l="0" b="0" r="0">
      <ModalMain fd="column" jc="space-around">
        <ModalTitle>수정</ModalTitle>
        <ModifyInput
          fc="20px"
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && onModifyBtn()}
        />
        <ModifySubmitBtn br="3px" onClick={onModifyBtn}>
          수정하기
        </ModifySubmitBtn>
        <ExitBtn br="0 10px 0 0" onClick={onExitBtn}>
          <FontAwesomeIcon icon={faTimes} />
        </ExitBtn>
      </ModalMain>
    </Modal>
  );
};

export default ModalCompnent;
