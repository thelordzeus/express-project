//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};
const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};
const createContact = (req, res) => {
  res.status(201).json({ message: "Get all contacts" });
};
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

module.exports = { getContacts, createContact, getContact };
