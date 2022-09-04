import { useState, useEffect } from "react";
import FormInput from "../../../UI/formInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../../../UI/button/button";
import { userReset } from "../../../features/user/userSlice";
import { register } from "../../../features/user/user.thunk";
import {
  selectUser,
  selectUserIsLoading,
  selectUserReducer,
} from "../../../features/user/user.select";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  SignUpContainer,
  LogInForm,
  ButtonContainer,
  HeaderContainer,
} from "./SignUp.styles";
import { PersonFill } from "react-bootstrap-icons";
import Loading from "../../../UI/loading/Loading";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formfield, setFormfield] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, message } = useSelector(selectUserReducer, shallowEqual);
  const user = useSelector(selectUser);
  const singInIsLoading = useSelector(selectUserIsLoading);
  const { displayName, email, password, confirmPassword } = formfield;

  useEffect(() => {
    if (isError) {
      alert(`Something wrong in sign up ~  ${message}`);
    }

    //Redirect when logged in
    if (user?._id) {
      navigate("/");
      alert(`user already logged in user : ${user.displayName}`);
    }
    dispatch(userReset());
  }, [isError, user, message, dispatch, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormfield({
      ...formfield,
      [name]: value,
    });
  };

  const resetFormField = () => {
    setFormfield(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length === 0 || password !== confirmPassword) {
      throw new Error("비밀번호가 없거나 일치하지 않습니다.");
    }
    if (!email.trim().includes("@")) {
      throw new Error("이메일을 정확히 입력하시오");
    }
    const userData = {
      displayName,
      email,
      password,
    };

    dispatch(register(userData)).then(() => navigate("/"));
    resetFormField();
  };

  return (
    <SignUpContainer>
      <HeaderContainer>
        <PersonFill /> <h1>회원가입</h1>
      </HeaderContainer>
      {singInIsLoading ? (
        <Loading />
      ) : (
        <LogInForm onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            required
            value={displayName}
            name="displayName"
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            type="email"
            required
            value={email}
            name="email"
            onChange={handleChange}
          />

          <FormInput
            className="password"
            label="Password"
            type="password"
            required
            value={password}
            name="password"
            onChange={handleChange}
          />

          <FormInput
            className="confirm"
            label="Confirm Password"
            type="password"
            required
            value={confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
          <ButtonContainer>
            <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
              Sign Up
            </Button>
          </ButtonContainer>
        </LogInForm>
      )}
    </SignUpContainer>
  );
};

export default SignUpForm;
