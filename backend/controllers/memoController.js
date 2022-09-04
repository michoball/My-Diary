const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Memo = require("../models/memoModel");

//@desc  유저 메모들 가져오기
//@route  GET  /api/memos
//@access  Private
const getMemos = asyncHandler(async (req, res) => {
  //Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const memos = await Memo.find({ user: req.user.id });

  res.status(200).json(memos);
});

//@desc  유저 메모 하나 가져오기
//@route  GET  /api/memos/:id
//@access  Private
const getMemo = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const memo = await Memo.findById(req.params.id);

  if (!memo) {
    res.status(404);
    throw new Error("memo not found");
  }

  if (memo.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  res.status(200).json(memo);
});

//@desc   메모 만들기
//@route POST  /api/memos
//@access  Private
const createMemo = asyncHandler(async (req, res) => {
  const { color, memo, major, title } = req.body;

  if (!memo || !title) {
    res.status(400);
    throw new Error("please add a title and memo content");
  }
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const memoData = await Memo.create({
    user: req.user.id,
    title,
    color,
    major,
    memo,
  });

  res.status(200).json(memoData);
});

//@desc  메모 삭제
//@route  DELETE  /api/memos/:id
//@access  Private
const deleteMemo = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const memo = await Memo.findById(req.params.id);

  if (!memo) {
    res.status(404);
    throw new Error("memo not found");
  }

  if (memo.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  await memo.remove();

  res.status(200).json({ id: req.params.id });
});

//@desc  메모 수정
//@route  PUT  /api/memos/:id
//@access  Private
const updateMemo = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  console.log(req.params.id);
  const memo = await Memo.findById(req.params.id);

  if (!memo) {
    res.status(404);
    throw new Error("memo not found");
  }

  if (memo.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  // new : true 는 바뀐부분만 수정해서 저장하겠다는 의미
  const updatedmemo = await Memo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedmemo);
});

module.exports = {
  getMemos,
  getMemo,
  createMemo,
  deleteMemo,
  updateMemo,
};
