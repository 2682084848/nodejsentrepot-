const mongoose = require("mongoose");
require("./mongodb")
const ProductSchema = new mongoose.Schema({
    title: {  
        type: String,   
        required: [true, "用户名不能为空"],  
        trim: true   
    },
    pic: {  
        type: String
    },
    postage: {  
        type: String
    },
    cate_id: { 
        type: String
    },
    goods_id: { 
        type: String
    },
    price: {  
        type: Number,
    },
    content: {
        type: String
    }
})
const Produst = mongoose.model('Product',ProductSchema);
module.exports={
    Produst
}