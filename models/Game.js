const mongoose = require("mongoose");
const { Schema } = mongoose;

const Game = new Schema({
    rounds: {
        type: Number,
        required: true,
    },
    playerName: {
        type: String,
        required: true,
    },
    playerImage:{
        type: String,
        required: true,
    },
    enemyName: {
        type: String,
        required: true,
    },
    enemyImage:{
        type: String,
        required: true,
    }
    });

module.exports = mongoose.model("games", Game);