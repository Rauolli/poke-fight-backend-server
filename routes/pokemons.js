const express = require("express");

// controllers
const {
    getAllPokemons,
    getSinglePokemon,
    getSinglePokemonType
} = require("../controllers/pokemons");

const pokemonsRouter = express.Router();
pokemonsRouter.route("/").get(getAllPokemons);
pokemonsRouter.route("/:id").get(getSinglePokemon);
pokemonsRouter.route("/:id/:info").get(getSinglePokemonType);
module.exports = pokemonsRouter;