const express = require("express");
const createError = require("http-errors");
const Joi = require("joi");
const {
  getContactsController,
  getContactByIdController,
  postContactController,
  putContactController,
  patchContactController,
  deleteContactController,
} = require("../../controllers/contacts");

const { Contact, schemas } = require("../../models/contacts");
const { authenticate } = require("../../middlewares/index.js");
const router = express.Router();

router.get("/", authenticate, getContactsController);

router.get("/:id", getContactByIdController);

router.post("/", authenticate, postContactController);

router.delete("/:contactId", deleteContactController);

router.put("/:contactId", putContactController);

router.patch("/:contactId/favorite", patchContactController);

module.exports = router;
