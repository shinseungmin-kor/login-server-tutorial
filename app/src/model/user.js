"use strict"

const userStorage = require("./userStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const client = this.body;
        const { id, psword } = userStorage.getUserInfo(client.id);
        // console.log(id, psword);
        if(id){
            if(id === client.id && psword === client.psword) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};

    }
    register() {
        const client = this.body;
        const response = userStorage.save(client);
        return response;
    }
}

module.exports = User;