const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// allows environment variables in .env file
require('dotenv').config();

// creates express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware 
app.use(cors());
// allows us to parse json file
app.use(express.json());

// uri is from our mongoose db atlas dashboard
const uri = process.env.ATLAS_URI;
// this is how we start our connection to mongoDB
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// starts the server by listening to certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});