const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(PORT, () => {
  console.log("Hello. Server is start on port: " + PORT);
});

app.post("/all", (req, res) => {
  res.json([
    { id: 1, cat: "nature", src: "img/1.jpg" },
    { id: 2, cat: "nature", src: "img/2.jpg" },
    { id: 3, cat: "nature", src: "img/3.jpg" },
    { id: 4, cat: "nature", src: "img/4.jpg" },
    { id: 5, cat: "human", src: "img/ava.jpg" },
    { id: 6, cat: "human", src: "img/5.jpg" },
    { id: 7, cat: "human", src: "img/6.jpg" },
    { id: 8, cat: "human", src: "img/7.jpg" },
    { id: 9, cat: "human", src: "img/8.jpg" },
    { id: 10, cat: "human", src: "img/9.jpg" },
    { id: 11, cat: "nature", src: "img/11.jpg" },
    { id: 12, cat: "nature", src: "img/22.jpg" },
    { id: 13, cat: "nature", src: "img/33.jpg" },
    { id: 14, cat: "nature", src: "img/44.jpg" },
    { id: 15, cat: "human", src: "img/avaava.jpg" },
    { id: 16, cat: "human", src: "img/55.jpg" },
    { id: 17, cat: "human", src: "img/66.jpg" },
    { id: 18, cat: "human", src: "img/77.jpg" },
    { id: 19, cat: "human", src: "img/88.jpg" },
    { id: 20, cat: "human", src: "img/99.jpg" },
  ]);
});

app.post("/human", (req, res) => {
  res.json([
    { id: 5, cat: "human", src: "img/ava.jpg" },
    { id: 6, cat: "human", src: "img/5.jpg" },
    { id: 7, cat: "human", src: "img/6.jpg" },
    { id: 8, cat: "human", src: "img/7.jpg" },
    { id: 9, cat: "human", src: "img/8.jpg" },
    { id: 10, cat: "human", src: "img/9.jpg" },
    { id: 15, cat: "human", src: "img/avaava.jpg" },
    { id: 16, cat: "human", src: "img/55.jpg" },
    { id: 17, cat: "human", src: "img/66.jpg" },
    { id: 18, cat: "human", src: "img/77.jpg" },
    { id: 19, cat: "human", src: "img/88.jpg" },
    { id: 20, cat: "human", src: "img/99.jpg" },
  ]);
});

app.post("/nature", (req, res) => {
  res.json([
    { id: 1, cat: "nature", src: "img/1.jpg" },
    { id: 2, cat: "nature", src: "img/2.jpg" },
    { id: 3, cat: "nature", src: "img/3.jpg" },
    { id: 4, cat: "nature", src: "img/4.jpg" },
    { id: 11, cat: "nature", src: "img/11.jpg" },
    { id: 12, cat: "nature", src: "img/22.jpg" },
    { id: 13, cat: "nature", src: "img/33.jpg" },
    { id: 14, cat: "nature", src: "img/44.jpg" },
  ]);
});
