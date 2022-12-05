class UserController {
  listUserV1(req, res, next) {
    try {
      res.json({
        message: "Api version 1",
      });
    } catch (error) {
      next(error);
    }
  }

  listUserV2(req, res, next) {
    try {
      res.json({
        message: "Api version 2",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
