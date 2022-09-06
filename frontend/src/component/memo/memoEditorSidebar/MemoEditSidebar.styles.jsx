import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CircleColorPicker,
  ColorPalletContainer,
} from "../../colorPicker/ColorPicker.styles";

export const SideBarViewContainer = styled.div`
  width: 100%;

  min-width: 300px;
  max-width: 350px;
  padding: 10px 10px 20px 0;
  height: calc(100vh - 100px);

  @media screen and (max-width: 1023px) {
    height: unset;
    max-width: unset;
    min-width: 200px;
  }
  @media screen and (max-width: 767px) {
    padding: 10px 10px 20px;
    min-width: 620px;
    max-width: unset;
  }
`;

export const SideBarWrapper = styled.div`
  width: 100%;

  height: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.bg.container};

  border-radius: 10px;
  @media screen and (max-width: 767px) {
    position: relative;
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #9c27b0b2;
  color: white;

  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;

  transition: background-color 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: #9c27b0;
  }
  svg {
    margin-right: 10px;
    transform: translateX(-10px);
  }
`;

export const SideBtnWapper = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 2px solid ${(props) => props.theme.bg.main};

  padding-top: 20px;
  svg {
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 740px;
    left: 0;
    z-index: 10;

    border-top: 0;
    padding-top: 0;
    padding: 0 20px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SideBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.text.content};
  font-size: 20px;
  padding: 20px;

  border-radius: 10px;
  border: none;

  transition: all 0.2s ease-in;
  cursor: pointer;
  background-color: transparent;

  :hover {
    background-color: ${(props) => props.theme.bg.main};
  }
  &.delete {
    :hover {
      background-color: ${(props) => `${props.theme.button.underline}7f`};
    }
  }
  @media screen and (max-width: 1023px) {
    font-size: 18px;
    padding: 10px 20px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: row;
  }
`;

export const ColorSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin: 20px 0;
  cursor: pointer;
  label {
    font-size: 20px;
    display: flex;
    cursor: pointer;
  }
  svg {
    margin-right: 10px;
  }

  .hide {
    display: none;
  }

  ${ColorPalletContainer} {
    width: 220px;
    margin-top: 10px;
    transform: translateX(10px);
  }
  ${CircleColorPicker} {
    background-color: ${(props) => props.theme.bg.main};
    span {
      width: 35px;
      height: 35px;
      transition: box-shadow 200ms ease !important;
    }
  }
  @media screen and (max-width: 1023px) {
    label {
      font-size: 18px;
    }

    margin: 10px 0;
    ${ColorPalletContainer} {
      height: 80px;
      width: 85%;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    margin: 0;
    padding: 10px 20px;
    border-radius: 10px;
    :hover {
      background-color: ${(props) => props.theme.button.bg};
    }
    ${ColorPalletContainer} {
      position: absolute;
      top: -100px;
      right: -40px;
      width: 220px;
    }
  }
`;
