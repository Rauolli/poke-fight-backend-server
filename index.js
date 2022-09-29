require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
//const readPokemons = require("./fetchData");
const pokemonsRouter = require("./routes/pokemons");


// implementing Routes
//const ...Routes = require("./routes/...");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//fetchPokemonsData();

app.get("/", (req, res)=>{
    res.send(`Poke-Fight-Backend-Sever is running properly on Port: ${PORT}!`);
})



// use ROUTES
app.use("/pokemon", pokemonsRouter);


app.listen(PORT, ()=>{
    console.log(`Poke-Fight-Backend-Server is listening on port ${PORT}`);
})