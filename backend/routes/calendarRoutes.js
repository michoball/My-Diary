const express = require("express");
const router = express.Router();
const {
  createCalendars,
  getCalendars,
  updatecalendar,
  deletecalendar,
} = require("../controllers/calendarController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCalendars).post(protect, createCalendars);

router
  .route("/:id")
  .delete(protect, deletecalendar)
  .put(protect, updatecalendar);

module.exports = router;
