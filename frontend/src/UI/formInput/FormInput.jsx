import React from "react";
import { Input, FormInputContainer, FromInputLabel } from "./FormInput.styles";

const FormInput = (props) => {
  const { label, className, ...otherProps } = props;
  return (
    <FormInputContainer className={className}>
      <FromInputLabel htmlFor={label}>{label && label}</FromInputLabel>
      <Input {...otherProps} />
    </FormInputContainer>
  );
};

export default FormInput;
