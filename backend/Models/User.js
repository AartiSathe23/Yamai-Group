const mongoose =require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    phoneNo: {
        type: String,
        
        match: /^[0-9]{10}$/ // Regular expression for 10-digit phone number
    },
    email: {
        type: String,
        
        match: /^\S+@\S+\.\S+$/ // Regular expression for email format validation
    },
    message: {
        type: String,
        
    }
});

module.exports = mongoose.model("users",usersSchema);