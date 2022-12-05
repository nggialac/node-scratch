const md5 = require("md5");

module.exports = genSign = (params) => {
  secretKey = "xxYY";
  const sortKeys = [];
  params.keyToken = secretKey;
  params.version = "v1";
  for (const key in params) {
    if (key !== "sign") {
      sortKeys.push(key);
    }
  }
  sortKeys.sort();
  let paramsHolder = "";
  sortKeys.forEach((element) => {
    paramsHolder += element + params[element];
  });

  return md5(paramsHolder).toString();
};
