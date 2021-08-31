const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
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
    createdAt: {
        type: Date,
        default: Date.now
    }
});

exports.UserModel = mongoose.model('User', UserSchema);
exports.UserSchema = UserSchema;