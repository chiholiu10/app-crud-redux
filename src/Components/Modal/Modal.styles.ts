import styled from "styled-components";

export const Modal = styled.div<{ isOpen: boolean; }>`
  display: ${(props) => props.isOpen ? "block" : "none"};
  position: fixed;
  border: 1px solid red;
  background-color: red;
  top: 0;
  width: 100px;
  height: 100px;
`;