import React, { useContext, useEffect, useRef, useState } from "react";
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
import axios from "axios";

const ModalComponent = React.memo(() => {
  useEffect(() => {
    ref.current.focus();
  }, []);

  const context = useContext(StateContext);

  const { state, dispatch } = context;

  const modifyTodoValue = state.todos.filter(
    (todo) => todo._id === state.selectId
  )[0].value;

  const ref = useRef();

  const [value, setValue] = useState(modifyTodoValue);

  const onModifyBtn = async () => {
    const value = ref.current.value;
    if (!validation(value)) {
      swal("빈 문자, 공백(space)는 안됩니다!");
      return;
    }

    await axios({
      method: "patch",
      url: "https://skytodo-express.herokuapp.com/modifyTodo",
      data: { id: state.selectId, value },
    }).then((res) => {
      dispatch({ type: "updateTodos", todos: res.data });
    });

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
          placeholder={modifyTodoValue}
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
});

export default ModalComponent;
