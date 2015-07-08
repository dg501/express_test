var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RandomNumberSchema = new Schema({
    value: Number,
    createdAt: Date
});

var RandomNumber = mongoose.model('RandomNumber', RandomNumberSchema);


module.exports = {
    insert: function(value, callback) {
        new RandomNumber({ value: value, createdAt: new Date() }).save(callback);
    },
    findLatest: function(callback) {
        return RandomNumber.find().limit(1).sort({ createdAt: -1 }).exec(callback);
    }
};

