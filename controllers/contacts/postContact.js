const { Contact, schemas } = require("../../models/contacts");
const createError = require("http-errors");
// const { authenticate } = require("../../middlewares/index.js");
async function postContact(req, res, next) {
  try {
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw new createError(400, error.message);
    }
    const data = { ...req.body, owner: req.user._id };
    const result = await Contact.create(data);
    res.status(201).json(result);
  } catch (error) {
    if (error.message.includes("validation failed")) {
      error.status = 400;
    }
    next(error);
  }
}
module.exports = postContact;
