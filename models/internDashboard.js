const mongoose= require('mongoose');

const internModel = mongoose.Schema({
   timein: {
    type: Date,
    default: Date.now
   },
   timeout: {
    type: Date,
    default: Date.now
   },
   taskupdate: {
    type: String
   }
})

module.exports = mongoose.model("Attendance", internModel);