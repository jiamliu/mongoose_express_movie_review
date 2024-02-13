const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const actorsSchema = new Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true},
        alive: {type: Boolean, required: true},
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('Actor', actorsSchema)








  

