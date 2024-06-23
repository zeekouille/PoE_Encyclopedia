const express = require('express');
const app = express();
const port = 3010;
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const cors = require('cors');
app.use(cors());
require('dotenv').config();

const dbUrl = process.env.DB_URL;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;


const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(err => {
    console.error("Error connecting to the database", err);
  });

// Définir le schéma pour shaperPrice
const shaperPriceSchema = new Schema({
  fragmentOfHydraPrice: { type: Number, default: 102 },
  fragmentOfChimeraPrice: { type: Number, default: 120 },
  fragmentOfMinotaurPrice: { type: Number, default: 120 },
  fragmentOfPhoenixPrice: { type: Number, default: 10 },
});

// Créer le modèle pour shaperPrice
const ShaperPrice = model('ShaperPrice', shaperPriceSchema);

// Route pour insérer les prix des fragments
app.get('/insert-shaper-prices', async (req, res) => {
  try {
    const newPrices = new ShaperPrice();
    await newPrices.save();
    res.send('Shaper prices inserted successfully!');
  } catch (error) {
    console.error("Error inserting shaper prices", error);
    res.status(500).send('Error inserting shaper prices');
  }
});

// Route pour récupérer les prix des fragments
app.get('/get-shaper-prices', async (req, res) => {
  try {
    const prices = await ShaperPrice.findOne().sort({ _id: -1 }).exec();
    res.json(prices);
  } catch (error) {
    console.error("Error fetching shaper prices", error);
    res.status(500).send('Error fetching shaper prices');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
