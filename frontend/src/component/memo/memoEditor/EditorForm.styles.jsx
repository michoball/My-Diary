import styled from "styled-components";
import FormInput from "../../../UI/formInput/FormInput";

export const EditorFromContainer = styled.div`
  width: 100%;
  min-width: 700px;
  padding: 10px 0 30px 10px;
  @media screen and (max-width: 1023px) {
    min-width: 650px;
    padding: 10px 10px 30px;
  }
  @media screen and (max-width: 767px) {
    min-width: 620px;
    padding: 10px 10px 30px;
  }
`;

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  border-radius: 10px;

  height: 100%;
  background-color: ${(props) => props.theme.bg.container};
  @media screen and (max-width: 767px) {
    padding-bottom: 60px;
  }
`;

export const BaseHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 0;

  .date {
    font-weight: bold;
  }
`;

export const StarDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToggleMainBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    font-size: 25px;
    fill: ${(props) =>
      props.major ? "#FF8A05" : `${props.theme.text.content}`};
  }

  :focus {
    svg {
      animation: clicked 0.5s ease;
    }
  }

  @keyframes clicked {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const EditorFormInput = styled(FormInput)`
  align-items: center;

  border: 2px solid ${(props) => props.theme.bg.border};
  border-radius: 10px;

  margin: 0;
  padding: 5px 10px;

  max-width: 500px;

  label {
    font-size: 18px;
    margin-right: 5px;
  }

  input {
    border-bottom: none;
    padding: 3px 10px;
    font-size: 18px;
  }
`;

export const MyEditor = styled.div`
  background-color: ${(props) => props.theme.bg.container};
  width: 100%;
  border-radius: 10px;
  height: 100%;
  color: black;
  overflow-y: scroll;

  .wrapper-class {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .editor {
    background-color: ${({ bgcolors }) => `${bgcolors}b2`};
    padding: 10px 20px;
    height: calc(100% - 40px);
    border: 2px solid ${(props) => props.theme.bg.border} !important;
    border-radius: 10px;

    .public-DraftEditorPlaceholder-inner {
      color: rgba(0, 0, 0, 0.7);
      font-weight: bold;
    }
    @media screen and (max-width: 1023px) {
      height: 400px;

      .DraftEditor-editorContainer,
      .DraftEditor-root,
      .public-DraftEditor-content {
        height: calc(100% - 40px);
      }
    }
  }

  .toolbar-class {
    border: 2px solid ${(props) => props.theme.bg.border} !important;
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;
