import React from "react";

import { Container, Category, IconPlus } from "./styles";

import ButtonChannel from "../ButtonChannel";

export default function InfoChannel() {
  return (
    <Container>
      <Category>
        <span>CANAIS DE TEXTO</span>
        <IconPlus />
      </Category>

      <ButtonChannel channel="chat-livre" selected />
      <ButtonChannel channel="trabalho" />
      <ButtonChannel channel="lolzinho" />
      <ButtonChannel channel="valorant" />
      <ButtonChannel channel="csgo" />
    </Container>
  );
}
