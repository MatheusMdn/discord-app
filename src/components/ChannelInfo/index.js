import React from "react";

import {
  Container,
  HashIcon,
  ServerName,
  Separator,
  Description,
} from "./styles";

export default function ChannelInfo() {
  return (
    <Container>
      <HashIcon />
      <ServerName>chat-livre</ServerName>
      <Separator />

      <Description>Canal aberto para pessoas</Description>
    </Container>
  );
}
