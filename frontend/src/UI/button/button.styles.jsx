import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(33, 150, 243, 0.7);
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;

  font-weight: bold;
  color: whitesmoke;
  letter-spacing: 1px;

  cursor: pointer;

  &.delete {
    background-color: ${(props) => props.theme.button.underline};
  }

  svg {
    margin-right: 10px;
  }
  :active {
    transform: scale(0.98);
  }
  /* @media screen and (max-width: 1023px) {
    width: 150px;
    height: 35px;
    font-size: 14px;
  } */
`;

export const CreateButton = styled(BaseButton)`
  width: 90px;
  background-color: ${(props) => props.theme.bg.optionBg};
  color: ${(props) => props.theme.text.underline};
  svg {
    font-size: 20px;
  }
  @media screen and (max-width: 1200px) {
    width: 80px;
    height: 35px;
    font-size: 14px;
  }
`;

export const BanButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.button.underline};
  border-radius: 10px;
  width: 90px;
  color: ${(props) => props.theme.text.underline};
  margin-right: 10px;

  svg {
    font-size: 20px;
  }
  @media screen and (max-width: 1200px) {
    width: 80px;
    height: 35px;
    font-size: 14px;
  }
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
