const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts);
router.route("/").post(createContact);
router.route("/:id").get(getContact);
router.route("/:id").put();
router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = router;
