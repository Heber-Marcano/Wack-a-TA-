const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  won: {
    type: Boolean,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => timestamp.toLocaleDateSring(),
  }
  
},
{
    toJSON:{
        virtuals:true,
        getters: true
    } 
}
);

const Game = model('game', gameSchema);

module.exports = Game;