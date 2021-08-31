const mongoose = require('mongoose')

const UserFeedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please input name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please input email']
    },
    mobileNumber: {
        type: Number,
        required: false
    },
    feedback: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: true,
        default: "Mumbai, India"
    },
    service: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserFeedback',UserFeedbackSchema);