// theme.js
const light = {
  bg: {
    main: "#f3e9e7",
    container: "#ffffff",
    border: "#623933",
    optionBg: "#ffebcd",
    adOptionBg: "#4caf50cc",
  },
  text: {
    head: "#f2727d",
    content: "#623933",
    memoTitle: "#623933",
    underline: "black",
    reverse: "#ffffff",
  },
  button: {
    base: "#f2a7a7",
    underline: "#f23d4c",
    bg: "#f3e9e7",
  },
};

// 다크모드 색
const dark = {
  bg: {
    main: "#2D3940",
    container: "#3E5059",
    border: "#7495A6",
    optionBg: "#307032",
    adOptionBg: "#89988e",
  },
  text: {
    head: "#f2727d",
    content: "#ffffff",
    memoTitle: "#ffffff",
    underline: "#f3e9e7",
    reverse: "#ffffff",
  },
  button: {
    base: "#BF303C",
    underline: "#f2727d",
    bg: "#2D3940",
  },
};

export const lightTheme = { ...light };
export const darkTheme = { ...dark };
