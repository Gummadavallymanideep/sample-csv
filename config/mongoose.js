const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deep:Mani24@projectcluster.tx9gp0v.mongodb.net/upload-files?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;