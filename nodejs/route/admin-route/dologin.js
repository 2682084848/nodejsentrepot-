const { User } = require("../../mongodb/db");
module.exports = async (req, res) => {
    let isUser = await User.findOne({
        "username": req.body.username
    })
    let isPass = await User.findOne({
        "password": req.body.password
    })
    let userInfo = {
        username: req.body.username,
        password: req.body.password
    }
    if (!isUser) {
        res.send('<script>alert("该用户不存在"); location.href = "/admin/login"</script>')
    } else if (!isPass) {
        res.send('<script>alert("密码错误"); location.href = "/admin/login"</script>')
    } else {
        let isLogin = await User.findOne(userInfo)
        if (isLogin) {
            req.app.locals.username = req.body.username;
            res.redirect("/admin/userlist")
        }
    }

}