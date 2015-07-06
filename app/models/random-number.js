var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RandomNumberSchema = new Schema({
    name: String,
    value: Number
});

var RandomNumber = mongoose.model('RandomNumber', RandomNumberSchema);


module.exports = {
    insert: function(value) {
        new RandomNumber({ name: "foobar", value: value }).save(function(error) {
           console.log('error', error);
        });
    },
    findAll: function(callback) {
        return RandomNumber.find({}).exec(callback);
    }
};

