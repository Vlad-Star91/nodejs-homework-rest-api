const { Contact, schemas } = require("../../models/contacts");
const createError = require("http-errors");

async function putContact(req, res, next) {
  try {
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw new createError(400, error.message);
    }
    const { contactId } = req.params;
    const { name, email, phone } = req.body;
    if (!req.body) {
      res.status(400).json({ message: "missing fields" });
    }
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!result) {
      throw new createError("Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = putContact;
