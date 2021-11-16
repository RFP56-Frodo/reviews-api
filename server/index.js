const express = require('express');
const seq = require('../db/db.js');
const Review_Api = require('../db/Reviews_Api.js');
const app = express();
app.use(express.json());
const port = 3000;

// Review.getChars(5).then((results) => {
//   console.log(results);
// });

app.get('/reviews', (req, res) => {
  let count = 5;
  let page = 1;
  if (req.query.count) {
    count = parseInt(req.query.count);
  }
  if (req.query.page) {
    page = parseInt(req.query.page);
  }
  let productId = parseInt(req.query.product_id);
  let sort = req.query.sort;

  let resObj = {};
  resObj.product = productId;
  resObj.page = page;
  resObj.count = count;
  Review_Api.getReviews(productId, sort, page, count).then((results) => {
    res.json(results);
  }).catch((error) => {
    console.log(error);
    res.status(500);
    res.send(error);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// Review_Api.getCharReviewAverage(2).then((results) => {
//   console.log(results);
// }).catch((err) => {
//   console.log(err);
// });
