// you have to go the the package.json and type:
// "type": "module"
// so that you can use es6 like import package
// and you also can to write: but it didn't work for me i don't know
// "start": "node server.js"
import express from "express";
import mongoose from "mongoose";
import Cards from "../models/dbCards.js";
import Cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "../config.env" });

// App Config
const app = express();
const PORT = process.env.PORT || 8001;
const connection_url = process.env.DATABASE;

// Middlewares
app.use(express.json());
/*
  => npm i cors
  => this will add the headers to every request
*/
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World!!!");
});

// for save the data to the database
app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
      // 500 = internal server error
    } else {
      res.status(201).send(data);
      // 201: data created
    }
  });
});

// for the retriving the data from the database
app.get("/tinder/card", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
      // 500 = internal server error
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(PORT, () => {
  console.log(`Listening on localhost: ${PORT}`);
});
