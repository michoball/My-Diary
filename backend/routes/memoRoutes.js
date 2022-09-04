const express = require("express");
const router = express.Router();
const {
  getMemos,
  getMemo,
  createMemo,
  deleteMemo,
  updateMemo,
} = require("../controllers/memoController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getMemos).post(protect, createMemo);

router
  .route("/:id")
  .get(protect, getMemo)
  .delete(protect, deleteMemo)
  .put(protect, updateMemo);

module.exports = router;
