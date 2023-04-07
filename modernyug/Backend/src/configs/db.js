const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://saikiran11471:saikiran11471@cluster0.b1mxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
