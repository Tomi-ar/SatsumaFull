const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    username: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      set: (v) => Math.round(v),
    },
    searchFrases: {
      type: [String],
    },
    userConfirmed: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = model("Users", userSchema);
