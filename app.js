"use srtict";

const express = require("express");
const app = express();
const home = require("./routes/home");
const PORT = 3000; 

// 앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use-> 미들웨어를 등록하는 메서드

app.listen(PORT, () => {
    console.log("서버 가동");
});