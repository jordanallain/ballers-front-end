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

  // console.log(data.user_id);
  // console.log(data.player_id);
};

// const getFavoritePlayersSuccess = (data) => {
//   console.log(data);
//   const displayFavoritePlayers = require('../templates/display-favorite-players.handlebars');
//   $('#changing-content').html(displayFavoritePlayers({
//     players: data
//   }));
// };

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
  // getFavoritePlayersSuccess
};
