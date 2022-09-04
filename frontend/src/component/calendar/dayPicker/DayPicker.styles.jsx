import styled from "styled-components";

export const DayPickerContainer = styled.div`
  width: 100%;
  header {
    font-weight: bold;
    letter-spacing: 0.7px;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  .day-label {
    font-weight: bold;
  }
`;
