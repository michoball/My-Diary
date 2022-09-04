import axios from "axios";

const API_URL = "/api/calendars/";

//유저 라벨 전부 가져오기
const getCalendars = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

// 유저 라벨 지우기
const deleteCalendar = async (calendarId, token) => {
  console.log(calendarId);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + calendarId, config);

  return response.data;
};

// 유저가 라벨 생성하기
const createCalendar = async (calendarData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, calendarData, config);

  return response.data;
};

// 라벨 수정하기
const updateCalendar = async (calendarId, calendarData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + calendarId, calendarData, config);

  return response.data;
};

const labelApi = {
  getCalendars,
  deleteCalendar,
  createCalendar,
  updateCalendar,
};

export default labelApi;
