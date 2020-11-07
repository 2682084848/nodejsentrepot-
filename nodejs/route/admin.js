const express = require("express");
const route = new express();
// 用户管理
route.get("/login",require("./admin-route/login"));
route.get("/adduser",require("./admin-route/adduser"));
route.post("/doadduser",require("./admin-route/doadduser"))
route.get("/userlist",require("./admin-route/userlist"));
route.get("/edituser",require("./admin-route/edituser"));
route.post("/doedituser",require("./admin-route/doedituser"));
route.get("/delteruser",require("./admin-route/deleteuser"));
route.get("/searchuser",require("./admin-route/searchuser"));
// 商品管理
route.get("/productlist",require("./admin-route/product/productlist"));
route.get("/productadd",require("./admin-route/product/productadd"));
route.post("/doproductadd",require("./admin-route/product/doproductadd"))
route.get("/productedit",require("./admin-route/product/productedit"));
route.post("/doproductedit",require("./admin-route/product/doproductedit"));
route.get("/productdel",require("./admin-route/product/productdel"));
// 搜索
route.get("/doproductlist",require("./admin-route/product/doproductlist"));
// 登录
route.post("/dologin",require("./admin-route/dologin"));
module.exports = route;