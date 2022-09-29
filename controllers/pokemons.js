const readPokemons = require("../fetchData");

const getAllPokemons = async (req, res) => {
    try{
        res.json(await readPokemons());
    }catch(err){
        console.log(err);
    }
};

const getSinglePokemon = async (req, res) => {
    const paramsID = req.params.id;
    try{
        const data = await readPokemons();       
        const pokemonWidthID = data.filter(pokemon => {
            const { id } = pokemon;
            if (id ===  parseInt(paramsID)) {
                return pokemon;   
            }
        });

        if (pokemonWidthID.length === 0) {
            res.send(`The id: ${paramsID} does not exists!`);
        }else{
            res.json(pokemonWidthID);
        }
    }catch(err){
        console.log(err);
    }
};

const getSinglePokemonType = async (req, res) => {
    
    try{
        
    }catch(err){
        console.log(err);
    }
};

module.exports = {
    getAllPokemons,
    getSinglePokemon,
    getSinglePokemonType
};