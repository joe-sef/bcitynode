

const Client = require("../models/clients")

const getClients = (req, res) => {
    Client.find().sort({Name: 1})
        .then((clients) => {
            res.send(clients);
            console.log(clients)
        }).catch((error) => {

        })
        .finally
    {

    }
}

const createClient = async (req, res) => {
    const client = new Client({
        Name: req.body.Name,
        ClientCode: req.body.ClientCode,
        linkedContacts: []
    })


    client.save().then(() => {
        console.log("client has been saved successfully in the database");
        res.status(201).send("200");
    }).catch(() => {
        console.log("There was an error saving the object to the database");

        res.status(500).send("500")
    })
}

const updateClient = async (req, res) => {

    
    Client.findOneAndUpdate(
        { _id: req.params.clientID },
        {
            $set: {
                linkedContacts: req.body.linkedContacts
            }
        }
    ).then(()=>{
        res.status(201).send("200")
    }).catch(()=>{
        res.status(501).send("500")
    })

}



module.exports =
{
    getClients,
    createClient,
    updateClient
}