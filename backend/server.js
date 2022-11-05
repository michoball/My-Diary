const PORT = process.env.PORT || 5000;

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const path = require("path");

const { errorHandler } = require("./middleware/errorMiddleware");

const colors = require("colors");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");
const app = express();
// 데이터베이스 연결
connectDB();

//passport 설정
require("./config/passport")(passport);

// 세션
app.use(
  session({
    secret: "mydiary kang",
    resave: false,
    saveUninitialized: false,
    // 내 몽고DB에 세션 저장 --> JWT를 쓸거라 일단 안씀
    // store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);
// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// 데이터 통신 body로 json을 쓰겠다는 미들웨어
app.use(express.json());
//urlencoded 를 사용하기 위해서 쓴 거
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/memos", require("./routes/memoRoutes"));
app.use("/api/labels", require("./routes/labelRoutes"));
app.use("/api/calendars", require("./routes/calendarRoutes"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the diary app" });
});

//Serve Frontend
if (process.env.NODE_ENV === "production") {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (_, res) =>
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the diary app" });
  });
  // app.use(
  //   cors({
  //     origin: "http://localhost:3000",
  //     credentials: true,
  //   })
  // );
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`server start port ${PORT}`));
