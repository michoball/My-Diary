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

// google Oauth login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// google Oauth login callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000",
    successRedirect: "http://localhost:3000/oauth/success",
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
    failureRedirect: "http://localhost:3000",
    successRedirect: "http://localhost:3000/oauth/success",
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

router.get(
  "/naver",
  passport.authenticate("naver", {
    failureRedirect: "http://localhost:3000",
  })
);

// naver Oauth login callback
// creates an account if no account of the new user
router.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: "http://localhost:3000",
  }),
  (req, res) => {
    console.log(
      "naver requset User: ",
      req.user,
      "user~~~~~~~~~~~~~~~~~~~~~~~naver ~"
    );
    res.redirect("http://localhost:3000/oauth/success");
  }
);

router.post("/", registerUser);
router.get("/oauth/success", ensureAuth, oauthLogin);
router.post("/logout", logoutUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
