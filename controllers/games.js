const Game = require("../models/Game");
const gamesRouter = require("../routes/games");

// CRUD
// POST ->  Create 

// POST ->  Create One  
const createGame = async (req, res)=>{
    const {rounds,
        playerName,
        playerImage,
        enemyName,
        enemyImage } = req.body;
    try{
        const newGame = await Game.create({
            rounds,
            playerName,
            playerImage,
            enemyName,
            enemyImage
        });
        res.send("Created a Game in MongoDB");
    }catch(err){
        res.status(500).send(err.message);
    }
};

// GET -> Read All
const getAllGames = async (req, res)=>{
    try{
        const games = await Game.find();
        res.status(200).json(games);
    }catch(err){
        res.status(500).send(err.message);
    }
};

// GET -> Read One 
// const getOneStudent = async (req, res)=>{
//     const { id } = req.body;
//     try{
//         const student = await Student.findById(id);
//         res.status(200).json(user);
//     }catch(err){
//         res.status(500).send(err.message);
//     }
// };

// UPDATE ->  Put 
// const updateStudent = async (req, res)=>{
//     const { id } = req.params;
//     const { name, first_name, email } = req.body;
//     try{
//         const updateStudent = await Student.findByIdAndUpdate(
//             id,
//             { name, first_name, email},
//             {new: true}
//         );

//     }catch(err){
//         res.status(500).send(err.message);
//     }
// };

// DELETE ->  Delete 
const deleteStudent = async (req, res)=>{
    const {} = req.body;
    try{

    }catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {
    getAllGames,
    createGame
};