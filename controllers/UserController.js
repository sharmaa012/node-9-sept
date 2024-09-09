const users = require('../user.json')
function getUser(req,res){
    try{
        res.json(users)

    }catch(err){

    }
}
function getParticularUser(req,res){
    try{
        let Id = parseInt(req.params.id);
        let user = users.find((user)=> user.id == Id)
        res.json(user)

    } catch(err){
        console.log(err)
    }
}

module.exports = {
    getParticularUser,
    getUser
}