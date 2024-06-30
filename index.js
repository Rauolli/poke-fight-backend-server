require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8088;
const cors = require("cors");
// implementing Routes
const pokemonsRouter = require("./routes/pokemons");
const gamesRouter = require("./routes/games");

// implementing MongoDB
const db = require("./db");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// connecting to DB
// DB-Connection has to be actualized to a new MongoDB-Connection before using db()
//db();

app.get("/", (req, res)=>{
    res.send(`Poke-Fight-Backend-Sever is running properly on Port: ${PORT}!`);
})


// use ROUTES
app.use("/pokemon", pokemonsRouter);
app.use("/game", gamesRouter);


app.listen(PORT, ()=>{
    console.log(`Poke-Fight-Backend-Server is listening on port ${PORT}`);
})