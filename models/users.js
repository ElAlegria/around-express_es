const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    require: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
    validate: {
      validator: function () {
        return /https?:\/\/(www)?[\w._~:\/?%#[\]@!$&'()*+,;=-]+\/?/;
      },
    },
  },
});

module.exports = mongoose.model("user", userSchema);
