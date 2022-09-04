import styled from "styled-components";
import { FormInputContainer } from "../../../UI/formInput/FormInput.styles";
import { BaseButton } from "../../../UI/button/button.styles";

export const EventEditcontainer = styled.div`
  position: relative;
  border-radius: 10px;
  border-top-right-radius: 0;

  background-color: ${(props) => props.theme.bg.container};
  padding: 20px;
`;

export const EventToggerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5px;
  right: -30px;
  overflow: hidden;
`;

export const EventTogger = styled.button`
  position: relative;
  background-color: ${(props) => props.theme.bg.container};
  height: 50px;
  width: 30px;

  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: bold;

  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background-color: ${(props) => props.theme.button.underline};
    border-top-right-radius: 15px;
  }

  :hover {
    border-top-right-radius: 15px;
    background-color: ${(props) => props.theme.button.base};
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

export const EditInputContainer = styled.div`
  display: flex;
  gap: 10px;
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

  background-color: ${(props) => props.theme.bg.adOptionBg};

  border-radius: 10px;
`;

export const EventEditForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${FormInputContainer} {
    margin-bottom: 20px;
  }
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
  gap: 20px;
  width: 100%;
`;

export const ConfirmBtn = styled(BaseButton)`
  width: 150px;
  font-size: 18px;
`;
