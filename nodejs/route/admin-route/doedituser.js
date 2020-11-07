const {User} = require("../../mongodb/db")
module.exports=async(req,res)=>{
    let result =await User.updateOne({"_id":req.query.id}, {
        username:req.body.username,
        age:req.body.age,
        sex:req.body.sex,
        address:req.body.address
    })
    if(result){
        res.redirect("userlist")
    }
}