const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Calendar = require("../models/calendarModel");

//@desc  유저 달력 이벤트들 가져오기
//@route  GET  /api/calendars
//@access  Private
const getCalendars = asyncHandler(async (req, res) => {
  //Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const calendars = await Calendar.find({ user: req.user.id });

  res.status(200).json(calendars);
});

//@desc  달력 이벤트 만들기
//@route POST  /api/calendars
//@access  Private
const createCalendars = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("please add title");
  }
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const calendarsData = await Calendar.create({
    user: req.user.id,
    title,
    ...req.body,
  });

  res.status(200).json(calendarsData);
});

//@desc  달력 이벤트 삭제
//@route  DELETE  /api/calendars/:id
//@access  Private
const deletecalendar = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const calendar = await Calendar.findById(req.params.id);

  if (!calendar) {
    res.status(404);
    throw new Error("calendar not found");
  }

  if (calendar.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  await calendar.remove();

  res.status(200).json(calendar._id);
});

//@desc  달력 이벤트 수정
//@route  PUT  /api/calendars/:id
//@access  Private
const updatecalendar = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const calendar = await Calendar.findById(req.params.id);

  if (!calendar) {
    res.status(404);
    throw new Error("calendar not found");
  }

  if (calendar.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  // new : true 는 바뀐부분만 수정해서 저장하겠다는 의미
  const updatedcalendar = await Calendar.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedcalendar);
});

module.exports = {
  getCalendars,
  createCalendars,
  updatecalendar,
  deletecalendar,
};
