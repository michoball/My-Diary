import styled from "styled-components";
import { CirclePicker } from "react-color";

export const ColorPalletContainer = styled.div`
  height: 105px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .warning {
    font-size: 10px;
    color: red;
    display: none;
    padding: 10px 0;
    &.disable {
      display: block;
    }
  }
`;

export const CircleColorPicker = styled(CirclePicker)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px 0 0 15px;

  background-color: white;

  border-radius: 10px;

  span div :focus {
    transform: scale(1);
    width: 20px;
    height: 20px;
    box-shadow: ${({ color }) => color} 0px 0px 0px 3px inset,
      ${({ color }) => color} 0px 0px 5px !important;
    transition: box-shadow 200ms ease !important;
  }
  span {
    transition: box-shadow 200ms ease !important;
  }
`;
