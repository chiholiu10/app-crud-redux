import styled from "styled-components";

export const LikeButtonElement = styled.div<{ like: boolean; }>`
  width: 30px;
  height: 30px;
  border: ${(props) => props.like ? "1px solid red" : "1px solid green"};
`;
