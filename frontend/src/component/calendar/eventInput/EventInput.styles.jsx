import styled from "styled-components";
import { BaseButton } from "../../../UI/button/button.styles";

export const EventCreatorContainer = styled.div`
  position: relative;
  border-radius: 10px;
  border-top-left-radius: 0;

  background-color: ${(props) => props.theme.bg.container};
  padding: 10px;
`;

export const EventToggerContainer = styled.div`
  display: flex;

  position: absolute;
  top: -30px;
  left: 5px;
  overflow: hidden;
`;

export const EventTogger = styled.button`
  position: relative;
  background-color: white;
  height: 30px;
  width: 60px;

  border: none;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-weight: bold;

  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background-color: ${(props) => props.theme.button.underline};
    border-top-right-radius: 15px;
  }

  :hover {
    border-top-right-radius: 15px;
    background-color: #ffebcd;
  }
  :active {
    transform: translateX(-2px);
  }

  :disabled {
    &.active {
      color: unset;
    }
  }
`;

export const EventInputContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const BasicInputBg = styled.div`
  padding: 10px;
  width: 300px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;

  background-color: ${(props) => props.theme.bg.optionBg};
  border-radius: 10px;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const EventButton = styled(BaseButton)`
  font-size: 18px;
`;
