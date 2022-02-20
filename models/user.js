const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { string } = require("joi");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
      minlenght: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const registerJoiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().email().required(),
  verify: verifyEmailSchema,
});

const User = model("user", userSchema);

const schemas = {
  register: registerJoiSchema,
};
module.exports = {
  User,
  schemas,
};
