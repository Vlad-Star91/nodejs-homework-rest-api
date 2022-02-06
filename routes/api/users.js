const express = require("express");

const { User } = require("../../models/user");
const { authenticate } = require("../../middlewares/index");
const router = express.Router();

router.get("/current", authenticate, async (req, res, next) => {
  res.json({
    email: req.user.email,
  });
});

router.get("/logout", authenticate, async (req, res, next) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: "" });
    res.status(204).send();
  } catch (error) {}
});
module.exports = router;
