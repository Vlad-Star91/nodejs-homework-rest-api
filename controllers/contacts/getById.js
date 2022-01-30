const { Contact } = require("../../models/contacts");
const createError = require("http-errors");

async function getContactById(req, res, next) {
  try {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
      throw new createError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    if (error.message.includes("Cast to object failed")) {
      error.status = 404;
    }
    next(error);
  }
}
module.exports = getContactById;
