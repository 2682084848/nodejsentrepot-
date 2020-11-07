const {User}=require("../../mongodb/db")
module.exports= async(req,res)=>{
    let page = req.query.page || 1
    let size = Number(req.query.size) || 10
    let total = await User.countDocuments({ "username": new RegExp(req.query.username, "gi") })
    console.log(total);
    let startpage = (page - 1) * size
    let totalPage = Math.ceil(total / size)
    const result = await User.find({ "username": new RegExp(req.query.username, "gi") }).limit(size).skip(startpage)
    console.log(result);
    res.render("./admin/userlist",{
        list:result,
        total: total,
        page: page,
        size: size,
        totalPage: totalPage,
        username: req.query.username
    });
}