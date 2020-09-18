"use strict";

var response = require("./res");
var connection = require("./conn");

exports.findUser = function (req, res) {
  var USERNAME = req.body.USERNAME;

    connection.query(
      "SELECT * FROM users where USERNAME = ?",
      [USERNAME],
      function (error, rows, fields) {
        if (error) {
          console.log(error);
        } else {
          response.ok(rows, res);
        }
      }
    );
};

exports.userLogStatus = function (req, res) {
  var USERNAME = req.body.USERNAME;

  connection.query(
    "SELECT STATUS FROM users where USERNAME = ?",
    [USERNAME],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.register = function (req, res) {

  var USERNAME = req.body.USERNAME;
  var PASSWORD = req.body.PASSWORD;
  var datetime = new Date();

    connection.query(
      "INSERT INTO users (USERNAME, PASSWORD,CREATE_AT,LOGIN_AT,LOGOUT_AT,STATUS) values (?,?,?,?,?,?)",
      [USERNAME, PASSWORD, datetime, datetime,"","1"],
      function (error, rows, fields) {
        if (error) {
          response.error(error, res);
          console.log(error);
        } else {
          response.ok("Berhasil registrasi!", res);
        }
      }
    );
};

exports.login = function (req, res) {

  var USERNAME = req.body.USERNAME;
  var PASSWORD = req.body.PASSWORD;

  connection.query(
    "SELECT * FROM users where USERNAME = ? && PASSWORD = ?",
    [USERNAME, PASSWORD],
    function (error, rows, fields) {
      if (error) {
        response.error(error, res);
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.loginStatus = function (req, res) {

  var USERNAME = req.body.USERNAME;
  var datetime = new Date();

  connection.query(
    "UPDATE users SET LOGIN_AT = ?, STATUS = ? WHERE USERNAME = ?",
    [datetime, "1", USERNAME],
    function (error, rows, fields) {
      if (error) {
        response.error(error, res);
        console.log(error);
      } else {

        response.ok(rows, res);
      }
    }
  );
};

exports.logout = function (req, res) {

  var USERNAME = req.body.USERNAME;
  var datetime = new Date();

  connection.query(
    "UPDATE users SET LOGOUT_AT = ?, STATUS = ? WHERE USERNAME = ?",
    [datetime, "0", USERNAME],
    function (error, rows, fields) {
      if (error) {
        response.error(error, res);
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.index = function (req, res) {
    response.ok("Masuk Boss!", res);
};