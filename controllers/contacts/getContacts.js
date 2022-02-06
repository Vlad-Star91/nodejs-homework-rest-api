const { Contact } = require("../../models/contacts");

async function getContacts(req, res, next) {
  try {
    const { page = 1, limit = 10 } = req.query;
    const { _id } = req.user;
    const skip = (page - 1) * limit;
    const result = await Contact.find({ owner: _id }, "-createdAt -updateAt", {
      skip,
      limit: +limit,
    }).populate("owner", "email");
    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = getContacts;
