const express = require("express");

// controllers
const {
    getAllPokemons,
    getSinglePokemon,
    getSinglePokemonImage
} = require("../controllers/pokemons");

const pokemonsRouter = express.Router();
pokemonsRouter.route("/").get(getAllPokemons);
pokemonsRouter.route("/:id").get(getSinglePokemon);
pokemonsRouter.route("/image/:id").get(getSinglePokemonImage);
module.exports = pokemonsRouter;