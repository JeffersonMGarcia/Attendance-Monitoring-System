const mongoose = require('mongoose');

const accountModel = mongoose.Schema({
    name: {
        type: String
    },
    uname: {
        type: String
    },
    course: {
        type: String
    },
    hours: {
        type: String
    },
    password: {
        type: String
    }
},{
    timestamps: false
}
)

module.exports =  mongoose.model("Accounts", accountModel)