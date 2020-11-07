const {User}=require("../../mongodb/db");
module.exports=async(req,res)=>{
    // console.log(req.query.id);
    let result=await User.findOneAndDelete({"_id":req.query.id})
    if(result){
        res.redirect("/admin/userlist")
    }
}