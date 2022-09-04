const mongoose = require("mongoose");

const calendarSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    labelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Label",
    },
    title: {
      type: String,
      required: [true, "Please add a labelTitle"],
      match: [/^.{0,15}$/, "It should be have less than 15 charcters"],
    },
    labelTitle: String,
    start: String,
    end: String,
    color: {
      type: String,
      required: true,
      enum: [
        "#f44336",
        "#ff9f89",
        "#ffeb3b",
        "#ffc107",
        "#4caf50",
        "#b6e8eb",
        "#2196f3",
        "#89988e",
        "#795548",
        "#9c27b0",
      ],
    },
    allDay: {
      type: Boolean,
      default: false,
    },
    daysOfWeek: {
      type: [String],
      default: undefined,
    },
    startRecur: String,
    endRecur: String,
    startTime: String,
    endTime: String,
    overlap: Boolean,
    display: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Calendar", calendarSchema);
