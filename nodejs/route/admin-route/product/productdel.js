const {Produst} = require("../../../mongodb/productDB");
module.exports = async(req,res)=>{
    console.log(req.query);
   let result =await Produst.findOneAndDelete({"_id":req.query.id});
   if(result){
       res.redirect("/admin/productlist")
   }
}