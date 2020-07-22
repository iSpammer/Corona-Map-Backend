const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    lat: {
      type: String,
      required: 'lat cannot be blank'
    },
    long: {
      type: String,
      required: 'long  cannot be blank'
    }
  },
  { collection: 'loc' }
);

module.exports = mongoose.model('loc', locSchema);