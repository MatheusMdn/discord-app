import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  border: 0;
  background: ${(props) => (props.ishome ? "#6633cc" : "#36393F")};
  border-radius: ${(props) => (props.ishome ? "16px" : "50%")};
  transition: background 0.2s;
  position: relative;

  > img {
    width: 24px;
    height: 24px;
  }

  & + button {
    margin-top: 8px;
  }

  &:hover {
    border-radius: 16px;
    background: ${(props) => (props.ishome ? "#6633cc" : "#6E86D6")};
  }

  &::before {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    position: absolute;
    content: "";
    background: #fff;
    left: -17px;
    top: calc(50% -4.5px);

    display: ${(props) => (props.white ? "block" : "none")};
  }

  &::after {
    width: auto;
    height: 16px;
    padding: 0 4px;
    border-radius: 12px;
    background: #f84a4b;
    border: 4px solid #202225;
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    content: '${(props) => props.hasMention && props.hasMention}';
    position: absolute;
    bottom: -4px;
    right: -4px;

    display: ${(props) => (props.hasMention > 0 ? "inline" : "none")};
  }
`;
