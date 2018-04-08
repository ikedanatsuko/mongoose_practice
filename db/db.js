var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema(
    { name: String },
    { collection: 'test_collection' }
);

exports.Test = mongoose.model('Test', TestSchema);