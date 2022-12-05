"use strict";

const TIME_REQUIRED = 30;
// const SERVER_SIGN = "SERVER_SIGN";

const { genSign } = require("../utils/sign");

var that = (module.exports = {
  replays: async (req, res, next) => {
    try {
      const { stime, sign, nonce, club } = req.query;

      if (!stime || !sign || !nonce) {
        return res.status(400).json({
          message: "req invalid",
        });
      }

      const isTime = Math.floor((Date.now() - stime) / 1000);
      if (isTime > 30) {
        return res.status(401).json({
          message: "time expired",
        });
      }

      const signServer = await genSign(req.query);
      console.log(`signServer:::${signServer}::::sign:::${sign}`);
      if (sign !== signServer) {
        return res.status(401).json({
          message: "(sign) invalid",
        });
      }
      return res.status(200).json({
        message: "success",
      });
    } catch (error) {
      console.error(error);
      next(error);
      return;
    }
  },
});
