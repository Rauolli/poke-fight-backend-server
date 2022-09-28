const getAllPokemons = async (req, res) => {
    try{
        const data = await fetch(jsonData);
        res.json(data); 
        // let pokemons = await res.json();
    }catch(err){
        console.log(err);
    }
};

const getSinglePokemon = async (req, res) => {
    const { id } = req.params;
    try{
        const data = await fetch(jsonData);
        if(data.id === id){
        res.json(data); 
        }
        res.send("This id does not exists.");
    }catch(err){
        console.log(err);
    }
};

module.exports = {
    getAllPokemons,
    getSinglePokemon
};