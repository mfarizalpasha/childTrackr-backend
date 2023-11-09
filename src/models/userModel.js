const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      validate: {
        validator: function (password) {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
          return regex.test(password);
        },
        message:
          "Password harus terdiri dari minimal 8 karakter, 1 huruf besar, 1 huruf kecil, dan 1 angka",
      },
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Registration = mongoose.model("Registration", registrationSchema);

module.exports = Registration;
