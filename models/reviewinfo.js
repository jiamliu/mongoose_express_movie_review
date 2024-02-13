const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const reviewSchema = new Schema(
    {
        movie: {type: Schema.Types.ObjectId, required: true, ref:'Movie'},
        score: {type: Number, required: true, min: 0, max: 10},
        comment: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('Review', reviewSchema)