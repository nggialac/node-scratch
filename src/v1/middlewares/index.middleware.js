//ext
exports.redirectVersion = (payload) => {
    return (req, res, next) => {
      const version = req.headers["x-github-api-version"];
      if (!payload[version]) {
        return res.json({
          message: "Api version invalid",
        });
      }
    };
  };