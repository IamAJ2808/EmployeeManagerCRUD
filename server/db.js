const mongoose = require("mongoose");

//DB Credentials ---> { user: "employeedb_owner", pwd: "employee2021" }
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  "mongodb://employeedb_owner:employee2021@localhost:27017/EmployeeManagerDB",
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + JSON.stringify(err, null, 2));
    }
  }
);
