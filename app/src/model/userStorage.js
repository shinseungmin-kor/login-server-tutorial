"use strict"

class userStorage {
    static #users = {
        id: ["seungmin", "kimcoding", "park"],
        psword: ["1234", "5678", "2468"],
        name: ["신승민", "김코딩", "박팀장"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // console.log(newUsers);
        return newUsers;
    }
}

module.exports = userStorage;