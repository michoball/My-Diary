import axios from "axios";

const API_URL = "/api/memos/";

//유저 메모 전부 가져오기
const getMemos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

//유저 메모 하나 가져오기
const getMemo = async (memoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + memoId, config);

  return response.data;
};

// 유저 메모 지우기
const deleteMemo = async (memoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + memoId, config);

  return response.data;
};

// 유저가 메모 생성하기
const createMemos = async (memoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, memoData, config);

  return response.data;
};

// 메모 수정하기
const updateMemo = async (memoId, memoData, token) => {
  console.log(memoId);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + memoId, memoData, config);

  return response.data;
};

const memoApi = {
  getMemos,
  getMemo,
  deleteMemo,
  createMemos,
  updateMemo,
};

export default memoApi;
