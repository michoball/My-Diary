import styled from "styled-components";
import { FormInputContainer } from "../../../UI/formInput/FormInput.styles";
import { Link } from "react-router-dom";
import {
  CircleColorPicker,
  ColorPalletContainer,
} from "../../colorPicker/ColorPicker.styles";

export const SideBarWrapper = styled.div`
  height: 100%;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding-left: 10px;
    margin-bottom: 10px;
  }
`;

export const SideContentWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100% - 80px);

  background-color: ${(props) => props.theme.bg.container};

  padding: 10px;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const SideBtnWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 20px;
  padding: 20px;

  border-radius: 10px;

  transition: all 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.button.bg};
  }
  svg {
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
    padding: 10px 20px;
    align-items: unset;
    height: 40px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.theme.bg.container};

  border-radius: 10px;

  padding: 20px;
  margin-bottom: 20px;

  ${FormInputContainer} {
    width: 80%;
    align-items: center;

    margin-bottom: unset;
    margin: 5px 10px;

    input {
      padding: 5px 10px;
      width: 100%;
    }
    label {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 767px) {
    ${FormInputContainer} {
      width: 100%;
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;

  padding: 5px;
  border-radius: 10%;
  border: none;
  background-color: transparent;

  transition: transform 0.2s ease-in;
  :hover {
    transform: scale(1.1);
  }
  svg {
    fill: ${(props) => props.theme.text.content};
    font-size: 18px;
    cursor: pointer;
  }
`;

export const MajorMemoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px 20px;
  height: 50%;

  label {
    display: flex;
    font-size: 20px;
  }
  svg {
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    padding: 10px 20px;
    label {
      font-size: 18px;
    }
  }
`;

export const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid ${(props) => props.theme.bg.main};
  gap: 15px;
  margin-top: 15px;

  height: 100%;

  border-radius: 10px;
  padding: 10px;

  background-color: ${(props) => props.theme.bg.main};

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 767px) {
    height: 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 10px;
  }
`;

export const ColorSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
  border: 10px;
  cursor: pointer;
  label {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
  }

  svg {
    margin-right: 10px;
  }
  .hide {
    display: none;
  }
  ${ColorPalletContainer} {
    width: 90%;
    height: 100%;
    transform: translateX(10px);
  }
  ${CircleColorPicker} {
    background-color: ${(props) => props.theme.bg.main};
  }
  @media screen and (max-width: 767px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    width: unset;

    label {
      font-size: 18px;
      margin-bottom: 0;
    }
    border-radius: 10px;
    :hover {
      background-color: ${(props) => props.theme.button.bg};
    }
    ${ColorPalletContainer} {
      position: absolute;
      top: 60px;
      right: 0;
      width: 220px;
    }
  }
`;

export const SideBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.text.content};
  font-size: 20px;

  padding: 20px;
  margin-bottom: 10px;

  border-radius: 10px;
  border: none;
  transition: all 0.2s ease-in;

  cursor: pointer;
  background-color: transparent;

  :hover {
    background-color: ${(props) => props.theme.bg.main};
  }
  svg {
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;
