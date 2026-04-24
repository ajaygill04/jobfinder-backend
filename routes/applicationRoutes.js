const express = require("express");
const router = express.Router();
const {
  applyForJob,
  getMyApplications,
  getApplicationsForJob,
  updateApplicationStatus,
} = require("../controllers/applicationController");
const {
  protect,
  jobseekerOnly,
  employerOnly,
} = require("../middleware/authMiddleware");

router.post("/", protect, jobseekerOnly, applyForJob);
router.get("/my", protect, jobseekerOnly, getMyApplications);
router.get("/job/:jobId", protect, employerOnly, getApplicationsForJob);
router.put("/:id", protect, employerOnly, updateApplicationStatus);

module.exports = router;