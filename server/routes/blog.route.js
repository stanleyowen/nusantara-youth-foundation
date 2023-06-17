const router = require("express").Router();
const { putData, fetchData, deleteData } = require("../util/blogOperation");

router.get("/", (req, res) =>
  fetchData((cb) => {
    // Category
    res
      .status(cb.statusCode)
      .send(cb.data ? JSON.stringify(cb.data, null, 2) : {});
  })
);

router.post("/", (req, res) => {
  {
    // Add timestamp of the post
    req.body.timestamp = Date.now();

    putData(req.body, (cb) =>
      res.status(cb.statusCode).send(JSON.stringify(cb, null, 2))
    );
  }
});

router.delete("/:key", (req, res) =>
  deleteData(req.params.key, (cb) =>
    res.status(cb.statusCode).send(JSON.stringify(cb, null, 2))
  )
);

module.exports = router;
