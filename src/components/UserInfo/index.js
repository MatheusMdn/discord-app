import React from "react";

import {
  Container,
  UserInfo,
  Icons,
  MicroIcon,
  HeadsetIcon,
  SeetingsIcon,
} from "./styles";

export default function userInfo() {
  return (
    <Container>
      <UserInfo>
        <img src="" alt="" />
        <div>
          <strong>Matheus Martins</strong>
          <span>#2689</span>
        </div>
      </UserInfo>
      <Icons>
        <MicroIcon />
        <HeadsetIcon />
        <SeetingsIcon />
      </Icons>
    </Container>
  );
}
