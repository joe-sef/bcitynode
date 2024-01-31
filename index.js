const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;
const MONGODB_URL = "mongodb+srv://josefipinge:ZxLyNs2tic9k0MX0@cluster0.0i6wwa4.mongodb.net/?retryWrites=true&w=majority";
const localurl = `mongodb://127.0.0.1:27017/`;

app.use(express.json());

const router = require("./router");
app.use(router);

router.use(cors())

const corsOptions = {
  origin: '*', // specify the allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable credentials (cookies, etc.)
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});