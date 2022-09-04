const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Label = require("../models/labelModel");

//@desc  유저 라벨들 가져오기
//@route  GET  /api/labels
//@access  Private
const getlabels = asyncHandler(async (req, res) => {
  //Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const labels = await Label.find({ user: req.user.id });

  res.status(200).json(labels);
});

//@desc  라벨 만들기
//@route POST  /api/labels
//@access  Private
const createlabel = asyncHandler(async (req, res) => {
  const { color, labelTitle, allDay, daysOfWeek } = req.body;

  if (!labelTitle) {
    res.status(400);
    throw new Error("please add labelTitle");
  }
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const labelData = await Label.create({
    user: req.user.id,
    labelTitle,
    color,
    allDay,
    daysOfWeek,
  });

  if (!labelData) {
    console.log(labelData);
    res.status(401);
    throw new Error("You can't make LabelData");
  }

  res.status(200).json(labelData);
});

//@desc  라벨 삭제
//@route  DELETE  /api/labels/:id
//@access  Private
const deletelabel = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const label = await Label.findById(req.params.id);

  if (!label) {
    res.status(404);
    throw new Error("label not found");
  }

  if (label.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  await label.remove();

  res.status(200).json({ success: true });
});

//@desc  라벨 수정  --- > 필요시 사용
//@route  PUT  /api/labels/:id
//@access  Private
const updatelabel = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const label = await Label.findById(req.params.id);

  if (!label) {
    res.status(404);
    throw new Error("label not found");
  }

  if (label.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  // new : true 는 바뀐부분만 수정해서 저장하겠다는 의미
  const updatedLabel = await Label.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedLabel);
});

module.exports = {
  getlabels,
  createlabel,
  deletelabel,
  updatelabel,
};
