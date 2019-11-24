var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, burgerID, cb) {
    orm.updateOne("burgers", objColVals, burgerID, function(res) {
      cb(res);
    });
  },
  deleteOne: function(burgerID, cb) {
    orm.deleteOne("burgers", burgerID, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
