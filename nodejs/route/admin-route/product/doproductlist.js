const {Produst} = require("../../../mongodb/productDB");
module.exports=async(req,res)=>{
    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 5;
    let total = await Produst.countDocuments({
        title:new RegExp(req.query.title,"gi"),
        price:{$gt:req.query.price1,$lt:req.query.price2}
    })
    let startpage = (page - 1) * size;
    let min = req.query.price1 || 0;
    let max = req.query.price2 || 100000;
    let totalPage = Math.ceil(total/size);
    const result = await Produst.find({
        title:new RegExp(req.query.title,"gi"),
        price:{$gt:min,$lt:max}
    }).skip(startpage).limit(size);
    res.render("./admin/product/doproductlist.ejs",{
        total: total,
        page: page,
        size: size,
        totalPage: totalPage,
        lists: result
    }) 
}