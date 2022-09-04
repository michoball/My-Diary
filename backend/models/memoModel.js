const mongoose = require("mongoose");

const memoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
      match: [/^.{0,15}$/, "It should have less than 15 characters"],
    },
    memo: {
      type: String,
      required: [true, "Please add a memo"],
    },
    color: {
      type: String,
      required: true,
      enum: [
        "#f44336",
        "#ffeb3b",
        "#ff9f89",
        "#ffc107",
        "#cddc39",
        "#4caf50",
        "#2196f3",
        "#607d8b",
        "#795548",
        "#9c27b0",
      ],
    },
    major: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Memo", memoSchema);
