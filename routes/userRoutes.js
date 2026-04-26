const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

//Protected route
router.get("/profile", protect, (req, res) => {
   res.json({
      success: true,
      message: "Access granted to Protected route",
      user: req.user,
   });
});

module.exports = router;
