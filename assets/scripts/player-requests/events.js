'use strict';

const api = require('./api');
const ui = require('./ui');
// const getFormFields = require('../../../lib/get-form-fields');

// const onUpdatePlayer = function(id, newTeam){
//   api.updatePlayer(id, newTeam)
//     .done(ui.success)
//     .fail(ui.failure);
// };

// const onCreatePlayer = function(event){
//   event.preventDefault();
//   const data = getFormFields(this);
//   api.createPlayer(data)
//     .done(ui.success)
//     .fail(ui.failure);
// };

const onRemovePlayer = function(data){
  api.removePlayer(data)
    .done(ui.removePlayerSuccess)
    .fail(ui.failure);
};

const onGetFavoritePlayers = function(){
  api.getFavoritePlayers()
    .done(ui.getFavoritePlayersSuccess)
    .fail(ui.failure);
};

const onAddPlayer = function(data){
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
  $('#get-all-players').on('click', onGetAllPlayers);
  $('#get-favorites').on('click', onGetFavoritePlayers);
  // $('#create-player').on('submit', onCreatePlayer);
  // $('#update-player').on('submit', onUpdatePlayer);
};

module.exports = {
  addHandlers,
  onAddPlayer,
  onRemovePlayer,
  // onUpdatePlayer,
};
