import React from "react";
import { Container, Separator } from "./styles";
import ChannelButton from "../ChannelButton";

export default function ServerList() {
  return (
    <Container>
      <ChannelButton ishome hasMention="17" />
      <Separator />
      <ChannelButton />
      <ChannelButton white />
      <ChannelButton hasMention="6" />
      <ChannelButton />
      <ChannelButton white />
      <ChannelButton />
      <ChannelButton />
      <ChannelButton />
      <ChannelButton />
      <ChannelButton hasMention="3" />
    </Container>
  );
}
