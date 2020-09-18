"use strict";

module.exports = function (app) {
    var todoList = require("./controller");

    app.route("/").get(todoList.index);
    
    app.route("/findUser").post(todoList.findUser);
    app.route("/register").post(todoList.register);
    app.route("/login").post(todoList.login);
    app.route("/loginStatus").post(todoList.loginStatus);
    app.route("/logout").post(todoList.logout);
    app.route("/userLogStatus").post(todoList.userLogStatus);

};