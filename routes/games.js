const express = require("express");

// controllers
const {
    getAllGames,
    createGame,
    // deleteGame,
    // updateGame
} = require("../controllers/games");

const pokemonsRouter = express.Router();
pokemonsRouter.route("/leaderboard").get(getAllGames);
pokemonsRouter.route("/save").post(createGame);
// pokemonsRouter.route("/:id/:info").get(getSinglePokemonType);
module.exports = pokemonsRouter;