import styled from "styled-components";

import { ExpandMore } from "styled-icons/material";

export const Container = styled.div`
  grid-area: SN;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #2f3136;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  padding: 0 11px 0 16px;
  z-index: 2;
`;

export const ServerTitle = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const ExpandIcon = styled(ExpandMore)`
  color: #fff;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
