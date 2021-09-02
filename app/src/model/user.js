"use strict"

const userStorage = require("./userStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const bodys = this.body;
        const { id, psword } = userStorage.getUserInfo(bodys.id);
        // console.log(id, psword);
        if(id){
            if(id === bodys.id && psword === bodys.psword) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};

    }
}

module.exports = User;