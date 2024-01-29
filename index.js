const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;
const MONGODB_URL = "mongodb+srv://josefipinge:ZxLyNs2tic9k0MX0@cluster0.0i6wwa4.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

const router = require("./router");
app.use(router);
app.use(cors());

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}
app.use(cors(corsOptions));


/**connect to mongodb */
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
   
    console.log(err);
  });

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});