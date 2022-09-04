const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    provider: String,
    oAuthId: {
      type: String,
    },
    displayName: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    profile_image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
