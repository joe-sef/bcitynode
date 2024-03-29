
const Contact = require("../models/contacts")

const getContacts = (req, res)=>{
    Contact.find().sort({Name: 1})
    .then((contacts)=>{
        res.send(contacts);
       
    }).catch((error)=>{
        res.status(500).send("500")
    })
    .finally
    {

    }
}

const createContact = async (req, res)=>{
    const contact = new Contact({
        Name: req.body.Name,
        Surname: req.body.Surname,
        EmailAddress: req.body.EmailAddress,
        linkedClients: []
    })

    
    contact.save().then(()=>{
        console.log("Contact saved successfully in the database");
        res.status(201).send("200");
    }).catch((err)=>{
            console.log("There was an error saving the contact object to the database");
            console.log(err);
            res.status(500).send("500")
    })
}

const updateContact = async (req, res)=>{
    Contact.findOneAndUpdate(
        { _id: req.params.contactID },
        {
            $set: {
                linkedClients: req.body.linkedClients
            }
        }
    ).then(()=>{
        res.status(201).send(req.body.linkedClients);
    }).catch(()=>{
        res.status(500).send("500")
    })
}

module.exports = 
{
    getContacts,
    createContact,
    updateContact
}