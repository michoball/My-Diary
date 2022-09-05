const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// 토큰을 이용한 유저 인증 middleware
// 유저가 생성될때 각 유저에게 고유의 토큰을 발급해줘서
// 서버에서 calendar, label, memo 통신시 유저의 data만을 가져오고
// 다른 유저의 data를 쓰지못하게 보호해주는 역할을 한다.
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 헤더에서 토큰 가져오기
      token = req.headers.authorization.split(" ")[1];
      // 토큰 검증
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // 토큰으로부터 유저 가져오기
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

// 세션을 이용한 유저 인증 middleware
// 본 프로젝트에서는 로그인 시 세션을 만드는 OAuth 로그인에서  oauth/success에서만 사용한다.
// passport 라이브러리에서 session을 사용해서 넣음
const ensureAuth = (req, res, next) => {
  console.log(" ensureAuth request User~~~", req.user);
  if (req.user) {
    return next();
  } else {
    res.status(400);
    throw new Error("Not authorized oauth user");
  }
};

module.exports = { protect, ensureAuth };
