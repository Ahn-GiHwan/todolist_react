import React, { useState } from "react";
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
import axios from "axios";

const Todo = React.memo(({ id, value, isCheck, dispatch }) => {
  const [click, setClick] = useState(false);

  const onCheckBtn = async (id) => {
    setClick(true);

    await axios({
      method: "patch",
      url: "https://skytodo-express.herokuapp.com/isCheck",
      data: { id },
    }).then((res) => {
      dispatch({ type: "updateTodos", todos: res.data });
    });

    setClick(false);
  };

  const onModifyBtn = async (id) => {
    await dispatch({ type: "isModal", id });
  };

  const onDeleteBtn = async (id) => {
    await swal({
      title: "정말 삭제하시겠습니까?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios({
          method: "delete",
          url: "https://skytodo-express.herokuapp.com/delete",
          data: { id },
        })
          .then((res) => {
            dispatch({ type: "updateTodos", todos: res.data });
            swal("삭제되었습니다", {
              icon: "success",
            });
          })
          .catch((e) => {
            console.log(e);
            swal("삭제 실패", {
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <>
      <Do>
        {isCheck ? <LeftDone>{value}</LeftDone> : <Left>{value}</Left>}
        <Right>
          <CheckIcon onClick={() => onCheckBtn(id)} disabled={click}>
            <FontAwesomeIcon icon={faCheckSquare} />
          </CheckIcon>
          <EditIcon onClick={() => onModifyBtn(id)}>
            <FontAwesomeIcon icon={faEdit} />
          </EditIcon>
          <DeleteIcon onClick={() => onDeleteBtn(id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </DeleteIcon>
        </Right>
      </Do>
    </>
  );
});

export default Todo;
