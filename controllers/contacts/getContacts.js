const { Contact } = require("../../models/contacts");

async function getContacts(req, res, next) {
  try {
    const result = await Contact.find({});
    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = getContacts;
