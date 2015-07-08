var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RandomNumberSchema = new Schema({
    name: String,
    value: Number
});

var RandomNumber = mongoose.model('RandomNumber', RandomNumberSchema);


module.exports = {
    insert: function(value, callback) {
        new RandomNumber({ name: "foobar", value: value }).save(callback);
    },
    findAll: function(callback) {
        return RandomNumber.find({}).exec(callback);
    }
};

