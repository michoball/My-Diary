import axios from "axios";

const API_URL = "/api/labels/";

//유저 라벨 전부 가져오기
const getLabels = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};
// 유저 라벨 지우기
const deleteLabel = async (labelId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + labelId, config);

  return response.data;
};

// 유저가 라벨 생성하기
const createLabel = async (labelData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, labelData, config);
  return response.data;
};

// 라벨 수정하기
const updateLabel = async (labelId, labelData, token) => {
  console.log(labelId);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + labelId, labelData, config);

  return response.data;
};

const labelApi = {
  getLabels,
  deleteLabel,
  createLabel,
  updateLabel,
};

export default labelApi;
