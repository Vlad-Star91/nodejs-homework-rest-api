const { Contact } = require("../../models/contacts");
const createError = require("http-errors");

async function deleteContact(req, res, next) {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
      throw new createError(404, "Not found");
    }
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    next(error);
  }
}

module.exports = deleteContact;
