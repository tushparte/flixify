// keys.js figures out what set of keys to use.
if (process.env.NODE_ENV === "production") {
  // we are in production env,  return prod set of keys
  module.exports = require("./prod");
} else {
  // we are in production env,  return dev set of keys
  module.exports = require("./dev");
}
