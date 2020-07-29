import styled from "styled-components";

import { Hashtag } from "styled-icons/heroicons-outline";

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  background: #36393f;
  padding: 0 17px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const HashIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`;

export const ServerName = styled.div`
  margin-left: 9px;
  color: #fffff8;
  font-size: 16px;
  font-weight: bold;
`;

export const Separator = styled.div`
  width: 1px;
  height: 24px;
  background: #42454b;
  margin: 0 13px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #fffff8;
  opacity: 0.7;
`;
