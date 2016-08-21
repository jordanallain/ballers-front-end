'use strict';

// const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const getAllPlayersSuccess = (data) => {
  console.log(data);
  const displayAllPlayers = require('../templates/display-all-players.handlebars');
  $('#changing-content').html(displayAllPlayers({
    players: data
  }));
};


module.exports = {
  success,
  failure,
  getAllPlayersSuccess,
};
