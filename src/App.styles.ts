import styled from "styled-components";
import { breakpoint } from "./Styles/BreakPoint";
export const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ContainerBlock = styled.div`
  border: 1px solid red;
  flex: 0 0 50%;
  ${breakpoint.md`
    flex: 0 0 33%;
  `}
`;

export const ContainerImage = styled.img`;
  width: 100px;
`;