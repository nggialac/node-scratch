const express = require("express");
const router = express.Router();
const userController = require("../controllers/index.controller");
const apiVersionControl = require("../middlewares/index.middleware")

router.get("/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
  });
});

router.get(
  "/api/users",
  apiVersionControl.redirectVersion({
    "2020-12-01": userController.listUserV1,
    "2022-12-01": userController.listUserV2,
  })
);

module.exports = router;
