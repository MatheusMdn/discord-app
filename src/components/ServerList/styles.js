import styled from "styled-components";

export const Container = styled.div`
  grid-area: SL;
  background: #202225;
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 11px 0;
  overflow-y: scroll;
  max-height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  height: 2px;
  width: 32px;
  background: #2d2f32;
  margin: 8px 19px;
`;
