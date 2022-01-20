const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
// router.route('/').get(allUsers)

module.exports = router;
