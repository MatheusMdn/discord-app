import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import { Mention } from "../ChannelMessage";

import ChannelMessage from "../ChannelMessage";

function ChannelData() {
  const messageRef = useRef();

  useEffect(() => {
    const div = messageRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />
        <ChannelMessage
          author="Matheus Martins"
          date="29/08/2020"
          content="Isso e uma mensagem"
        />

        <ChannelMessage
          author="Diego Fernandes"
          date="29/08/2020"
          content={
            <>
              <Mention>@Matheus Martins</Mention>,me carrega no LOL e CS de novo
              por favor ?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
