import { useEffect } from "react";

function OauthLogin() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 500);
  }, []);

  return <div>Login Success! </div>;
}

export default OauthLogin;
