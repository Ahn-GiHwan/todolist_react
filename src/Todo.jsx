import React, { useContext } from "react";
import swal from "sweetalert";
import {
  Do,
  Left,
  LeftDone,
  Right,
  CheckIcon,
  EditIcon,
  DeleteIcon,
} from "./style/style";
import {
  faCheckSquare,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StateContext from "./State";
import Portal from "./Portal";
import ModalComponent from "./Modal";

const Todo = ({ id, value, isCheck }) => {
  const context = useContext(StateContext);

  const { state, dispatch } = context;

  const onCheckBtn = (id) => {
    dispatch({ type: "isCheck", id });
  };

  const onEditBtn = (id) => {
    dispatch({ type: "isModal" });
    dispatch({ type: "onSelectId", id });
  };

  const onDeleteBtn = (id) => {
    swal({
      title: "정말 삭제하시겠습니까?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch({ type: "onDelete", id });
        swal("삭제되었습니다", {
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Do>
        {isCheck ? <LeftDone>{value}</LeftDone> : <Left>{value}</Left>}
        <Right>
          <CheckIcon onClick={() => onCheckBtn(id)}>
            <FontAwesomeIcon icon={faCheckSquare} />
          </CheckIcon>
          <EditIcon onClick={() => onEditBtn(id)}>
            <FontAwesomeIcon icon={faEdit} />
          </EditIcon>
          <DeleteIcon onClick={() => onDeleteBtn(id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </DeleteIcon>
        </Right>
      </Do>
      {state.isModal && (
        <Portal>
          <ModalComponent />
        </Portal>
      )}
    </>
  );
};

export default Todo;
