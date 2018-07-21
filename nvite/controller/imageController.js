var fs = require('fs');
const path = require("path");


module.exports = {
    getImageFromServer : function (req, res) {
        console.log("i hit this");
        var name = req.params.id;
        console.log(name);
        var npath = path.join(__dirname, '../api/images/' + name);
        res.sendFile(npath);
    }
}