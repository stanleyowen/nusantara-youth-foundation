const router = require("express").Router();
const {
  getAllBlogs,
  getSpecificBlog,
  putData,
  deleteData,
} = require("../util/blogOperation");

router.get("/", (_, res) =>
  getAllBlogs((cb) =>
    res.status(cb.statusCode).send(JSON.stringify(cb.data, null, 2))
  )
);

router.get("/:key", (req, res) => {
  getSpecificBlog(req.params.key, (cb) =>
    res.status(cb.statusCode).send(JSON.stringify(cb.data, null, 2))
  );
});

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
