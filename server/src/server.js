require("dotenv").config();
const mongoose = require("mongoose");
const VidInfoModel = require("./db/vidInfo.model");
const { apiKey, mongoUrl } = process.env;

console.log(mongoUrl)

mongoose.connect(mongoUrl);

const express = require('express');
const app = express();
app.use(express.json());
app.listen(8080, () => console.log('Server started on port 8080'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
    next();
});



app.get("/api/test", async (req, res) => {
    try {
        const keyword = "shrek";
        const maxResults = 50; // make sure this is an integer without any extra characters
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&maxResults=${maxResults}&key=${apiKey}`
        );
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get("/api/shreks", async (req, res) => {
    try {
        const shreks = await VidInfoModel.find();
        res.json(shreks);
    } catch (error) {
        res.status(400), json({ error: error.message });
    }
});

app.get("/api/shreks/:id", async (req, res) => {
    try {
        const shrek = await VidInfoModel.findById(req.params.id);
        return res.json(shrek);
    } catch (error) {
        res.status(400), json({ error: error.message });
    }
});