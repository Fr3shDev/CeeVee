"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
function getUsers(request, response) {
    response.send([]);
}
function getUser(request, response) {
    response.send({});
}
function createUser(request, response) {
    response.status(201).send({
        id: 1,
        username: "Hans",
        email: "hans@gmail.com"
    });
}
//# sourceMappingURL=users.js.map