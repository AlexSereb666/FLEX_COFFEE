const {Schema, model} = require("mongoose")

const Feedback = new Feedback({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
})

module.exports = Feedback('Feedback', Feedback)
