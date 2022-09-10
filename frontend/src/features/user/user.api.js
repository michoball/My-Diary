import axios from "axios";

const API_URL = "/api/users";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  const res = await axios.post(API_URL + "/logout", {
    withCredentials: true,
  });
  if (res.status === 200) {
    localStorage.removeItem("user");
    localStorage.removeItem("Theme");
  }
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const oauthLogin = async () => {
  const res = await axios.get(
    API_URL + "/oauth/success"
    // , {
    //   withCredentials: true,
    // }
  );
  if (res.status === 200) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const userApi = {
  register,
  logout,
  login,
  oauthLogin,
};

export default userApi;
