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
  console.log("The request body is", req.body);
  const { name, email, phone, type } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are required");
  }
  res.status(201).json({ message: "Get all contacts" });
};
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
