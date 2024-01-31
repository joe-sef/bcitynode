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
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
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