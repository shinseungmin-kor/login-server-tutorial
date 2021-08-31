"use srtict";

const express = require("express");
const app = express();
const home = require("./src/routes/home");


// 앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use-> 미들웨어를 등록하는 메서드

module.exports = app;

