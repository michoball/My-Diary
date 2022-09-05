const GoogleStrategy = require("passport-google-oauth20").Strategy;
const KakaoStrategy = require("passport-kakao").Strategy;
const NaverStrategy = require("passport-naver").Strategy;
const mongoose = require("mongoose");
const User = require("../models/userModel");

module.exports = function (passport) {
  // GOOGLE 소셜로그인
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/users/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("google user check: ", profile, "end~~~~~~~~~~~");
        const newUser = {
          provider: profile.provider,
          oAuthId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          profile_image: profile.photos[0].value,
        };

        try {
          let user = await User.findOne({ oAuthId: profile.id });
          if (user) {
            console.log("이미 있는 유저 : ", user);
            done(null, user);
          } else {
            user = await User.create(newUser);
            console.log("새로운 유저 : ", user);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
          cb(err);
        }
      }
    )
  );

  // KAKAO 소셜로그인

  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_CLIENT_ID,
        clientSecret: process.env.KAKAO_CLIENT_SECRET,
        callbackURL: "/api/users/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("kakao user check: ", profile, "end~~~~~~~~~~~");
        const newUser = {
          provider: profile.provider,
          oAuthId: profile.id,
          displayName: profile.displayName,
          profile_image: profile._json.properties.profile_image,
        };
        try {
          let user = await User.findOne({ oAuthId: profile.id });
          if (user) {
            console.log("이미 있는 유저 : ", user);
            done(null, user);
          } else {
            user = await User.create(newUser);
            console.log("새로운 유저 : ", user);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
          cb(err);
        }
      }
    )
  );

  // NAVER 소셜로그인
  passport.use(
    new NaverStrategy(
      {
        clientID: process.env.NAVER_CLIENT_ID,
        clientSecret: process.env.NAVER_CLIENT_SECRET,
        callbackURL: "/api/users/naver/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("naver user check: ", profile, "end~~~~~~~~~~~");
        const newUser = {
          name: profile.displayName,
          oAuthId: profile.id,
          email: profile.emails[0].value,
          displayName: profile.displayName,
          profile_image: profile._json.profile_image,
          provider: "naver",
        };
        try {
          let user = await User.findOne({ oAuthId: profile.id });
          if (user) {
            console.log("이미 있는 유저 : ", user);
            done(null, user);
          } else {
            user = await User.create(newUser);
            console.log("새로운 유저 : ", user);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
          cb(err);
        }
      }
    )
  );

  // login이 최초로 성공했을 때만 호출되는 함수
  // done(null, user.id)로 세션을 초기화 한다.
  passport.serializeUser((user, done) => {
    console.log("Serialized user :", user);
    done(null, user._id);
  });

  // 사용자가 페이지를 방문할 때마다 호출되는 함수
  // done(null, id)로 사용자의 정보를 각 request의 user 변수에 넣어준다.
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById({ _id: id }).catch((err) => {
      console.log("Error deserializing ", err), done(err, null);
    });
    console.log("DeSerialized user :", user);
    if (user) {
      done(null, user);
    }
  });
};
