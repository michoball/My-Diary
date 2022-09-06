import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../theme/theme";
import ToggleSwitch from "../../UI/toggleSwitch/ToggleSwitch";

function ThemeToggler() {
  const { themeToggler, isDarkTheme } = useContext(ThemeContext);

  const themeChangeHandler = (bool) => {
    themeToggler(bool);
  };

  return (
    <TogglerContainer>
      <ToggleSwitch
        title="다크모드"
        type="theme"
        onSwitchEvent={themeChangeHandler}
        toggleValue={isDarkTheme}
      />
    </TogglerContainer>
  );
}

export default ThemeToggler;

const TogglerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 20px;
  right: 30px;
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.theme.bg.adOptionBg};
  border-radius: 20px;

  .toggle-container {
    justify-content: center;
  }
  span {
    color: ${(props) => props.theme.text.memoTitle};
  }

  @media screen and (max-width: 767px) {
    width: 120px;
    height: 40px;
    right: 20px;
    top: 30px;
    span {
      font-size: 12px;
    }
  }
`;
