const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shrutipawar9099:aartiparmita@cluster1.uanbdz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
