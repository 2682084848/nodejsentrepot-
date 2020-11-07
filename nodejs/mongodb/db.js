const mongoose = require("mongoose");
require("./mongodb")
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        minlength:1,
        maxlength:16,
        trim:true
    },
    password:{
        type:String,
        minlength:6,
        maxlength:16,
        trim:true
    },
    sex:{
        type:String,
        require:[true,"性别不能是空的哦！"],
        enum:{
            values:["男","女","其他"]
        },
        message:"请选择性别哦！"
    },
    age:{
        type:Number,
        min:14,
        max:900
    },
    address:{
        type:String
    }
})
const User = mongoose.model('User',UserSchema);
module.exports={
    User
}