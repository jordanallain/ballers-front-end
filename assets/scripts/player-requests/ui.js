'use strict';

// const app = require('../app');
// const show = require('../show-functions.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const addPlayerSuccess = (data) => {
  console.log("addPlayerSuccess data = " + data);
  console.log(data.favorite);
};

const getFavoritePlayersSuccess = (data) => {
  console.log(data);
  console.log(data.favorites);
  console.log(data.favorites[0].player);
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
  getFavoritePlayersSuccess
};
