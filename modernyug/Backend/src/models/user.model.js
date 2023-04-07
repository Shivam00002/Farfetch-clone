const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
   lastName: { type: String, required: true },
email: { type: String, required: true ,unique:true},
password: { type: String, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function(next, done) {
 
  const hash = bcrypt.hashSync(this.password, 8);
  this.password=hash
  return next()
})

userSchema.methods.checkPassword=function(password){
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("user", userSchema); // user => users
