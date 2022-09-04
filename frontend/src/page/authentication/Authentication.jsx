import SignUpForm from "../../component/auth/sign-up/SignUp";

import { AuthenticationContainer } from "./Authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
