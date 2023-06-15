const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests
  message:
    "We're sorry, but you have made too many requests to our servers. Please try again later.",
});

module.exports = (req, res, next) => {
  limiter(req, res, (err) => {
    if (err) {
      return res
        .status(529)
        .send(
          "We're sorry, but you have made too many requests to our servers. Please try again later."
        );
    } else next();
  });
};
