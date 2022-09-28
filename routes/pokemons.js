const express = require(express);

// controllers
const {
    //fetchPokemonData
    getAllPokemons,
    getSinglePokemon,
} = require("../controllers/pokemons");

const pokemonsRouter = express.Router();
pokemonsRouter.route("/").get(getAllPokemons);
pokemonsRouter.route("/:id").get(getSinglePokemon);

module.exports = pokemonsRouter;