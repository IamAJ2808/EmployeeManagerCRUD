const mongoose = require("mongoose");

var Employee = mongoose.model("Employee", {
  name: { type: String },
  position: { type: String },
  office: { type: String },
  salary: { type: Number },
  age: { type: Number },
});

module.exports = Employee;
