const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/student",{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("链接成功");
}).catch((err)=>{
    console.log(err);
    console.log("链接失败");
});
