const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  state: { type: String, required: true },
  lastLogin: { type: Date },
  passwordAttempts: { type: Number }
});

UserSchema.methods.toJson = function(){
    let user = this.toObject();
    delete user.password;
    return user;
}

mongoose.model("user", UserSchema);
module.exports = mongoose.model("user");
