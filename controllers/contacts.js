
const Contact = require("../models/contacts")

const getContacts = (req, res)=>{
    Contact.find()
    .then((contacts)=>{
        res.send(contacts);
       
    }).catch((error)=>{
        res.sendStatus(500)
    })
    .finally
    {

    }
}

const createContact = (req, res)=>{
    const contact = new Contact({
        Name: req.body.Name,
        Surname: req.body.Surname,
        EmailAddress: req.body.EmailAddress,
        linkedClients: []
    })

    
    contact.save().then(()=>{
        console.log("Contact saved successfully in the database");
        console.log("This is a post request");
        res.sendStatus(200);
    }).catch((err)=>{
            console.log("There was an error saving the contact object to the database");
            console.log(err);
            res.sendStatus(500);
    })
}

const updateContact = (req, res)=>{
    Contact.findOneAndUpdate(
        { _id: req.params.contactID },
        {
            $set: {
                linkedClients: req.body.linkedClients
            }
        }
    ).then(()=>{
        res.sendStatus(200)
    }).catch(()=>{
        res.sendStatus(500)
    })
}

module.exports = 
{
    getContacts,
    createContact,
    updateContact
}