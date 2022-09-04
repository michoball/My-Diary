const mongoose = require("mongoose");

const labelSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    labelTitle: {
      type: String,
      match: [/^.{0,10}$/, "라벨 이름은 10자 이하여야 합니다."],
    },
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
      require: true,
      default: false,
    },
    daysOfWeek: {
      type: [String],
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Label", labelSchema);
