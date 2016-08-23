'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

// const onSeeOtherUserLists = function(){
//   api.getOtherUserLists()
//     .done(ui.success)
//     .fail(ui.failure);
// };

const onCreatePlayer = function(event){
  event.preventDefault();
  let data = getFormFields(this);
  console.log(data);
  api.createPlayer(data)
    .done(ui.success)
    .fail(ui.failure);
};

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
  $('#get-all-players').on('click', onGetAllPlayers);
  $('#get-favorites').on('click', onGetFavoritePlayers);
  $('#create-player').on('submit', onCreatePlayer);
};

module.exports = {
  addHandlers,
  onAddPlayer,
  onRemovePlayer,
};
