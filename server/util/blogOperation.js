const { Deta } = require("deta");
const axios = require("axios");
const errorReporter = require("./errorReporter");

const deta = Deta(
  process.env.SPACE_DETA_PROJECT_KEY ?? process.env.DETA_PROJECT_KEY
);
const db = deta.Base("Blogs");

// Fetch all the data from the database
async function getAllBlogs(cb) {
  let res = await db.fetch();
  let data = res.items;

  // Fetch all the data from the database when limit is reached
  while (res.last) {
    res = await db.fetch({}, { last: res.last });
    data = data.concat(res.items);
  }

  cb({ statusCode: 200, data });
}

async function putData(data, cb) {
  // Check object length
  if (data.length > 1) {
    await db
      .putMany(data.slice(0, 25))
      .then(async (res) => {
        // send the second request if the length of data is larger than 25
        if (data.length > 25) {
          let res = {};
          data.slice(25).forEach((item) => {
            res[item.key] = item.value;
          });

          await axios.put(
            `${`${req.protocol}://${req.get("host")}`}/deta`,
            res,
            {
              auth: {
                username: process.env.HTTP_AUTH_USERNAME,
                password: process.env.HTTP_AUTH_PASSWORD,
              },
            }
          );
        }
        cb({ statusCode: 200, res });
      })
      .catch((err) => {
        errorReporter(err);
        cb({ statusCode: err.statusCode ?? 400, data: err });
      });
  } else {
    await db
      .put(data, data.key)
      .then((data) => cb({ statusCode: 200, data }))
      .catch((err) => {
        errorReporter(err);
        cb({ statusCode: err.statusCode ?? 400, data: err });
      });
  }
}

async function deleteData(key, cb) {
  await db
    .delete(key)
    .then((data) => cb({ statusCode: 200, data }))
    .catch((err) => {
      errorReporter(err);
      cb({ statusCode: err.statusCode ?? 400, data: err });
    });
}

module.exports = { getAllBlogs, putData, deleteData };
