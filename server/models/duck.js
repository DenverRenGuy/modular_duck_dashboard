var mongoose = require('mongoose');

var DuckSchema = new mongoose.Schema({
    name: {type: String},
    duckType: {type: String},
    age: {type: Number}
}, {timestamps: true})

var Duck = mongoose.model('Duck', DuckSchema)
