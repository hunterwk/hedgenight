require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/api/api");

const { handleErrors } = require("./middleware/error.middleware");


if (!process.env.SERVER_SECRET) {
  // SERVER_SECRET env var is required for auth
  throw new Error("SERVER_SECRET is not set.");
}

const uri = process.env.MONGODB_URI || "mongodb://localhost/hedgenight";
mongoose.connect(uri, { 
  useNewUrlParser: true,  
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "client/build")));

// Define API routes here
app.use(routes);

app.use(handleErrors);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server listening on ${port}`));
