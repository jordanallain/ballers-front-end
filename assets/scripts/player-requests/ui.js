'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const removePlayerSuccess = (data) => {
  console.log(data);
};

const addPlayerSuccess = (data) => {
  console.log("addPlayerSuccess data = " + data);
  console.log(data.favorite);
};

const getFavoritePlayersSuccess = (data) => {
  const displayFavoritePlayers = require('../templates/display-favorite-players.handlebars');
  $('#changing-content').html(displayFavoritePlayers({
    players: data.favorites
  }));
  
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
  addPlayerSuccess,
  getFavoritePlayersSuccess,
  removePlayerSuccess,
};
