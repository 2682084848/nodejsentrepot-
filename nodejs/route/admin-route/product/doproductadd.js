const formidable = require("formidable")
const {Produst}=require("../../../mongodb/productDB");
let path = require("path");
module.exports=async (req,res)=>{
    // 表单解析对象
    let form = new formidable.IncomingForm();
    // 配置图片存储位置
    console.log(path);
    form.uploadDir = path.join(__dirname, "../", '../', '../', "public", "uploads");
    
    // 保存文件后缀名
    form.keepExtensions = true;
    form.parse(req,async(err,fields,files)=>{
        let result=await Produst.create({
            title:fields.title,
            pic:files.pic.path.split("public")[1],
            cate_id:fields.cate_id,
            goods_id:fields.goods_id,
            postage:fields.postage,
            price:fields.price,
            content:fields.content
        });
        console.log(result);
        if(result){
            res.redirect("/admin/productlist")
        }
    })
    
}