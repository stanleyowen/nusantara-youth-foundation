const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests
  keyGenerator: (req) => {
    return (
      req.headers["x-forwarded-for"] || req.connection.remoteAddress || req.ip
    );
  },
  handler: (_, res) => {
    res.status(429).send(
      JSON.stringify(
        {
          statusCode: 429,
          statusMessage: "Too many requests",
          message: "Too many requests, please try again later.",
        },
        null,
        2
      )
    );
  },
});

module.exports = (req, res, next) => {
  limiter(req, res, (err) => {
    if (err) {
      res.status(429).send(
        JSON.stringify(
          {
            statusCode: 429,
            statusMessage: "Too many requests",
            message: "Too many requests, please try again later.",
          },
          null,
          2
        )
      );
    } else next();
  });
};
