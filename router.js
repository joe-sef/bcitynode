
const router = require("express").Router();
const cors = require('cors');

const corsOptions = {
  origin: '*', // specify the allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable credentials (cookies, etc.)
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(cors(corsOptions))

const { getClients, createClient, updateClient } = require("./controllers/clients");
const { getContacts, createContact, updateContact } = require("./controllers/contacts")
router.get("/", (req, res) => {
  res.send("Server online");
});


router.get("/clients", getClients)
router.post("/clients", createClient)
router.put("/clients/:clientID", updateClient)
router.post("/contacts", createContact)
router.get("/contacts", getContacts)
router.put("/contacts/:contactID", updateContact)
module.exports = router;
