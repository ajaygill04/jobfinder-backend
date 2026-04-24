const express = require("express");
const router = express.Router();
const {
  createJob,
  getJobs,
  getJobById,
  getMyJobs,
  deleteJob,
} = require("../controllers/jobController");
const { protect, employerOnly } = require("../middleware/authMiddleware");

router.get("/", getJobs);
router.get("/myjobs", protect, employerOnly, getMyJobs);
router.get("/:id", getJobById);
router.post("/", protect, employerOnly, createJob);
router.delete("/:id", protect, employerOnly, deleteJob);

module.exports = router;