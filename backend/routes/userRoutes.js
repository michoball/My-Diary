const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  oauthLogin,
  logoutUser,
} = require("../controllers/userController");

const { protect, ensureAuth } = require("../middleware/authMiddleware");

const redirectURL = {
  success: "https://my-diary-myunghun.herokuapp.com/oauth/success",
  failure: "https://my-diary-myunghun.herokuapp.com",
};

// google Oauth login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// google Oauth login callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: redirectURL.failure,
    successRedirect: redirectURL.success,
  }),
  (req, res) => {
    console.log(
      "google requset User: ",
      req.user,
      "user~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ google ~~"
    );
  }
);

// kakao Oauth login

router.get("/kakao", passport.authenticate("kakao"));
// kakao Oauth login callback

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: redirectURL.failure,
    successRedirect: redirectURL.success,
  }),
  (req, res) => {
    console.log(
      "kakao requset User: ",
      req.user,
      "user~~~~~~~~~~~~~~~~~~~~~~~kakao ~"
    );
  }
);
// naver Oauth login

router.get("/naver", passport.authenticate("naver"));

// naver Oauth login callback
// creates an account if no account of the new user
router.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: redirectURL.failure,
    successRedirect: redirectURL.success,
  }),
  (req, res) => {
    console.log(
      "naver requset User: ",
      req.user,
      "user~~~~~~~~~~~~~~~~~~~~~~~naver ~"
    );
  }
);

router.post("/", registerUser);
router.get("/oauth/success", ensureAuth, oauthLogin);
router.post("/logout", logoutUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
