import styled from "styled-components";

import { Mic, Headset, Settings } from "styled-icons/material";

export const Container = styled.div`
  grid-area: UI;
  background: #292b2f;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items:center;

  img {
    height: 32px;
    width: 32px;
    background: #c4c4c4;
    border-radius: 50%;
    margin-right: 8px;
    position:relative;

    &::after {
      width:10px;
      height:10px;
      background:#EB4849;
      border-radius:50%;
      position:absolute;
      content:'';
      bottom:0;
      right:0;
    }
  }

   > div {
    display: flex;
    flex-direction: column;

    strong {
      color: #fff;
      font-size: 13px;
      line-height: 15px;
      font-weight:bold;
    }

    span {
     color:var(--gray);
     font-size:13px;
    } 
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const MicroIcon = styled(Mic)`
  width: 16px;
  height: 16px;
  color: #b9bbbe;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const HeadsetIcon = styled(Headset)`
  width: 16px;
  height: 16px;
  color: #b9bbbe;
  margin: 0 5px;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const SeetingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  color: #b9bbbe;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;
