const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// @desc 유저등록
// @route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { displayName, email, password } = req.body;

  //Validation
  if (!displayName || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // 유저 존재여부
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash 비번
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 유저 생성
  const user = await User.create({
    displayName,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      displayName: user.displayName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc 유저 로그인
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // 유저가 존재하고 그 유저의 비번이 req 비번과 같은지 체크
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      displayName: user.displayName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//@route  /api/users/oauth/success
//@access  Private
const oauthLogin = asyncHandler(async (req, res) => {
  const user = req.session.passport.user;

  const oAuthUser = await User.findOne({ _id: user });

  if (oAuthUser) {
    res.status(200).json({
      _id: oAuthUser._id,
      displayName: oAuthUser.displayName,
      avatar: oAuthUser.profile_image,
      token: generateToken(oAuthUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid OAuth user credentials");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  // 카카오 로그아웃 -> access 토큰이용
  // await fetch("https://kapi.kakao.com/v1/user/logout", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${req.body.token}`,
  //   },
  // }).catch((err) => console.error(err));

  if (req.session) {
    console.log("로그아웃");

    req.session.destroy(function (err) {
      if (err) throw err;
      console.log("세션 삭제하고 로그아웃됨");
      res.redirect("/");
    });
  }
});

//@desc  Get current user
//@route  /api/users/me
//@access  Private
const getMe = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(user);
});

// token 만들기
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  oauthLogin,
  logoutUser,
};
