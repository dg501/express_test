var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({ name: String, type: String });

animalSchema.methods.findSimilarTypes = function (cb) {
    return this.model('Animal').find({ type: this.type }, cb)
};

var Animal = mongoose.model('Animal', animalSchema);

var dog = new Animal({ type: 'dog' });

dog.findSimilarTypes(function (err, dogs) {
    console.log(dogs);
});

animalSchema.statistics.findByName = function (name, cb) {
    return this.find ({ name: new RegExp(name, 'i' )}, cb)
};

Animal.findByName('fido', function (err, animals) {
    console.log(animals);
});

mongoose.connect('mongodb://localhost/test');