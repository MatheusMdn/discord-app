import React from "react";

import { Grid } from "./styles";

import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import InfoChannel from "../InfoChannel";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import ChannelData from "../ChannelData";

function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <InfoChannel />
      <ChannelInfo />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
}

export default Layout;
