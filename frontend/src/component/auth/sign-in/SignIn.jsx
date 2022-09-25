import { useState } from "react";
import FormInput from "../../../UI/formInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../../../UI/button/button";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { oauthLogin, login } from "../../../features/user/user.thunk";
import {
  selectUserIsLoading,
  selectUserReducer,
} from "../../../features/user/user.select";
import {
  ButtonsContainer,
  LogInForm,
  SignInHeader,
  NavLink,
  OauthContainer,
} from "./Signin.styles";
import { BoxArrowInRight } from "react-bootstrap-icons";
import Loading from "../../../UI/loading/Loading";
import { useEffect } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formfield, setFormfield] = useState(defaultFormFields);
  const navigate = useNavigate();
  const { email, password } = formfield;
  const userIsLoading = useSelector(selectUserIsLoading);
  const { isError, message } = useSelector(selectUserReducer);

  useEffect(() => {
    if (isError) {
      alert(`Login Failed ${message} `);
    }
  }, [isError, message]);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim().includes("@")) {
      throw new Error("Please fill out the entire form");
    }
    const userData = {
      email,
      password,
    };
    try {
      dispatch(login(userData));
    } catch (error) {
      alert("로그인에 실패했습니다.", error);
    }

    navigate("/home");
    resetFormField();
  };

  const oAuthLoginHandler = async (service) => {
    let timer = null;

    const oAuthUrl = process.env.REACT_APP_MY_APP_URL;

    const newWindow = window.open(
      `${oAuthUrl}/api/users/${service}`,
      "_blank",
      "width=500, height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          dispatch(oauthLogin());
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  return (
    <>
      <SignInHeader>
        <h1>
          <BoxArrowInRight /> Log In
        </h1>
        <NavLink to="/login">회원가입</NavLink>
      </SignInHeader>
      {userIsLoading ? (
        <Loading />
      ) : (
        <LogInForm onSubmit={handleSubmit}>
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

          <ButtonsContainer>
            <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
              Sign In
            </Button>
            <OauthContainer>
              <div
                className="google"
                onClick={oAuthLoginHandler.bind(null, "google")}
              />
              <div
                className="kakao"
                onClick={oAuthLoginHandler.bind(null, "kakao")}
              />
              <div
                className="naver"
                onClick={oAuthLoginHandler.bind(null, "naver")}
              />
            </OauthContainer>
          </ButtonsContainer>
        </LogInForm>
      )}
    </>
  );
};

export default SignInForm;
