import styled from "styled-components";

import { Add } from "styled-icons/material";

export const Container = styled.div`
  grid-area: IC;
  display: flex;
  flex-direction: column;
  background: #2f3136;
  padding: 24px 9.5px 0 16px;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;

  > span {
    font-size: 12px;
    color: #fff;
    opacity: 0.49;
    font-weight: 500;
  }
`;

export const IconPlus = styled(Add)`
  width: 21px;
  height: 21px;
  color: #fff;
`;
