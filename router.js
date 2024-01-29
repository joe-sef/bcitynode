
const router = require("express").Router();
const { getClients, createClient, updateClient } = require("./controllers/clients");
const { getContacts, createContact, updateContact } = require("./controllers/contacts")
router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});


router.get("/clients", getClients)
router.post("/clients", createClient)
router.put("/clients/:clientID", updateClient)
router.post("/contacts", createContact)
router.get("/contacts", getContacts)
router.put("/contact/:contactID", updateContact)
module.exports = router;