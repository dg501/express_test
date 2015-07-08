var mongodb = require ('mongodb');
var MongoClient = mongodb.MongoClient;
var url =  'mongodb://user:password@ds061298.mongolab.com:61298/testing-stuff';

MongoClient.connect(url, function (error, database) {
    if (err) {
        console.log("Unable to connect; error:", error)
    } else {
        console.log("Connection established to", url);

        //insert button function to save number

        database.close();
    }
});