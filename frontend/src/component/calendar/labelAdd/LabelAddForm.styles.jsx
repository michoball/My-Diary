import styled from "styled-components";
import { BaseButton } from "../../../UI/button/button.styles";
import { ColorPalletContainer } from "../../colorPicker/ColorPicker.styles";

export const LabelInputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bg.main};
  padding: 20px;
`;

export const LabelInputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;

  .labelTitle {
    width: 100%;
  }
`;

export const AllDayBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
  }
  ${ColorPalletContainer} {
    margin-left: 20px;
    width: 220px;
  }
`;

export const AddBtn = styled(BaseButton)`
  font-size: 16px;
  background-color: #ffc107cc;

  :hover {
    transform: scale(0.98);
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancelBtn = styled.button`
  position: absolute;
  top: -30px;
  right: -10px;
  border: none;
  background-color: transparent;
  color: red;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
`;
