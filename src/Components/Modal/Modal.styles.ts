import styled from "styled-components";

export const ModalContainer = styled.div<{ isOpen: boolean; }>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0,0,0,.55);
  z-index: 40;
  display:  ${(props) => props.isOpen ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export const Modal = styled.div`
  position: fixed;
  border: 1px solid black;
  background-color: white;
  flex-direction: column;
  color: white;
  top: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  input {
    color: black;
    border: 2px solid black;
  }
`;

export const ModalInputName = styled.input`
  margin-bottom: 15px;
`;

export const ModalInputUsername = styled.input``;

export const ModalBlockButton = styled.div`
  margin-top: auto;
  display: flex;
`;

export const ModalBlockButtonContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = `
  width: 100px;
  text-align: center;
  border: 1px solid black;
  background-color: black;
  padding: 5px 12px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const ModalButtonClose = styled.button`
  ${Button}
`;

export const ModalButtonGeneral = styled.button`
  ${Button}
`;


