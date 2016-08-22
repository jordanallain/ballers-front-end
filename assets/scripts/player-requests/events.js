'use strict';

const api = require('./api');
const ui = require('./ui');

// const onGetFavoritePlayers = function(){
//   api.getFavoritePlayers()
//     .done(function(resp){ui.getFavoritePlayersSuccess(resp, {onAddPlayer}))
//     .fail(ui.failure);
// };

const onAddPlayer = function(data){
  console.log("onAddPlayer data = " + data);
  api.addPlayer(data)
    .done(ui.addPlayerSuccess)
    .fail(ui.failure);
};

const onGetAllPlayers = function(){
  api.getAllPlayers()
    .done(ui.getAllPlayersSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.get-all-players').on('click', onGetAllPlayers);
};

module.exports = {
  addHandlers,
  onAddPlayer,
};
