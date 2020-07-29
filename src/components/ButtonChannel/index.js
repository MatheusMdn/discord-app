import React from "react";

import { Container, HashIcon, InviteIcon, SettingsIcon } from "./styles";

function ButtonChannel({ channel, selected }) {
  return (
    <Container className={selected ? "active " : ""}>
      <div>
        <HashIcon />
        <span>{channel}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ButtonChannel;
