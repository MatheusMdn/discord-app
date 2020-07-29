import React from "react";

import { Button } from "./styles";
import logo from "../../assets/logo.svg";

function ChannelButton({ ishome, hasMention, white }) {
  return (
    <Button ishome={ishome} hasMention={hasMention} white={white}>
      {ishome && <img src={logo} alt="Rocketseat" />}
    </Button>
  );
}

export default ChannelButton;
