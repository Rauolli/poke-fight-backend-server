const pokemonsJsonData = require("../fetchData");

const getAllPokemons = async (req, res) => {
    try{
        res.json(await pokemonsJsonData);
    }catch(err){
        console.log(err);
    }
};

const getSinglePokemon = async (req, res) => {
    const paramsID = req.params.id;
    try{
        const data = await readPokemons();       
        const pokemonWidthID = data.find(pokemon => {
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
    const { id, info} = req.params;

    try{
        // console.log(typeof(info));
        if((info === 'name') || (info === 'type') || (info === 'base')){
            const data = await readPokemons();      
            const pokemonWidthID = data.find(pokemon => {
                //const { id } = pokemon;
                if (pokemon.id ===  parseInt(id)) {
                    return pokemon;   
                }
            });

            if (pokemonWidthID.length === 0) {
                res.send(`The id: ${id} does not exists!`);
            }else{
                res.json(pokemonWidthID[info]);
            }
        }else{
            return res.send(`${info} is not a valid type. There is only name, type or base posible.`);   
        }
        
    }catch(err){
        console.log(err);
    }
};

module.exports = {
    getAllPokemons,
    getSinglePokemon,
    getSinglePokemonType
};