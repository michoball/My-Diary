const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;
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
    // store: MongoStore({ mongooseConnection: mongoose.Connection }),
    // store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);
// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the diary app" });
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// app.all(
//   "/api/users",
//   // cors({ origin: "http://localhost:3000", credentials: true }),
//   function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     // res.send(req.body);
//     next();
//   }
// );

//Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/memos", require("./routes/memoRoutes"));
app.use("/api/labels", require("./routes/labelRoutes"));
app.use("/api/calendars", require("./routes/calendarRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`server start port ${PORT}`));
