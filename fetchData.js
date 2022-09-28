const fs = require("fs");

//const jsonData = require("./file.json");

let jsonData = "";

try{
    jsonData = fs.readFileSync("./file.json");
}catch(err){
    console.log(err);
}

const readPokemons = async(req, res) =>{
    const data = await JSON.parse(jsonData);
    res.json(data);
};

//readPokemons();


module.exports = readPokemons;
