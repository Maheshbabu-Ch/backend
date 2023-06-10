const mongoose = require('mongoose')

const contentSchema = {
    name : String,
    passcode : String
}

const content = mongoose.model("project", contentSchema)

module.exports = content