import styled from "styled-components";

import { PersonAdd, Settings } from "styled-icons/material";
import { Hashtag } from "styled-icons/heroicons-outline";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 3px;

  border-radius: 5px;
  background: transparent;

  transition: background 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    font-size: 15px;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background: var(--quinary);

    > div span {
      color: #fff;
    }
  }
`;

export const HashIcon = styled(Hashtag)`
  height: 20px;
  width: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  color: var(--symbol);
  width: 16px;
  height: 16px;
  margin-right: 5px;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const SettingsIcon = styled(Settings)`
  color: var(--symbol);
  width: 16px;
  height: 16px;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;
