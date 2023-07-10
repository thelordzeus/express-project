//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const asyncHandler = require("express-async-handler"); // used to handle async errors, no need to use try catch block

const getContacts = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});
const getContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});
const createContact = asyncHandler((req, res) => {
  console.log("The request body is", req.body);
  const { name, email, phone, type } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are required");
  }
  res.status(201).json({ message: "Get all contacts" });
});
const updateContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

const deleteContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
