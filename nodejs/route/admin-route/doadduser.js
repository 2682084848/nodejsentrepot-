const {User} = require("../../mongodb/db");
module.exports= async (req,res)=>{
    let result = await User.create({
        username:req.body.username,
        password:req.body.password,
        age:req.body.age,
        sex:req.body.sex,
        address:req.body.address
    })
    
    if(result){
        res.redirect("userlist")
    }
}