const mongoose = require('mongoose');

const { Schema } = mongoose;

const dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  culture: {
    type: Schema.Types.ObjectId,
    ref: 'Culture',
    required: true
  }
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
