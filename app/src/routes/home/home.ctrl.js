"use strict"

const User = require("../../model/user");
const userStorage = require("../../model/userStorage");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: (req, res) => { 
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        // console.log(response);

        // console.log(req.body);
        // const id = req.body.id;
        // const psword = req.body.psword;

        // const users = userStorage.getUsers("id", "psword");

        // const response = {};
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
    },
};


module.exports = {
  output,
  process,
}