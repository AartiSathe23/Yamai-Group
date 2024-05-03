const mongoose =require('mongoose');

const visitSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
        match: /^\S+@\S+\.\S+$/ // Regular expression for email format validation
    },
    date: {
        type: Date, 
    },
    service:{
        type:String,
        required:true,
    },
    companyName:{
        type:String,
    },
    message:{
        type:String,
    }
});

module.exports = mongoose.model("visit",visitSchema);