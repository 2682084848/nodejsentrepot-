const { User } = require('../../mongodb/db')
module.exports = async (req, res) => {
    let result = await User.findOne({ "_id": req.query.id })
    console.log(result);
        res.render("admin/edituser", {
            editData: result
        });
}