const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

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
