const mongoose =require('mongoose');

const quoteSchema = new mongoose.Schema({
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
        
    },
    companyName:{
        type:String,
    },
    phoneNo: {
        type: String,
        
        match: /^[0-9]{10}$/ // Regular expression for 10-digit phone number
    },
    message:{
        type:String,
    }
});

module.exports = mongoose.model("quote",quoteSchema);