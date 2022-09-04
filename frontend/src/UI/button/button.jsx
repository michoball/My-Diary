import {
  BaseButton,
  CreateButton,
  BanButton,
  CancelBtn,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  create: "create",
  ban: "ban",
  cancel: "cancel",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.create]: CreateButton,
    [BUTTON_TYPE_CLASSES.ban]: BanButton,
    [BUTTON_TYPE_CLASSES.cancel]: CancelBtn,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
