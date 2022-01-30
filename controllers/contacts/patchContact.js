const { Contact, schemas } = require("../../models/contacts");
const createError = require("http-errors");

async function patchContact(req, res, next) {
  try {
    const { error } = schemas.updateFavorite.validate(req.body);
    if (error) {
      throw new createError(400, error.message);
    }
    const { contactId } = req.params;
    const { name, email, phone } = req.body;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!result) {
      throw new createError("Not found");
    }
    res.json(result);
  } catch (error) {
    if (error.message.includes("Cast to ObjectId failed")) {
      error.status = 400;
    }
    next(error);
  }
}

module.exports = patchContact;
