import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &.title {
    margin-bottom: 25px;
  }
  &.time {
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  input[type="datetime-local"],
  input[type="date"],
  input[type="time"] {
    font-weight: bold;
    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  padding: 10px 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #bbb;
  background-color: transparent;
  letter-spacing: 1px;

  outline: none;
  color: ${(props) => props.theme.text.content};

  :disabled {
    border-radius: 10px;
    border-bottom: 3px solid white;
    background-color: rgba(43, 43, 43, 0.8);
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: black !important;
  }
`;

export const FromInputLabel = styled.label`
  margin-right: 10px;
  color: ${(props) => props.theme.text.content};
  font-weight: bold;
  letter-spacing: 0.7px;
  white-space: nowrap;
`;
