const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = new express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
const admin = require("./route/admin")
// console.log(admin);
app.use("/admin", admin);

app.listen(3000, () => {
    console.log("3000");
})