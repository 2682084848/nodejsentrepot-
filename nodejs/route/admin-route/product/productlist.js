const {Produst} = require("../../../mongodb/productDB")
module.exports=async(req,res)=>{
    let page = Number(req.query.page) || 1
    let size = Number(req.query.size) || 2
    let total = await Produst.countDocuments({})
    let startpage = (page - 1) * size

    // 计算总的页数
    let totalPage = Math.ceil(total / size)

    //查询数据
    const result = await Produst.find({}).limit(size).skip(startpage)
    res.render("./admin/product/productlist",{
        total: total,
        page: page,
        size: size,
        totalPage: totalPage,
        lists:result
    });
}