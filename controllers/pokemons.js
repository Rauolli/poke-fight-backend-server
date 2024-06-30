const pokemonsJsonData = require("../pokemons.json");
const path = require("path");

const getAllPokemons = (req, res) => {
    try{
        res.json(pokemonsJsonData);
    }catch(err){
        console.log(err);
    }
};

const getSinglePokemon = (req, res) => {
    const paramsID = req.params.id;
    try{
        const singlePokemon = pokemonsJsonData.find(pokemon => pokemon.id === parseInt(paramsID));       
        if (singlePokemon) {
            res.status(200).json(singlePokemon);
        }else{          
            res.send(`The id: ${paramsID} does not exists!`);
        }
    }catch(err){
        console.log(err);
    }
};

const getSinglePokemonImage = (req, res) => {
    const paramsID = req.params.id;
    const image = path.join(__dirname, `../imgs/${paramsID}.svg`);
    res.sendFile(image);
};


module.exports = {
    getAllPokemons,
    getSinglePokemon,
    getSinglePokemonImage
};