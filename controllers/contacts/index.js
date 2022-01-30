const getContactsController = require("./getContacts");
const getContactByIdController = require("./getById");
const postContactController = require("./postContact");
const putContactController = require("./putContact");
const patchContactController = require("./patchContact");
const deleteContactController = require("./deleteContact");

module.exports = {
  getContactsController,
  getContactByIdController,
  postContactController,
  putContactController,
  patchContactController,
  deleteContactController,
};
