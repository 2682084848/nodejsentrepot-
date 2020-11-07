const {Produst} = require("../../../mongodb/productDB");
module.exports=async(req,res)=>{
    let result = await Produst.find({"_id":req.query.id});
    res.render("admin/product/productedit",{
        lists:result
    })
}