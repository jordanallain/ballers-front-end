'use strict';

const api = require('./api');
const ui = require('./ui');

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
};
