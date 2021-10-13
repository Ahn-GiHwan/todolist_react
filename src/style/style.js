import styled from "styled-components";

const FlexSetting = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  justify-content: ${(props) => props.jc || "center"};
  align-items: ${(props) => props.ai || "center"};
`;

const PositionSetting = styled.div`
  position: absolute;
  top: ${(props) => props.t || "auto"};
  right: ${(props) => props.r || "auto"};
  bottom: ${(props) => props.b || "auto"};
  left: ${(props) => props.l || "auto"};
`;

const InputSetting = styled.input`
  border: none;
  outline: none;
  font-size: ${(props) => props.fs || "16px"};
  background-color: ${(props) => props.bc || "transparent"};
`;

const BtnSetting = styled.button`
  border: none;
  border-radius: ${(props) => props.br || "10px"};
  cursor: pointer;
  margin: 0;
  color: white;
  padding: 5px 7px;
`;

// Container
export const Container = styled(FlexSetting)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: skyblue;
`;

// Main
export const Main = styled(FlexSetting)`
  width: fit-content;
  max-width: 80%;
  height: 80%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 27px 3px white;
  border: 1px solid white;
`;

// Header
export const Header = styled(FlexSetting)`
  flex: 2;
`;

export const ListIcon = styled.i`
  color: white;
  font-size: 25px;
  padding: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-weight: 900;
  font-size: 40px;
`;

// Input Box

export const InputDiv = styled.div`
  padding-bottom: 5px;
  margin-bottom: 15px;
  border-bottom: 2px solid white;
`;

export const Input = styled(InputSetting)``;

export const SubmitBtn = styled(BtnSetting)`
  padding: 5px 10px;
  color: black;
  background-color: white;
`;

// todo List div

export const DoList = styled.div`
  position: relative;
  flex: 8;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px #6e6e6e;
  overflow: scroll;
`;

export const EmptyDoList = styled(FlexSetting)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Do = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: white;
  }
`;

export const Left = styled.span`
  flex: 9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LeftDone = styled(Left)`
  text-decoration: line-through;
`;

export const Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 84px;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
`;

export const CheckIcon = styled(BtnSetting)`
  color: white;
  padding: 5px 7px;
  border-radius: 5px 0 0 5px;
  background-color: orchid;
`;

export const EditIcon = styled(BtnSetting)`
  color: white;
  padding: 5px 7px;
  border-radius: 0;
  background-color: green;
`;

export const DeleteIcon = styled(BtnSetting)`
  color: white;
  padding: 5px 7px;
  border-radius: 0 5px 5px 0;
  background-color: red;
`;

// TodosUpdate

export const UpdateBox = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-bottom: 15px;
  font-size: 12px;
  /* background-color: red; */
`;

export const UpdateContent = styled.span`
  vertical-align: text-top;
`;

export const Check = styled.input.attrs({ type: "checkbox" })`
  background-color: blue;
`;

// Modal

export const Modal = styled(PositionSetting)`
  background-color: rgb(0.1, 0.1, 0.1, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalMain = styled(FlexSetting)`
  position: relative;
  width: 50%;
  height: 30%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 27px 3px white;
  background-color: white;
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

export const ModifyInput = styled(InputSetting)`
  width: 100%;
  border-bottom: 3px solid black;
`;

export const ExitBtn = styled(BtnSetting)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: skyblue;
  color: white;
  padding: 5px 10px;
`;

export const ModifySubmitBtn = styled(BtnSetting)`
  width: 100%;
  padding: 10px;
  color: white;
  background-color: skyblue;
`;

// Skeleton

export const Loading = styled.div`
  height: 49px;
  margin: 10px;
  border-radius: 10px;
  background-color: #eeeeee;
  animation: loading 2s infinite linear;
  @keyframes loading {
    0% {
      opacity: 0.4;
    }
    20% {
      opacity: 0.9;
    }
    40% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.9;
    }
    80% {
      opacity: 0.4;
    }
    90% {
      opacity: 0.9;
    }
  }
`;
