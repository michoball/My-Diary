const express = require("express");
const router = express.Router();
const {
  getlabels,
  createlabel,
  deletelabel,
  updatelabel,
} = require("../controllers/labelController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getlabels).post(protect, createlabel);

router.route("/:id").delete(protect, deletelabel).put(protect, updatelabel);

module.exports = router;
