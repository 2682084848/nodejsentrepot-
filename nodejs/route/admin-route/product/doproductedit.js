const {Produst} = require("../../../mongodb/productDB");
const formidable = require("formidable");
const path = require("path");
module.exports=(req,res)=>{
    // console.log(req.body);
    // console.log(formidable);
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname,"../","../","../","public","uploads");
    form.keepExtensions=true;
    form.parse(req,async(err,fields,files)=>{
        // console.log(fields);
        console.log(files.pic.name);
        console.log(req.query.id);
        if(files.pic.name){
            var result =await Produst.updateOne({"_id":req.query.id},{
                title: fields.title,
                pic: files.pic.path.split("public")[1],
                cate_id: fields.cate_id,
                goods_id: fields.goods_id,
                price: fields.price,
                fee: fields.fee,
                content: fields.content
            })
        }else if(!files.pic.name){
            var result = await Produst.updateOne({"_id":req.query.id},{
                title: fields.title,
                cate_id: fields.cate_id,
                goods_id: fields.goods_id,
                price: fields.price,
                fee: fields.fee,
                content: fields.content
            })
        }
        if(result){
            res.redirect("/admin/productlist")
        }
    })
}