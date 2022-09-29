const fs = require("fs");

//const jsonData = require("./file.json");

const readPokemons = async() =>{
    try{
        const jsonData = fs.readFileSync("./file.json");
        const data = await JSON.parse(jsonData);
        return data;       
    }catch(err){
        console.log(err);
    }
};

//readPokemons();


module.exports = readPokemons;
