const express = require("express");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

//Protected route
router.get("/profile", protect, (req, res) => {
   res.json({
      message: "User Profile",
      user: req.user,
   });
});

module.exports = router;